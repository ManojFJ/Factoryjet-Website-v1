import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroInlineForm from '@/components/HeroInlineForm';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AiAgentRoiCalculator from '@/components/ai-agent/AiAgentRoiCalculator';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import '@/components/v2/PlatformPage.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Freshness signal. Bumped 2026-08-21 for full PAGE-SPEC v2 3,500+ word standard.
───────────────────────────────────────────────────────────────────────────── */
const PAGE_MODIFIED = '2026-08-21';

export const metadata: Metadata = {
  title: 'AI Sales Agents for US B2B Companies | FactoryJet',
  description:
    'Custom AI sales agents for US B2B teams. Sub-60-second speed to lead, ICP qualification, calendar booking and bi-directional CRM sync with HubSpot and Salesforce.',
  keywords: [
    'ai sales agents',
    'custom ai sdr development',
    'ai sdr development company',
    'autonomous sales agent usa',
    'speed to lead automation ai',
    'hubspot ai sales agent',
    'salesforce ai sdr integration',
    'b2b inbound lead qualification ai',
    'ai appointment booking agent',
    'sales pipeline automation ai',
    'enterprise inbound qualification agent',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Sales Agents for US B2B Companies | FactoryJet',
    description:
      'Custom AI sales agents that engage inbound leads in under 60 seconds, qualify on your ICP, book meetings on AE calendars, and update HubSpot/Salesforce.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Sales Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Sales Agents for B2B | FactoryJet',
    description:
      'Turn inbound leads into qualified meetings in under 60 seconds. Custom AI SDRs wired into HubSpot, Salesforce, and Google Calendar.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ Data (24 Answer-First items mapping to real search intent)
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'The basics.' },
  { key: 'qualification', label: 'ICP & qualification.' },
  { key: 'integrations', label: 'CRMs & calendars.' },
  { key: 'cadences', label: 'Cadences & deliverability.' },
  { key: 'process', label: 'Process & ownership.' },
  { key: 'architecture', label: 'Technical architecture.' },
];

const FAQ_ITEMS = [
  {
    category: "basics",
    question: "What is an AI sales agent or AI SDR, and how does it work?",
    answer:
      "An AI sales agent engages inbound leads. It responds to web forms. It answers demo requests and ad leads. It enriches company domains. It qualifies prospects in seconds. It answers product questions and books meetings on AE calendars.",
  },
  {
    category: "basics",
    question: "How does an AI sales agent improve speed-to-lead conversion?",
    answer:
      "Speed to lead is decisive. Contacting leads within 5 minutes yields 21x higher qualification rates. Our AI SDR engages buyers in under 60 seconds. It works across email, SMS via Twilio, and chat while intent is peak.",
  },
  {
    category: "basics",
    question: "How is a custom AI SDR different from tools like Apollo or standard email sequencers?",
    answer:
      "Standard sequencers blast static templates on fixed timers. Our custom AI SDR conducts two-way conversations. It handles objections using retrieval augmented generation (RAG). It checks real-time calendar availability and executes CRM sync automatically.",
  },
  {
    category: "basics",
    question: "Can an AI SDR replace our human Account Executives?",
    answer:
      "No. The agent replaces repetitive top-of-funnel triage. It handles lead qualification, domain enrichment, and calendar booking. It delivers warm meetings to experienced human closers. Every handoff includes a human in the loop brief.",
  },
  {
    category: "qualification",
    question: "How does the AI SDR qualify leads against our Ideal Customer Profile (ICP)?",
    answer:
      "The agent scores BANT and MEDDPICC criteria. It checks employee headcount. It evaluates tech stack and annual recurring revenue (ARR). Matching leads receive direct calendar links. Unqualified leads receive helpful self-serve resources.",
  },
  {
    category: "qualification",
    question: "How does the AI agent enrich prospect and company data in real time?",
    answer:
      "On form submission, the agent calls Apollo, Clearbit, or Clay APIs. It extracts firmographics. It checks revenue tiers and software tools. It uses this data for personalized account-based marketing outreach.",
  },
  {
    category: "qualification",
    question: "How does the AI sales agent handle pricing questions and technical objections?",
    answer:
      "The agent retrieves verified case studies. It references sales collateral. It explains pricing models, tiered pricing, and contract pricing. For custom enterprise terms, it transitions prospects to senior sales leaders.",
  },
  {
    category: "qualification",
    question: "What happens when an inbound lead is a current customer or existing deal?",
    answer:
      "The agent queries your CRM first. If the domain matches an active client or open deal, outreach pauses. It routes messages to the assigned Account Executive. It notifies the Customer Success Manager immediately.",
  },
  {
    category: "integrations",
    question: "Which CRMs do you integrate with?",
    answer:
      "We integrate natively with HubSpot CRM, Salesforce Sales Cloud, Pipedrive, and Zoho CRM. Connections use webhooks, private apps, and REST APIs. The agent updates deal stages and timelines in real time.",
  },
  {
    category: "integrations",
    question: "Which calendar and scheduling systems are supported?",
    answer:
      "We support Google Calendar, Microsoft Outlook 365, Calendly, and Chili Piper. The agent verifies free/busy windows in real time. It books discovery calls without double-booking conflicts.",
  },
  {
    category: "integrations",
    question: "How does round-robin meeting routing work across sales reps?",
    answer:
      "The agent distributes meetings fairly among Account Executives. Routing rules consider territory, industry specialization, or deal capacity. Every rep receives an even pipeline share.",
  },
  {
    category: "integrations",
    question: "Can the AI sales agent engage leads over SMS and WhatsApp?",
    answer:
      "Yes. For high-velocity B2B services, the agent uses SMS or WhatsApp Business API. It follows strict TCPA consent rules. It stops messaging immediately if opt-out keywords are received.",
  },
  {
    category: "cadences",
    question: "How many follow-up touches does the agent execute per lead?",
    answer:
      "Cadences typically include 4 to 6 touches. They span email and SMS over 14 days. If a prospect replies or books a demo, the cadence halts automatically.",
  },
  {
    category: "cadences",
    question: "How do you protect domain reputation and email deliverability?",
    answer:
      "We set up dedicated secondary sending domains with SPF, DKIM, and DMARC records. We configure automated warm-ups and rate limits. Anti-spam phrase filters protect primary domain health.",
  },
  {
    category: "cadences",
    question: "Does the agent support multi-lingual sales outreach?",
    answer:
      "Yes. The agent detects prospect language automatically. It converses in Spanish, French, German, or Portuguese. It saves English qualification briefs to your CRM.",
  },
  {
    category: "cadences",
    question: "Can the agent link multiple stakeholders from the same buying committee?",
    answer:
      "Yes. Colleagues from one company are linked under a unified CRM record. The AE receives multi-threaded stakeholder alerts. It alerts the assigned AE to multi-threaded stakeholder momentum.",
  },
  {
    category: "process",
    question: "How long does it take to deploy a custom AI SDR?",
    answer:
      "Deployment takes 3 to 4 weeks. This includes ICP mapping, CRM connector setup, and calendar integration. We test guardrails and run shadow mode on historical leads.",
  },
  {
    category: "process",
    question: "What is the pricing model for building an AI sales agent?",
    answer:
      "We use a transparent fixed-price model. There are zero per-lead markups or commission fees. You pay for implementation and own the system outright.",
  },
  {
    category: "process",
    question: "Do we own the codebase and prompt templates?",
    answer:
      "Yes. You receive 100% ownership of source code, prompt templates, and API integrations. The agent deploys securely within your own private cloud infrastructure.",
  },
  {
    category: "process",
    question: "What ongoing maintenance is needed after launch?",
    answer:
      "We offer optional monthly optimization retainers. We update objection playbooks. We add new sales collateral and refine qualification criteria as your ICP evolves.",
  },
  {
    category: "architecture",
    question: "How does the agent handle custom lead scoring models?",
    answer:
      "We configure deterministic scoring matrices. The agent weights company size, software stack, and job seniority. High-scoring leads get immediate calls; low-scoring leads get nurture cadences.",
  },
  {
    category: "architecture",
    question: "Can the agent prepare pre-call briefing notes for sales reps?",
    answer:
      "Yes. 15 minutes before discovery calls, the agent posts Slack briefs to the AE. Notes include LinkedIn profiles, tech stack, key pain points, and recommended discovery questions.",
  },
  {
    category: "architecture",
    question: "How does the agent prevent hallucinated pricing or fake case studies?",
    answer:
      "The agent uses retrieval augmented generation (RAG) with vector search. It references verified company decks and whitepapers. It is forbidden from inventing pricing or case details.",
  },
  {
    category: "architecture",
    question: "What happens if a prospect asks a technical question outside the agent training?",
    answer:
      "The agent acknowledges the inquiry honestly. It notes that a technical sales specialist will review the detail. It routes the question to an AE with an internal diagnostic note.",
  },
  {
    category: "architecture",
    question: "How does the agent prevent double-booking on AE calendars?",
    answer:
      "The scheduling engine uses optimistic locking with real-time free/busy API checks. It verifies slot availability right away. It creates events in Google Calendar or Outlook 365.",
  },
  {
    category: "architecture",
    question: "Can the agent qualify inbound leads from paid ads and landing pages?",
    answer:
      "Yes. Webhook listeners connect to HubSpot forms, Unbounce, Webflow, and LinkedIn Lead Gen Forms. Qualification sequences trigger in under 60 seconds.",
  },
  {
    category: "architecture",
    question: "How are sensitive prospect data and contact details protected?",
    answer:
      "The agent complies with CCPA, GDPR, and SOC 2 standards. PII is encrypted at rest and in transit. Webhook endpoints require HMAC signature authentication.",
  },
  {
    category: "architecture",
    question: "Can the agent re-engage stale inbound leads from past quarters?",
    answer:
      "Yes. The agent identifies unclosed past leads in your CRM. It launches reactivation cadences with updated features. It shares case studies and new calendar invite prompts.",
  },
  {
    category: "architecture",
    question: "How do you monitor response accuracy and lead conversion rates?",
    answer:
      "Real-time analytics track response times, meeting booking rates, and qualification accuracy. Dashboards surface metrics directly inside HubSpot, Salesforce, or Datadog.",
  },
  {
    category: "architecture",
    question: "Can human sales reps intervene in live agent email threads?",
    answer:
      "Yes. A human rep may reply to an email thread. The agent detects the user action immediately. It pauses automated cadences immediately and updates the CRM status to Human Assigned.",
  },
  {
    category: "architecture",
    question: "How does the agent handle out-of-office and auto-replies?",
    answer:
      "An intent parser identifies out-of-office autoreplies. It extracts return dates. It reschedules the next cadence touch automatically without polluting pipeline metrics.",
  },
  {
    category: "architecture",
    question: "Can the agent coordinate multi-attendee meetings across different buyer teams?",
    answer:
      "Yes. The agent coordinates availability across multiple buyer and seller participants. It checks overlapping calendar windows before generating final meeting invites.",
  }
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent#service',
  serviceType: 'AI sales agent development',
  name: 'Custom AI Sales Agent Development',
  description:
    'Custom AI sales agents for US B2B teams. Sub-60-second speed to lead, ICP qualification, calendar booking and bi-directional CRM sync with HubSpot and Salesforce.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US B2B sales leaders, revenue operations directors, and growth marketing teams',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
  name: 'AI Sales Agents for US B2B Companies | FactoryJet',
  description:
    'Custom AI sales agents that engage inbound leads in under 60 seconds, qualify on your ICP, book meetings on AE calendars, and update HubSpot/Salesforce.',
  dateModified: PAGE_MODIFIED,
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Sales Agents', url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
};

const STATS = [
  { b: '< 60 sec', s: 'inbound lead response time across email, chat & SMS.' },
  { b: '21x higher', s: 'qualification rate compared to 30-minute response delays.' },
  { b: '100% CRM sync', s: 'every contact, deal stage and qualification note logged.' },
  { b: 'Full ownership', s: 'you own the code, prompts and connectors in your cloud.' },
];

const SOURCED_STATS = [
  {
    v: '42 Hours',
    d: 'This is the average response lag for US B2B firms. Slow follow-ups cause high lead drop-off rates.',
    src: 'Harvard Business Review Sales Audit',
    href: 'https://hbr.org/2011/03/the-short-life-of-online-sales-leads',
  },
  {
    v: '21x',
    d: 'Contacting leads within 5 minutes yields 21x higher qualification. Speed to lead is decisive.',
    src: 'Lead Response Management Study',
    href: 'https://www.leadresponsemanagement.org/lrm_study/',
  },
  {
    v: '78%',
    d: 'B2B buyers purchase from the vendor that responds first. Speed to lead is the primary competitive moat.',
    src: 'Vendasta B2B Sales Research',
    href: 'https://www.vendasta.com/blog/lead-response-time/',
  },
];

const CAPABILITIES = [
  {
    t: 'Sub-60-Second Inbound Response.',
    d: 'Engages web form fills and demo requests. It reaches ad leads across email and SMS within seconds. Captures buyers while intent is peak.',
  },
  {
    t: 'Firmographic Data Enrichment.',
    d: 'Queries Apollo, Clearbit, and Clay APIs on lead domain intake. Verifies company size, industry vertical, and tech stack.',
  },
  {
    t: 'ICP Qualification Scoring.',
    d: 'Evaluates BANT criteria and technical fit against sales criteria. Guides qualified leads to calendar slots.',
  },
  {
    t: 'Direct Calendar Meeting Booking.',
    d: 'Checks real-time AE availability in Google Calendar or Outlook 365. Books discovery calls with zero back-and-forth.',
  },
  {
    t: 'Bi-Directional CRM Synchronization.',
    d: 'Creates contacts and updates deal pipeline stages. Attaches structured qualification summaries in HubSpot or Salesforce.',
  },
  {
    t: 'Context-Aware Objection Handling.',
    d: 'Answers pricing models and integration questions. References sales collateral and whitepapers.',
  },
  {
    t: 'Deliverability & Domain Protection.',
    d: 'Configures dedicated secondary sending domains. Uses strict SPF, DKIM, DMARC records, and automated warm-ups.',
  },
  {
    t: 'Round-Robin Territory Routing.',
    d: 'Distributes booked calls fairly across sales reps. Routes by territory, industry specialization, or pipeline capacity.',
  },
];

const INDUSTRIES = [
  {
    name: 'B2B SaaS & Tech Startups.',
    desc: 'Qualifies demo requests on seat count and tech stack. Routes enterprise accounts to senior AEs and SMB leads to trials.',
  },
  {
    name: 'Commercial Services & Contracting.',
    desc: 'Engages HVAC, roofing, and facility quote requests. Captures square footage and schedules on-site estimator visits.',
  },
  {
    name: 'Financial Services & Lending.',
    desc: 'Qualifies loan applicants on revenue and credit profile. Books consultations directly with commercial lending officers.',
  },
  {
    name: 'Legal & Professional Practices.',
    desc: 'Conducts intake screening for law firms. Verifies case type and conflicts of interest before booking attorney consultations.',
  },
  {
    name: 'Wholesale & Industrial Supply.',
    desc: 'Qualifies dealer inquiries on minimum order volume. Creates approved wholesale accounts in NetSuite and HubSpot.',
  },
  {
    name: 'Commercial Real Estate & Brokerage.',
    desc: 'Answers tenant space inquiries. Verifies budget and lease timelines, and schedules property tours on broker calendars.',
  },
];

const FAILURE_MODES = [
  {
    title: '1. Mailbox Reputation Burn & Spam Filtering.',
    description: 'Aggressive outbound sending causes domain blacklisting or delivers to junk folders.',
    mitigation: 'We configure secondary sending domains with strict SPF, DKIM, and DMARC rules. We use automated warm-ups. We limit output to under 40 emails daily per inbox.',
  },
  {
    title: '2. Data Enrichment API Timeouts & Missing Records.',
    description: 'Apollo or Clearbit returns empty firmographic records for newly registered domains.',
    mitigation: 'The agent scrapes the company website via headless browser. It parses homepage text and meta tags. It extracts industry and business model before drafting outreach.',
  },
  {
    title: '3. Hallucinated Pricing & Contract Commitments.',
    description: 'When a prospect asks for custom discount percentages or non-standard SLAs.',
    mitigation: 'Strict guardrail boundaries protect pricing. The agent is blocked from quoting custom discounts. It defers commercial negotiation to the assigned Account Executive.',
  },
  {
    title: '4. Calendar Double-Booking & Timezone Mismatches.',
    description: 'When two prospects attempt to select the same calendar slot simultaneously.',
    mitigation: 'Optimistic concurrency locking verifies calendar availability in real time. It offers alternate slots automatically if race conditions occur.',
  },
  {
    title: '5. CRM Contact Collision & Duplicate Deals.',
    description: 'An inbound lead matches an existing contact or open deal in Salesforce or HubSpot.',
    mitigation: 'The agent queries the CRM index first. If an open deal exists, qualification pauses. The message routes to the assigned deal owner with high-priority alerts.',
  },
];

const SELECTION_CRITERIA = [
  {
    num: '01',
    title: 'Check for True Two-Way Conversational Reasoning.',
    desc: 'Avoid vendors selling simple email sequencers. An authentic AI SDR interprets buyer objections. It references specific case studies and converses naturally across multiple turns.',
  },
  {
    num: '02',
    title: 'Demand Live CRM & Calendar Integration.',
    desc: 'The agent syncs with HubSpot or Salesforce. It updates pipeline stages. It assigns deal owners and attaches qualification notes.',
  },
  {
    num: '03',
    title: 'Insist on Dedicated Sending Domain Architecture.',
    desc: 'Never send outreach from your primary domain. Isolate secondary email domains. A reputable team provisions secondary domains with rigorous deliverability safeguards.',
  },
  {
    num: '04',
    title: 'Verify Deterministic ICP Scoring Boundaries.',
    desc: 'Ensure qualification gates for company size, tech stack, and budget. Account Executives meet only high-intent buyers.',
  },
  {
    num: '05',
    title: 'Verify Code and Infrastructure Ownership.',
    desc: 'You own all prompt trees and code. Connectors deploy on your private cloud. There are zero per-seat vendor fees.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Sales Playbook & ICP Audit.',
    d: 'We document your ideal customer profile and qualification criteria. We map objection responses, calendar rules, and CRM stages.',
  },
  {
    n: '02',
    t: 'Connector & Enrichment Setup.',
    d: 'We connect your lead sources, CRM (HubSpot/Salesforce), and calendars. We integrate data enrichment APIs (Apollo/Clay).',
  },
  {
    n: '03',
    t: 'Prompt Engineering & Objection Tuning.',
    d: 'We build reasoning prompt trees grounded in your sales collateral. We calibrate professional conversational tone.',
  },
  {
    n: '04',
    t: 'Simulation Testing & Copilot Mode.',
    d: 'We run 100+ simulated buyer dialogues across diverse objection scenarios. We operate the agent in copilot mode for rep approval.',
  },
  {
    n: '05',
    t: 'Production Rollout & Pipeline Tracking.',
    d: 'Live deployment to inbound channels with real-time Slack alerts. We provide conversion dashboards and weekly reviews.',
  },
];

export default function AISalesAgentPage() {
  return (
    <>
      <script id="sales-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="sales-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="sales-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero Section */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI sales agents for US operations.</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>Turn inbound leads into qualified meetings in under 60 seconds.</h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet builds custom AI sales development agents for US B2B companies. We eliminate the 42-hour response lag. Our AI SDR engages inbound leads within 60 seconds. It works across forms, ads, and email. It qualifies leads on your ICP. It answers objections and books meetings on AE calendars.
                </p>
                <HeroInlineForm source="services_ai_sales_agent_hero" region="us" submitLabel="Scope your sales agent" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-agent-us.webp"
                  alt="Sales operations dashboard showing an autonomous AI SDR qualifying leads and booking meetings"
                  width={600}
                  height={400}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Answer-First Definitional Section */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">'The short answer.'</p>
            <h2 style={{ marginTop: '10px' }}>What is an AI sales agent?</h2>
            <p className="pp-lead" style={{ marginTop: '16px', maxWidth: '74ch' }}>
              An AI sales agent automates the top of the sales funnel. It functions as an autonomous SDR. A buyer submits a demo request, pricing inquiry, or web form. The agent enriches the company domain in real time. It initiates a conversational dialogue in seconds. It evaluates BANT criteria, company size, and tech stack. It schedules discovery calls on Account Executive calendars.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              The agent pairs conversational reasoning with live CRM sync across HubSpot and Salesforce. It connects to Google Calendar and Outlook. It ensures zero lead slippage. It stops weekend abandonment and delivers pre-qualified meetings to human closers.
            </p>
            <ul className="pp-stats" style={{ marginTop: '28px', listStyle: 'none', padding: 0 }}>
              {STATS.map((s) => (
                <li className="pp-stat" key={s.b}><b>{s.b}</b><span>{s.s}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sourced Statistics Band */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Market evidence.'</p>
            <h2 style={{ marginTop: '10px' }}>The mathematical proof behind speed to lead.</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {SOURCED_STATS.map((stat) => (
                <div key={stat.v} className="pp-card" style={{ padding: '24px' }}>
                  <p className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.2rem,4vw,3rem)', color: 'var(--pp-orange)', lineHeight: 1 }}>
                    {stat.v}
                  </p>
                  <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.5] text-fj-neutral-600">
                    {stat.d}
                  </p>
                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-3 inline-block font-fj-mono text-[0.75rem] text-[#B23E13] underline underline-offset-2 hover:no-underline"
                  >
                    Source: {stat.src} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proprietary Framework: The Speed-to-Lead Decay Curve */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Proprietary framework.'</p>
            <h2 style={{ marginTop: '10px' }}>The Speed-to-Lead Decay Curve: Why minutes matter in B2B pipeline.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Inbound lead conversion decays along a steep mathematical curve. When a buyer submits an inquiry, their intent is peak. Here is how response latency impacts qualification outcomes.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-green-600" style={{ fontSize: '13px' }}>&lt; 5 MINUTES // PEAK CONVERSION</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>21x Higher Qualification</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Engaging buyers while they browse yields a 21x increase in qualification likelihood. Waiting 30 minutes causes conversion rates to crash.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '13px' }}>30 TO 60 MINUTES // STEEP DROP-OFF</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>391% Qualification Loss</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  After 30 minutes, buyers close their browser tabs. They attend other meetings or research competitors. Lead contact rates plummet quickly.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-red-600" style={{ fontSize: '13px' }}>42 HOURS // INDUSTRY AVERAGE</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Zero Competitive Advantage</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The typical US B2B enterprise responds in 42 hours. By that point, 78% of buyers have scheduled calls. They choose the vendor that reached them first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator Section */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <AiAgentRoiCalculator defaultWorkflow="sales" source="ai_sales_agent_page" />
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Core capabilities.'</p>
            <h2 style={{ marginTop: '10px' }}>What our AI sales agents handle.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Built for high-velocity revenue teams. Every prospect is enriched. The agent checks your ICP and logs details to your CRM.
            </p>
            <div className="pp-bento" style={{ marginTop: '32px' }}>
              {CAPABILITIES.map((cap) => (
                <div className="pp-card" key={cap.t}>
                  <h3 style={{ color: 'var(--pp-orange-dark)' }}>{cap.t}</h3>
                  <p className="mt-2">{cap.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture Deep-Dive */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Technical architecture.'</p>
            <h2 style={{ marginTop: '10px' }}>The 5-layer engineering stack behind our AI SDRs.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Our AI SDRs operate as an intelligent orchestration pipeline. They connect lead capture endpoints directly with your CRM and calendar infrastructure.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>1. Lead Ingestion &amp; Domain Enrichment.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Captures inbound leads from web forms, paid campaigns, and email. Queries enrichment APIs like Apollo, Clay, and Clearbit. Identifies headcount, revenue tier, installed tools, and seniority.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>2. ICP Qualification Engine.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Evaluates budget, authority, and timeline using BANT/MEDDIC logic. Filters out unqualified accounts. Accelerates enterprise buyers toward calendar booking.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>3. Dynamic Calendar Scheduling.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Queries live Account Executive availability in Google Calendar or Outlook 365. Generates personalized meeting slots. Sends calendar invites with video links. Manages round-robin AE distribution.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>4. Bi-Directional CRM Sync &amp; Deal Staging.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Creates or updates contacts and company records in HubSpot or Salesforce. Sets deal pipeline stages. Assigns AE ownership and attaches formatted qualification briefs to the deal record.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inbound Lead Qualification Flow Matrix */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// qualification logic.'}</p>
            <h2 style={{ marginTop: '10px' }}>The 5-stage automated qualification pipeline.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              How our AI sales agents take an inbound website lead from form fill to confirmed calendar booking:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 1.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Instant Intake.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Webhooks capture form submissions or ad leads within 500ms. Real-time validation triggers instantly.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 2.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Firmographics.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Queries Apollo and Clay to fetch revenue, headcount, tech stack, and LinkedIn profile.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 3.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Two-Way Dialogue.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Engages prospect via email/SMS, answering objections using sales collateral.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 4.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Calendar Booking.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Checks AE Google/Outlook calendars and locks meeting slot with video link.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STEP 5.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>CRM Staging.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Creates deal in HubSpot/Salesforce and posts pre-call briefing to AE Slack channel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverability & Domain Architecture */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// deliverability engineering'}</p>
            <h2 style={{ marginTop: '10px' }}>Dedicated secondary sending domains and mailbox reputation protection.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              High-volume sales outreach without domain architecture burns corporate mailboxes. It triggers Google Workspace deliverability penalties. We engineer our SDR pipelines around strict email deliverability safeguards.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Secondary Domain Isolation.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Outreach never sends from your primary domain. We protect your sender reputation. We provision isolated secondary domains with dedicated Google Workspace or Microsoft 365 accounts.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Strict DNS Authentication.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Every sending domain uses compliant SPF, DKIM, and DMARC policies. Custom tracking domains and MX records ensure high inbox placement.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Automated Warm-Up and Volume Caps.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Inboxes undergo an automated 21-day warm-up ramp. We cap daily output at 35 emails per mailbox across rotating sender pools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Negative Space: When NOT to build an AI SDR */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Honest guidance.'</p>
            <h2 style={{ marginTop: '10px' }}>When you should NOT build an AI SDR.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              An autonomous AI SDR requires specific sales conditions to generate positive ROI. Do not build an AI SDR if:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Average Deal Size &lt; $2,000.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your product is low-cost self-serve SaaS, human AE discovery calls are economically unviable. Build self-serve onboarding funnels instead.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Zero Inbound Lead Volume.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your website receives fewer than 15 inbound inquiries per month, an AI SDR has no queue to work. Focus first on content, SEO, and paid acquisition to generate lead flow.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Looking for Cold Mass-Email Spam.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your objective is scraping random contacts to blast pitch emails, we do not build spam engines. We build high-context inbound and signal-triggered outbound systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use-Cases */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Industry workflows.'</p>
            <h2 style={{ marginTop: '10px' }}>Engineered for your specific sales pipeline.</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((ind) => (
                <div key={ind.name} className="pp-card" style={{ backgroundColor: '#FFFFFF' }}>
                  <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>{ind.name}</h3>
                  <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Failure Modes & Safety Engineering */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Resilience rules.'</p>
            <h2 style={{ marginTop: '10px' }}>How our sales agents handle edge cases &amp; deliverability risks.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Sales automation requires strict technical safeguards. Here is how our architecture prevents pipeline failure.
            </p>
            <div className="mt-8 space-y-4">
              {FAILURE_MODES.map((fm) => (
                <div key={fm.title} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>{fm.title}</h3>
                  <p className="mt-1 font-fj-body text-[0.875rem] text-red-700"><strong>Failure State:</strong> {fm.description}</p>
                  <p className="mt-1 font-fj-body text-[0.875rem] text-green-800"><strong>Engineered Mitigation:</strong> {fm.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objection Handling Reasoning Trees */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Objection handling reasoning.'</p>
            <h2 style={{ marginTop: '10px' }}>4 common B2B sales objections resolved autonomously.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Unlike static email bots that repeat generic pitches, our AI sales agents use contextual reasoning grounded in your sales collateral to resolve buyer hesitation.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>OBJECTION 01: COMPETITOR INCUMBENT.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>&ldquo;We already use a competitor.&rdquo;</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The agent retrieves competitive battlecards for named incumbents. It acknowledges their setup and highlights key architectural differences. It suggests a 15-minute technical benchmark call.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>OBJECTION 02: BUDGET CONSTRAINTS.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>&ldquo;We don&apos;t have budget right now.&rdquo;</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The agent references proven ROI metrics with payback under 3 months. It shares an interactive ROI calculator and checks fiscal planning cycles.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>OBJECTION 03: INFORMATION REQUEST.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>&ldquo;Just send me info by email.&rdquo;</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The agent generates a targeted 3-point summary tailored to their industry and tech stack. It provides a direct link to an Account Executive discovery calendar.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>OBJECTION 04: TIMING DELAYS.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>&ldquo;Reach back out in 6 months.&rdquo;</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The agent acknowledges the timeline. It logs future reactivation dates in HubSpot or Salesforce and sets tasks for the assigned AE.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Inbound Lead Routing Archetypes */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Inbound routing topologies.'</p>
            <h2 style={{ marginTop: '10px' }}>4 inbound lead qualification archetypes we deploy in production.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Different lead acquisition channels require tailored qualification cadences and speed-to-lead mechanics.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ARCHETYPE 01 // HIGH-INTENT DEMO FORMS.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Sub-60-Second Demo Form Activation.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  A buyer requests a demo on your website. The agent enriches the domain within 4 seconds. It verifies company size and CRM stack. It dispatches a personalized email with live calendar booking slots.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ARCHETYPE 02 // PAID AD CAMPAIGN LEADS.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Instant SMS and Email Multi-Touch Cadence.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  For Google Ads and LinkedIn Lead Gen forms, the agent sends an instant text and email. It qualifies project timeline and budget before routing to sales closers.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ARCHETYPE 03: B2B WHOLESALE INQUIRIES.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Dealer Application Screening and Verification.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  For commercial distributors, the agent verifies resale tax certificates. It checks store locations and minimum orders. It creates pre-approved wholesale accounts in NetSuite and HubSpot.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ARCHETYPE 04: EVENT AND WEBINAR RECOVERY.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Post-Event Attendee Lead Reactivation.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Following trade shows or webinars, the agent engages attendee lists. It references session-specific context, qualifies procurement initiatives, and schedules debrief calls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Comparison.'</p>
            <h2 style={{ marginTop: '10px' }}>FactoryJet AI SDR vs. traditional sales development options.</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ width: '100%', minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Dimension.</th>
                    <th className="me">FactoryJet Custom AI SDR.</th>
                    <th>Junior In-House SDR Team.</th>
                    <th>Standard Outbound Sequencer.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td><strong>Cost Model.</strong></td>
                    <td><strong>Fixed implementation with direct model API.</strong></td>
                    <td>$65k+ salary + benefits + commission per rep.</td>
                    <td>$99-$250/mo per seat software license.</td>
                  </tr>
                  <tr>
                    <td><strong>Speed-to-Lead Response.</strong></td>
                    <td>Sub-60 seconds 24/7/365.</td>
                    <td>Hours to days depending on rep queue.</td>
                    <td>Fixed scheduled batch delays.</td>
                  </tr>
                  <tr>
                    <td><strong>Dynamic Two-Way Conversations.</strong></td>
                    <td>Yes. Reasons over objections and case studies.</td>
                    <td>Yes. Depends on human rep conversational skill.</td>
                    <td>No. Static template sequences only.</td>
                  </tr>
                  <tr>
                    <td><strong>Real-Time Calendar Booking.</strong></td>
                    <td>Yes. Books directly onto AE calendars.</td>
                    <td>Manual back-and-forth link sending.</td>
                    <td>Requires prospect to self-navigate links.</td>
                  </tr>
                  <tr>
                    <td><strong>Ramp Time and Turnover.</strong></td>
                    <td>Zero turnover. Ready in 3 weeks.</td>
                    <td>3-month ramp. 40%+ annual turnover.</td>
                    <td>Ongoing template maintenance.</td>
                  </tr>
                  <tr>
                    <td><strong>Concurrency and Lead Spikes.</strong></td>
                    <td>Unlimited concurrent leads handled.</td>
                    <td>Capped at 50 to 80 dials per day.</td>
                    <td>Batch queued limits.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Selection Checklist: How to Choose a Partner */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Buyer checklist.'</p>
            <h2 style={{ marginTop: '10px' }}>How to evaluate an AI sales agent development partner.</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              {SELECTION_CRITERIA.map((sc) => (
                <div key={sc.num} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>{sc.num}</span>
                  <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>{sc.title}</h3>
                  <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">{sc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Journey */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Implementation process.'</p>
            <h2 style={{ marginTop: '10px' }}>From sales playbook to live pipeline in 4 weeks.</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              {STEPS.map((step) => (
                <div key={step.n} className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                  <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>{step.n}</span>
                  <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>{step.t}</h3>
                  <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        {/* Enterprise Security & Governance Architecture */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">'Enterprise governance &amp; sales compliance.'</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise security, guardrails, and compliance architecture.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Sales automation interacts with buyer contacts, company firmographics, and deal pipelines. We enforce strict enterprise guardrails, SOC 2 compliance, and zero-trust data privacy standards across every deployed sales agent.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>SECURITY: SOC 2 AND GDPR.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Data Privacy &amp; Encryption.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Prospect contact records and deal notes are encrypted at rest and in transit. Strict compliance with SOC 2, GDPR, CCPA, and TCPA regulations.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>INTEGRATION: CRM &amp; ERP SYNC.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Bi-Directional CRM Sync.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Authenticated webhooks and REST APIs sync contacts, lead stages, and qualification notes across HubSpot, Salesforce, and NetSuite in real time.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>ACCESS: RBAC &amp; SSO.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Role-Based Access Control.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Granular role-based access control (RBAC) and single sign-on (SSO) via SAML restrict pipeline configuration and prompt engineering to authorized revenue leaders.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>ORCHESTRATION: RAG.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Deterministic Tool Execution.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Retrieval augmented generation (RAG) paired with strict function calling, tool use guardrails, and human in the loop supervision ensures zero hallucinated sales promises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS."
          headline="Questions sales leaders ask before deploying autonomous SDRs."
          lead="Everything you need to know about speed-to-lead mechanics and ICP filtering. Covers CRM synchronization and deliverability protection."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <FinalCTA
          eyebrow="READY TO SCALE YOUR INBOUND PIPELINE?"
          headline="Scope your custom AI sales &amp; SDR agent today."
          sub="Book a 30-minute discovery call with our engineering team. We will map your qualification criteria and review your CRM. We deliver a fixed-price implementation blueprint."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View All AI Agent Services', href: '/services/ai-agent-development' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
