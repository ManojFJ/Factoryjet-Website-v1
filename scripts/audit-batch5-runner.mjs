#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');

const VOCAB = JSON.parse(fs.readFileSync(path.join(HERE, 'data/capability-terms.json'), 'utf8'));
const SYSTEMS = [...VOCAB.systems].sort((a, b) => b.length - a.length);
const CAPS = [...VOCAB.capabilities].sort((a, b) => b.length - a.length);

const SLOP_TERMS = [
  'seamless', 'seamlessly', 'robust', 'elevate', 'elevates', 'elevating',
  'unlock', 'unlocks', 'unlocking', 'supercharge', 'supercharges', 'supercharging',
  'empower', 'empowers', 'empowering', 'game-changer', 'game changer',
  'leverage', 'leverages', 'leveraging', 'delve', 'delves', 'delving',
  'testament', 'beacon', 'landscape', 'tapestry'
];

export const TARGET_FILES = [
  'src/app/services/ai-agent-development/ai-chatbot/page.tsx',
  'src/app/services/ai-agent-development/ai-customer-support/page.tsx',
  'src/app/services/ai-agent-development/ai-marketing-agent/page.tsx',
  'src/app/services/ai-agent-development/ai-sales-agent/page.tsx',
  'src/app/services/ai-agent-development/ai-scheduling-agent/page.tsx',
  'src/app/services/ai-agent-development/ai-voice-agent/page.tsx',
  'src/app/services/ai-agent-development/ai-workflow-automation/page.tsx',
  'src/app/services/ai-agent-development/manufacturing-operations-agent/page.tsx',
  'src/app/services/ai-agent-development/procurement-supply-chain-agent/page.tsx',
  'src/app/services/ai-agent-development/rfq-bidding-agent/page.tsx',
  'src/app/services/ai-agents-for-healthcare/page.tsx',
  'src/app/services/ai-agents-for-real-estate/page.tsx',
];

// This is the EXACT algorithm from scripts/estimate-rendered-words.mjs
export function extractProse(raw) {
  let s = raw;
  s = s.replace(/^import[^\n]*\n/gm, '');
  s = s.replace(/export const metadata[\s\S]*?\n\};\n/m, '');
  s = s.replace(/const [A-Za-z_]*[Ss]chema[\s\S]*?\n\};\n/gm, '');
  s = s.replace(/dangerouslySetInnerHTML=\{\{[\s\S]*?\}\}/g, '');
  s = s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/[^\n]*$/gm, '');
  s = s.replace(/(className|href|src|id|alt|rel|target|type|width|height|loading|fetchPriority)=\{?["'][^"']*["']\}?/g, '');

  const out = [];
  const JSXISH = /<[A-Za-z/]/;
  for (const m of s.matchAll(/'([^'\\\n]{25,})'|"([^"\\\n]{25,})"|`([^`\\]{25,})`/g)) {
    const text = m[1] || m[2] || m[3];
    if (JSXISH.test(text)) continue;
    out.push(text);
  }
  for (const m of s.matchAll(/>\s*([A-Za-z][^<>{}]{20,}?)\s*</g)) {
    out.push(m[1].replace(/\s+/g, ' '));
  }
  return out;
}

export function fkGrade(text) {
  const words = text.split(/\s+/).filter(Boolean);
  const sentences = (text.match(/[.!?]+(\s|$)/g) || []).length || 1;
  let syl = 0;
  for (const w of words) {
    const t = w.toLowerCase().replace(/[^a-z]/g, '');
    if (!t) continue;
    const groups = t.replace(/e$/, '').match(/[aeiouy]+/g);
    syl += Math.max(1, groups ? groups.length : 1);
  }
  if (!words.length) return 0;
  return 0.39 * (words.length / sentences) + 11.8 * (syl / words.length) - 15.59;
}

export function auditFile(relPath) {
  const fullPath = path.join(ROOT, relPath);
  if (!fs.existsSync(fullPath)) {
    return { file: relPath, error: 'FILE_NOT_FOUND' };
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const proseArr = extractProse(content);
  const proseText = proseArr.join(' ');
  const words = proseText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const fk = fkGrade(proseText);

  // Metadata checks
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
  const titleLen = titleMatch ? titleMatch[1].length : 0;
  const descLen = descMatch ? descMatch[1].length : 0;

  // FAQ count
  const faqAccordionMatches = (content.match(/\bquestion:\s*['"`]/g) || []).length;
  const faqSchemaMatches = (content.match(/"@type":\s*"Question"|'@type':\s*'Question'/g) || []).length;
  const faqCount = Math.max(faqAccordionMatches, faqSchemaMatches);

  // Breadcrumbs
  const hasVisibleBreadcrumbs = content.includes('<Breadcrumbs items={');
  const hasBreadcrumbSchema = content.includes('<BreadcrumbSchema items={') ||
                              (content.includes('"@type": "BreadcrumbList"') && content.includes('"itemListElement"'));

  // Named systems (count distinct matched systems from capability-terms.json)
  const lowerContent = content.toLowerCase();
  const matchedSystems = new Set();
  for (const sys of SYSTEMS) {
    const term = sys.toLowerCase();
    const regex = new RegExp(`\\b${term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
    if (regex.test(lowerContent)) {
      matchedSystems.add(sys);
    }
  }

  // Capability density
  let capCount = 0;
  for (const cap of CAPS) {
    const term = cap.toLowerCase();
    const regex = new RegExp(`\\b${term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'gi');
    const matches = lowerContent.match(regex);
    if (matches) {
      capCount += matches.length;
    }
  }
  const capDensity = wordCount > 0 ? (capCount / wordCount) * 1000 : 0;

  // AI Slop check
  const slopHits = [];
  for (const term of SLOP_TERMS) {
    const regex = new RegExp(`\\b${term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'gi');
    const matches = content.match(regex);
    if (matches) {
      slopHits.push({ term, count: matches.length });
    }
  }

  // Em-dash check
  const emDashCount = (content.match(/—/g) || []).length;

  // Pass / Fail assessment
  const fails = [];
  if (wordCount < 2500 || wordCount > 5000) fails.push(`Word count (${wordCount}) outside 2500-5000`);
  if (fk > 10.00) fails.push(`FK grade (${fk.toFixed(2)}) > 10.00`);
  if (titleLen < 15 || titleLen > 60) fails.push(`Title length (${titleLen}) outside 15-60 chars`);
  if (descLen < 70 || descLen > 160) fails.push(`Meta desc length (${descLen}) outside 70-160 chars`);
  if (faqCount < 20) fails.push(`FAQ count (${faqCount}) < 20`);
  if (!hasVisibleBreadcrumbs) fails.push('Missing visible <Breadcrumbs>');
  if (!hasBreadcrumbSchema) fails.push('Missing <BreadcrumbSchema>');
  if (matchedSystems.size < 8) fails.push(`Distinct named systems (${matchedSystems.size}) < 8`);
  if (capDensity < 25.0) fails.push(`Capability density (${capDensity.toFixed(1)}) < 25.0`);
  if (slopHits.length > 0) fails.push(`AI slop detected: ${slopHits.map(h => `${h.term}(${h.count})`).join(', ')}`);
  if (emDashCount > 0) fails.push(`Em-dash (—) detected: ${emDashCount}`);

  return {
    file: relPath,
    wordCount,
    fk: Number(fk.toFixed(2)),
    titleLen,
    descLen,
    faqCount,
    hasVisibleBreadcrumbs,
    hasBreadcrumbSchema,
    distinctSystems: matchedSystems.size,
    capDensity: Number(capDensity.toFixed(1)),
    slopHits,
    emDashCount,
    fails,
    passed: fails.length === 0
  };
}

export function runBatchAudit() {
  console.log('========================================================================');
  console.log(' FACTORYJET 100% PERFECT PAGE DETERMINISTIC AUDIT — BATCH 5 (12 PAGES)');
  console.log('========================================================================\n');

  const results = TARGET_FILES.map(auditFile);
  let allPassed = true;

  console.log(
    'File'.padEnd(52) +
    'Words'.padStart(7) +
    'FK'.padStart(7) +
    'Sys'.padStart(5) +
    'Dens'.padStart(6) +
    'FAQ'.padStart(5) +
    'BC'.padStart(4) +
    'Slop'.padStart(6) +
    'Dash'.padStart(6) +
    'Status'.padStart(9)
  );
  console.log('-'.repeat(107));

  for (const r of results) {
    if (!r.passed) allPassed = false;
    const fileLabel = r.file.replace('src/app/services/', '');
    const bcStatus = (r.hasVisibleBreadcrumbs && r.hasBreadcrumbSchema) ? 'PASS' : 'FAIL';
    const slopStatus = r.slopHits.length === 0 ? '0' : `${r.slopHits.reduce((acc, h) => acc + h.count, 0)}`;
    const statusLabel = r.passed ? '✓ PASS' : '✗ FAIL';

    console.log(
      fileLabel.padEnd(52) +
      String(r.wordCount).padStart(7) +
      String(r.fk).padStart(7) +
      String(r.distinctSystems).padStart(5) +
      String(r.capDensity).padStart(6) +
      String(r.faqCount).padStart(5) +
      bcStatus.padStart(4) +
      slopStatus.padStart(6) +
      String(r.emDashCount).padStart(6) +
      statusLabel.padStart(9)
    );

    if (!r.passed) {
      for (const f of r.fails) {
        console.log(`    -> [FAIL] ${f}`);
      }
    }
  }

  console.log('-'.repeat(107));
  const passCount = results.filter(r => r.passed).length;
  console.log(`\nBatch 5 Summary: ${passCount} / ${results.length} pages passed (100% Deterministic Compliance).`);

  if (!allPassed) {
    console.log('Remediation required for failed pages.');
  } else {
    console.log('ALL BATCH 5 PAGES MEET 100% DETERMINISTIC RUBRIC STANDARDS!');
  }
  return { results, allPassed };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { allPassed } = runBatchAudit();
  process.exit(allPassed ? 0 : 1);
}
