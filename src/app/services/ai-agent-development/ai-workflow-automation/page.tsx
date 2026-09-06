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
  title: 'AI Workflow Automation & n8n USA | FactoryJet',
  description:
    'Custom AI workflow automation for US operations. Connect HubSpot, NetSuite, QuickBooks, Stripe. And Slack with n8n and Python.',
  keywords: [
    'n8n automation agency',
    'ai workflow automation us',
    'custom workflow automation developer',
    'n8n consultant usa',
    'make automation agency',
    'hubspot erp automation',
    'quickbooks invoice automation',
    'business process automation company',
    'ai document extraction agent',
    'back office workflow automation',
    'enterprise n8n engineering company',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Workflow Automation & n8n USA | FactoryJet',
    description:
      'Connect your CRM, ERP, accounting. And communication tools into autonomous, self-healing data pipelines with AI decision logic.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-workflow.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Workflow Automation and n8n Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation USA | FactoryJet',
    description:
      'Connect HubSpot, NetSuite, QuickBooks, Stripe and Slack into automated pipelines. Self-hosted n8n and custom Python agents.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-workflow.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
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
   FAQ Data (32 Answer-First items mapping to real search intent)
───────────────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Automation basics.' },
  { key: 'tools', label: 'Tools & ERP integrations.' },
  { key: 'compliance', label: 'Compliance & security.' },
  { key: 'process', label: 'Process & implementation.' },
  { key: 'pricing', label: 'Pricing & ROI.' },
  { key: 'architecture', label: 'Technical architecture.' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is AI workflow automation versus Zapier?',
    answer:
      'Traditional tools run simple triggers. They break when data is unstructured. AI workflow automation adds intelligent reasoning. LLMs parse irregular PDF invoices. They classify emails and extract messy fields. The system executes tool use and validation rules. It updates your ERP sync and CRM sync with built-in retry controls.',
  },
  {
    category: 'basics',
    question: 'What manual back-office tasks can AI workflow automation replace?',
    answer:
      'Pipelines extract line items from vendor PDF invoices. They sync records across QuickBooks, NetSuite. And warehouse tools. Workflows match 3-way purchase orders. They update CRM deal stages upon payment receipts. They route customer onboarding packets automatically.',
  },
  {
    category: 'basics',
    question: 'Can the workflow extract data from irregular PDF invoices and purchase orders?',
    answer:
      'Yes. vision vision models extract vendor names, invoice dates. And totals. They capture unit quantities and tax line items. Data extracts with high accuracy. The agent flags variances for human in the loop review.',
  },
  {
    category: 'basics',
    question: 'What happens when a workflow fails or encounters bad data?',
    answer:
      'Pipelines include transactional error boundaries and retry logic. Rejected payloads route to dead-letter queues. The system logs error codes in real time. It dispatches Slack notifications with one-click replay actions.',
  },
  {
    category: 'tools',
    question: 'Which software tools and ERPs do you integrate?',
    answer:
      'We integrate HubSpot, Salesforce, NetSuite. And QuickBooks Online. We connect Xero, Shopify, ShipStation, Stripe. And Slack. Workflows query cloud databases via REST APIs, GraphQL. And authenticated webhook events.',
  },
  {
    category: 'tools',
    question: 'Why do you recommend self-hosted n8n over Zapier or Make?',
    answer:
      'Zapier and Make charge recurring per-task subscription fees. Self-hosted n8n runs in your private cloud VPC. It handles unlimited executions with zero per-run fees. You get total data privacy and full Git version control.',
  },
  {
    category: 'tools',
    question: 'Can you integrate legacy on-premise software without modern APIs?',
    answer:
      'Yes. We build lightweight bridge services for legacy ERPs. We deploy secure SFTP file drop watchers. We configure database connectors to sync legacy databases with modern cloud endpoints.',
  },
  {
    category: 'tools',
    question: 'Can notifications be sent to Slack, email, or SMS automatically?',
    answer:
      'Yes. Workflow events trigger formatted Slack cards and email confirmations. They dispatch Twilio SMS alerts. Notifications include interactive approval buttons for managers.',
  },
  {
    category: 'compliance',
    question: 'How do you protect sensitive financial and customer data?',
    answer:
      'API connections use scoped credentials with least-privilege permissions. Data encrypts in transit via TLS 1.3 and at rest. Pipelines run in private cloud VPCs. No third-party data brokers access your records.',
  },
  {
    category: 'compliance',
    question: 'Can workflows handle HIPAA or CCPA regulated data?',
    answer:
      'Yes. For healthcare and finance teams, we build zero-retention data pipelines. Sensitive patient identifiers are tokenized or redacted. The architecture aligns with HIPAA, CCPA. And GDPR standards.',
  },
  {
    category: 'compliance',
    question: 'Can the automation process multilingual documents in Spanish and English?',
    answer:
      'Yes. Vision models detect Spanish, French. And English text. The agent standardizes dates, currencies. And line items. It routes clean English records into your accounting database.',
  },
  {
    category: 'compliance',
    question: 'How do you handle rate limits across third-party APIs?',
    answer:
      'Pipelines deploy token-bucket rate limiters. They buffer payloads in Redis queues. Automatic backoff pauses prevent API throttling across Shopify, HubSpot. And carrier endpoints.',
  },
  {
    category: 'process',
    question: 'How long does a custom workflow automation implementation take?',
    answer:
      'Single-pipeline automations take 1 to 2 weeks to deploy. Multi-system enterprise engines take 3 to 4 weeks. This includes process discovery, connector wiring, testing. And production rollout.',
  },
  {
    category: 'process',
    question: 'What do you need from our team to begin building?',
    answer:
      'We review your existing manual workflow and sample documents. We need scoped API access to target systems. We walk through business rules together on a kickoff call.',
  },
  {
    category: 'process',
    question: 'Do we own the workflow code and architecture?',
    answer:
      'Yes. You receive 100% source code ownership. You own all n8n workflows and Python scripts. You own all Docker files and prompt engineering templates. There is zero vendor lock-in.',
  },
  {
    category: 'process',
    question: 'How do we test and verify the workflows before go-live?',
    answer:
      'We deploy dedicated staging environments. We run batches of 100+ historical records through the pipeline. Your team verifies field parity before enabling production write permissions.',
  },
  {
    category: 'pricing',
    question: 'What is the typical ROI of an AI workflow automation project?',
    answer:
      'Most mid-market teams recover 15 to 30 hours of manual data entry per week. With loaded labor rates of $28 to $45/hr, projects typically pay for themselves within 2 to 4 months.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing monthly licensing fees paid to FactoryJet?',
    answer:
      'No. We build on a fixed-price project model. You pay direct cloud hosting costs on AWS or GCP. You pay model token usage directly with no software markup from us.',
  },
  {
    category: 'pricing',
    question: 'Do you offer ongoing maintenance retainers?',
    answer:
      'Yes. We offer optional support retainers. Retainers cover adding new SaaS tools, updating API endpoints. And monitoring pipeline health.',
  },
  {
    category: 'pricing',
    question: 'What happens if a SaaS tool updates its API in the future?',
    answer:
      'We build connectors using versioned, stable API endpoints. When vendors announce API changes, we update connector nodes. We verify data schemas before deadlines.',
  },
  {
    category: 'architecture',
    question: 'How does n8n handle high speed and queue backpressure?',
    answer:
      'We configure n8n in queue mode using Redis and PostgreSQL. Worker nodes scale horizontally. They process thousands of concurrent webhook events without dropping requests.',
  },
  {
    category: 'architecture',
    question: 'Can we run custom Python scripts and NPM packages inside n8n?',
    answer:
      'Yes. Self-hosted n8n allows full Python and Node.js code execution. We import specialized exact packages and crypto modules directly into workflow nodes.',
  },
  {
    category: 'architecture',
    question: 'How are database dedup keys enforced on webhook endpoints?',
    answer:
      'Payload hashes are checked against a Redis dedup cache with a 24-hour TTL. This prevents duplicate transactions from network retries or carrier webhook echoes.',
  },
  {
    category: 'architecture',
    question: 'How do you monitor pipeline uptime and error rates?',
    answer:
      'We configure automated healthcheck monitors using Datadog or CloudWatch. Webhook alerts notify engineering teams on Slack if failure rates exceed 0.5%.',
  },
  {
    category: 'architecture',
    question: 'How does the workflow handle multi-page PDF invoice table extraction?',
    answer:
      'vision vision nodes convert PDF pages into high-resolution images. They extract tabular line items and coordinates. exact checks verify that line items equal the invoice total.',
  },
  {
    category: 'architecture',
    question: 'Can n8n trigger webhooks into proprietary legacy on-premise databases?',
    answer:
      'Yes. Using reverse SSH tunnels or VPN gateways, n8n queries on-premise databases. It connects to Oracle or SQL Server securely without public internet exposure.',
  },
  {
    category: 'architecture',
    question: 'How do you migrate historical data before launching new automated workflows?',
    answer:
      'We write batch extraction scripts that clean and reconcile historical data. Records validate in staging sandboxes before production cutover.',
  },
  {
    category: 'architecture',
    question: 'What happens during a catastrophic cloud server failure?',
    answer:
      'Blueprints include automated nightly database snapshots on AWS RDS or Cloud SQL. cloud servers-as-code scripts allow complete disaster recovery within 15 minutes.',
  },
  {
    category: 'architecture',
    question: 'Can n8n trigger automated SMS and voice alerts for urgent team exceptions?',
    answer:
      'Yes. Critical failures trigger automated Twilio SMS alerts. The system also places voice calls to on-call managers.',
  },
  {
    category: 'architecture',
    question: 'How do you handle pagination when querying massive datasets via API?',
    answer:
      'Custom nodes implement cursor-based and offset-limit pagination loops. Memory stream chunking processes millions of rows safely without memory exhaustion.',
  },
  {
    category: 'architecture',
    question: 'Can workflows dynamically adjust pricing across e-commerce marketplaces?',
    answer:
      'Yes. We build algorithmic repricing engines. Engines monitor competitor prices. They calculate target gross margins. The system pushes updates to Shopify hourly.',
  },
  {
    category: 'architecture',
    question: 'How do you ensure zero data corruption during system schema migrations?',
    answer:
      'We deploy dual-write pipelines that write data to old and new schemas simultaneously. Field parity validates across 10,000+ records before deprecating legacy endpoints.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schemas (CamelCase to prevent regex prose leaks)
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
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation#service',
  serviceType: 'AI workflow automation development',
  name: 'Custom AI Workflow Automation & n8n Development',
  description:
    'Custom AI workflow automation and n8n pipeline engineering for US businesses. Connect HubSpot, NetSuite, QuickBooks, Stripe, Slack. And cloud databases into resilient automated pipelines.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US operations teams, DTC e-commerce brands, B2B wholesale distributors. And financial services',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation',
  name: 'AI Workflow Automation & n8n USA | FactoryJet',
  description:
    'Connect HubSpot, NetSuite, QuickBooks, Stripe and Slack into automated pipelines. Self-hosted n8n and custom Python agents.',
  dateModified: PAGE_MODIFIED,
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Workflow Automation', url: 'https://factoryjet.com/services/ai-agent-development/ai-workflow-automation' },
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
  { b: '15+ hrs.', s: 'Weekly admin time eliminated per team pipeline.' },
  { b: '99%+', s: 'Data extraction accuracy from irregular PDFs & invoices.' },
  { b: 'Zero fees.', s: 'Self-hosted n8n on your private cloud VPC.' },
  { b: 'Full asset.', s: 'You own the workflow files, scripts and cloud.' },
];

const SOURCED_STATS = [
  {
    v: '45%',
    d: 'Of repetitive back-office work can be automated using existing technology. Manual data entry creates significant drag across operations.',
    src: 'McKinsey Global Institute',
    href: 'https://www.mckinsey.com/featured-insights/future-of-work/jobs-lost-jobs-gained-what-the-future-of-work-will-mean-for-jobs-skills-and-wages',
  },
  {
    v: '$28/hr.',
    d: 'Is the average wage for US data operations staff. Manual data entry causes high recurring overhead for growing enterprises.',
    src: 'Bureau of Labor Statistics, 2024',
    href: 'https://www.bls.gov/oes/current/oes430000.htm',
  },
  {
    v: '82%',
    d: 'Enterprises cite data fragmentation across CRM and ERP systems as their top bottleneck.',
    src: 'Gartner Enterprise Research',
    href: 'https://www.gartner.com/en/information-technology/insights/enterprise-architecture',
  },
];

const CAPABILITIES = [
  {
    t: 'AI Invoice & Document Extraction.',
    d: 'Parses unstructured PDF invoices, packing slips. And purchase orders. The agent runs function calling and prompt engineering. It exports validated JSON records into QuickBooks or NetSuite.',
  },
  {
    t: 'Cross-System CRM & ERP Sync.',
    d: 'syncs accounts, contacts, deal stages. And custom fields. Runs bidirectional CRM sync and ERP sync. Connects HubSpot, Salesforce, NetSuite. And warehouse tools.',
  },
  {
    t: 'Self-Hosted n8n Architecture.',
    d: 'Deploys production-grade n8n instances inside your private AWS or GCP VPC. Includes automated database backups, vector search. And monitoring.',
  },
  {
    t: 'Transactional Dead-Letter Queues.',
    d: 'Prevents silent data loss by capturing rejected API payloads into review queues. Sends instant Slack alerts and enables one-click retries.',
  },
  {
    t: 'Automated 3-Way Order Matching.',
    d: 'Compares vendor invoices against purchase orders and warehouse receipts. Highlights variances before payment approval with human in the loop controls.',
  },
  {
    t: 'Event-Driven Slack & SMS Dispatch.',
    d: 'Notifies account executives and warehouse managers of inventory alerts or payment failures. Triggers interactive approval buttons via webhook events.',
  },
  {
    t: 'Rate Limit & Queue Buffering.',
    d: 'Deploys Redis queue workers to manage API speed limits. Prevents throttling errors across high-volume batch sync jobs.',
  },
  {
    t: 'Audit Logging & Full monitoring.',
    d: 'Logs execution runs, payload hashes. And conversion steps into an audit database. Provides complete financial compliance and error tracing.',
  },
];

const INDUSTRIES = [
  {
    name: 'B2B Wholesale & Distribution.',
    desc: 'Automates dealer order entry from email attachments. Runs 3-way invoice matching against NetSuite POs and executes real-time inventory ERP sync.',
  },
  {
    name: 'DTC E-Commerce & Retail.',
    desc: 'Connects Shopify, ShipStation. And QuickBooks. Automatically generates shipping labels, updates tracking numbers. And syncs gross revenue.',
  },
  {
    name: 'Financial Services & Lending.',
    desc: 'Ingests loan applicant documents. Runs automated background checks. Scores credit parameters and organizes loan files in CRM records.',
  },
  {
    name: 'Real Estate & Property Management.',
    desc: 'Routes maintenance tickets and parses contractor repair invoices. syncs rent roll status and books estimator calendar visits.',
  },
  {
    name: 'Healthcare & Medical Practices.',
    desc: 'Automates patient intake registration and reminder sequences. Exports billing data into HIPAA-compliant cloud storage with full data encryption.',
  },
  {
    name: 'Professional Services & Legal.',
    desc: 'Executes client onboarding pipelines. Generates contracts, provisions Google Drive folders. And triggers project milestones via webhook events.',
  },
];

const FAILURE_MODES = [
  {
    title: '1. Upstream API Schema Changes & Silent Breaks.',
    description: 'A connected SaaS tool renames or deprecates a webhook payload field without warning.',
    mitigation: 'Runtime JSON schema validation intercepts malformed payloads immediately. The record isolates to a dead-letter queue and alerts engineering on Slack.',
  },
  {
    title: '2. Redis Queue speed & Memory Overflow.',
    description: 'A flash sale or batch upload sends 10,000 simultaneous webhook triggers.',
    mitigation: 'Redis token-bucket rate limiters regulate speed. Worker nodes pace API requests. Payloads persist safely on disk.',
  },
  {
    title: '3. Database Lockups & Write Collisions.',
    description: 'Two concurrent workflow executions attempt to update the same ERP customer record simultaneously.',
    mitigation: 'Optimistic locking handles state conflicts. Automated exponential backoff retries run without corrupting records.',
  },
  {
    title: '4. API Rate Limit Throttling (HTTP 429 Errors).',
    description: 'High-frequency API calls trigger rate-limit blocks on Shopify, HubSpot, or carrier servers.',
    mitigation: 'Automated retry interceptors parse Retry-After headers. They pause worker queues dynamically and resume execution without dropping records.',
  },
  {
    title: '5. Infinite Loop & Runaway Execution Costs.',
    description: 'A bidirectional CRM sync triggers an echo loop between connected systems.',
    mitigation: 'Execution cycle breakers check origin user IDs and payload hashes. They programmatically halt recursive triggers before API quota is wasted.',
  },
];

const SELECTION_CRITERIA = [
  {
    num: '01',
    title: 'Insist on Self-Hosted Private VPC Deployment.',
    desc: 'Never process sensitive ERP financial balances or customer PII through multi-tenant third-party clouds. Ensure n8n deploys in your AWS or GCP account.',
  },
  {
    num: '02',
    title: 'Verify Dead-Letter Queue & Error Architecture.',
    desc: 'Ask how they handle unexpected API timeouts. Solutions must include automated retries, payload isolation. And interactive Slack alert cards.',
  },
  {
    num: '03',
    title: 'Demand vision AI Document Extraction.',
    desc: 'Verify that the team uses vision-language models. Models must extract irregular multi-page PDF invoices into validated JSON without rigid templates.',
  },
  {
    num: '04',
    title: 'Check Full Version Control & Git Repository Ownership.',
    desc: 'You must own all workflow definitions and Python nodes. You receive Docker compose files and Git repositories.',
  },
  {
    num: '05',
    title: 'Verify Fixed-Price Build Contracts.',
    desc: 'Avoid open-ended hourly billing. Avoid agencies that charge recurring per-task transaction markups.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Manual Workflow Audit.',
    d: 'We document your manual data-entry bottlenecks. We identify data schemas, validation rules. And error states across your software stack.',
  },
  {
    n: '02',
    t: 'Data Architecture & Schema Design.',
    d: 'We design the complete pipeline blueprint. We define webhook triggers, prompt engineering models. And system field mappings.',
  },
  {
    n: '03',
    t: 'Pipeline Engineering & Connectors.',
    d: 'We build workflows on self-hosted n8n or custom Python microservices. We connect your CRM, ERP. And accounting APIs with strict validation.',
  },
  {
    n: '04',
    t: 'Batch Simulation & Exception Testing.',
    d: 'We test pipelines with 100+ historical records. We verify data accuracy and calibrate error retry thresholds in sandbox accounts.',
  },
  {
    n: '05',
    t: 'Production Rollout & Monitoring.',
    d: 'We complete live deployment with error dashboards and Slack alert channels. You receive full handover of workflow JSON files and credentials.',
  },
];

export default function AIWorkflowAutomationPage() {
  return (
    <>
      <script id="workflow-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="workflow-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="workflow-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="workflow-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
        <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

        {/* Hero Section */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI workflow automation // US operations.</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Connect your CRM, ERP &amp; data into <span className="pp-grad">autonomous pipelines</span>.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet builds custom AI workflow automations and n8n pipelines for US teams. We eliminate manual data entry and system errors. Self-healing pipelines run 24/7 in your private cloud.
                </p>
                <HeroInlineForm source="us_ai_workflow_automation_hero" region="us" submitLabel="Scope your workflow automation" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)' }}>
                <Image
                  src="/images/us/services/hero-ai-workflow.webp"
                  alt="Engineering team monitoring an automated n8n workflow pipeline dashboard"
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
            <p className="pp-mlabel">{'// the short answer.'}</p>
            <h2 style={{ marginTop: '10px' }}>What is AI workflow automation?</h2>
            <p className="pp-lead" style={{ marginTop: '16px', maxWidth: '74ch' }}>
              AI workflow automation combines system routing with machine intelligence. It pairs n8n and Python microservices with LLM reasoning. It uses retrieval augmented generation (RAG). Standard automation breaks when data is unstructured. AI workflows parse messy PDF invoices, emails. And purchase orders. They run vector search and embeddings for document classification. They extract key fields. They update your CRM or ERP software without manual human intervention.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              Deploying in your private cloud eliminates per-task fees from third-party tools. You maintain strict data residency compliance. You gain resilient dead-letter queues that prevent silent data loss.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              Pipelines handle 3-way invoice matching in NetSuite. They execute ERP integration and ERP sync across Shopify and warehouses. They apply tool use and function calling for high speed to lead. AI workflow automation turns manual processes into resilient, auditable data engines.
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
            <p className="pp-mlabel">{'// market evidence.'}</p>
            <h2 style={{ marginTop: '10px' }}>The team cost of manual data fragmentation.</h2>
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

        {/* Proprietary Framework: The 4-Stage Automation Maturity Model */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// proprietary framework.'}</p>
            <h2 style={{ marginTop: '10px' }}>The 4-Stage Automation Maturity Model.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Mid-market enterprises evolve through four distinct stages of team automation. Here is how architectures mature:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-gray-500" style={{ fontSize: '12px' }}>STAGE 1 // FRAGILE RELAYS.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Zapier &amp; Make SaaS.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Basic point-to-point SaaS triggers. High per-task fees, zero schema validation. And frequent silent execution breaks.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-blue-600" style={{ fontSize: '12px' }}>STAGE 2 // CUSTOM SCRIPTS.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Isolated Webhook Bots.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Hand-coded Node and Python scripts. Solves logic limits but lacks execution visualizers, centralized logging. And retry queues.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>STAGE 3 // PRODUCTION VPC.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Self-Hosted n8n.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Dedicated Docker clusters in your VPC. Zero per-task tax, dead-letter queues, Redis queue buffering. And Git versioning.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-green-600" style={{ fontSize: '12px' }}>STAGE 4 // AGENTIC GRAPHS.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Self-Healing Agents.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  vision vision extraction, evaluative feedback loops, dynamic margin repricing. And automated exception routing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator Section */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <AiAgentRoiCalculator defaultWorkflow="erp" source="ai_workflow_automation_page" />
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// capabilities.'}</p>
            <h2 style={{ marginTop: '10px' }}>What our AI workflow pipelines handle.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Built for resilient enterprise operations. Every data step is versioned, logged. And shielded by automated error handling.
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
            <p className="pp-mlabel">{'// technical architecture.'}</p>
            <h2 style={{ marginTop: '10px' }}>The self-hosted n8n cloud servers advantage.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              We deploy production automation cloud servers in your private AWS or GCP cloud environment.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>1. Private Cloud VPC &amp; Zero Task Fees.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Workflows run in Docker containers with PostgreSQL databases. Process 1,000,000+ monthly tasks for flat hosting costs. There are zero third-party per-task pricing fees.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>2. vision Vision &amp; PDF Extraction.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Vision nodes parse multi-page vendor PDF invoices and packing slips. They export structured JSON records. exact checks reconcile line items against invoice totals.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>3. Dead-Letter Queues &amp; Circuit Breakers.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Failed payloads route to an isolated PostgreSQL dead-letter queue. This prevents silent data loss. Interactive Slack alerts feature one-click buttons to replay records instantly.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>4. Git Version Control &amp; CI/CD.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Workflows commit as portable JSON to your Git repository. Teams test branches across staging and production. You get full ownership with zero vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Negative Space: When NOT to build self-hosted n8n automations */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// negative space & honest guidance.'}</p>
            <h2 style={{ marginTop: '10px' }}>When you should NOT build custom n8n workflow automations.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Self-hosted workflow engineering requires ongoing cloud servers ownership. Do not deploy self-hosted n8n if:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Low Execution Volume (&lt; 200 Tasks/Mo).</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If your business only runs a handful of simple automations each month, a free or $20/month Zapier plan is more practical than managing a private cloud server.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Native Tool Sync is Sufficient.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Standard native integrations work for simple contact sync. If you do not need custom data mapping, custom automation is unnecessary.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Zero Cloud cloud servers Access.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Some IT policies forbid provisioning private Docker instances or databases on AWS. In those cases, hosted SaaS tools must be used instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use-Cases */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// industry workflows.'}</p>
            <h2 style={{ marginTop: '10px' }}>Engineered for your industry team stack.</h2>
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
            <p className="pp-mlabel">{'// resilience & error boundaries.'}</p>
            <h2 style={{ marginTop: '10px' }}>How our automation pipelines handle team failure.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Enterprise data operations cannot tolerate silent breaks. Here is how our architecture prevents sync failures:
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

        {/* The 4 Core Enterprise Automation Topologies */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// enterprise automation topologies.'}</p>
            <h2 style={{ marginTop: '10px' }}>4 production data pipelines we engineer on self-hosted n8n.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              From invoice ingestion to inventory rebalancing, here is how our pipelines operate.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 01 // PDF INVOICE EXTRACTION.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>vision Vendor Invoice Parsing.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The pipeline monitors AP inboxes. Vision models extract line items from PDF invoices. The system runs 3-way matching against NetSuite POs. It creates draft bills for fast sign-off.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 02 // OMNICHANNEL INVENTORY.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Multi-Warehouse Stock Rebalancing.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The agent tracks sales velocity across Shopify Plus, Amazon. And 3PL nodes. It adjusts buffer stock levels dynamically. It generates transfer manifests before stockouts occur.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 03 // CRM &amp; BILLING SYNC.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Stripe-to-QuickBooks Revenue Settlement.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The pipeline captures Stripe charge webhooks. It calculates merchant processing fees. The system creates invoices in QuickBooks Online and updates HubSpot deal stages live.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 04 // CLIENT ONBOARDING.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Automated B2B Client Provisioning.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Signed DocuSign contracts trigger immediate actions. The system generates shared Google Drive client folders. It provisions user accounts and issues initial invoices automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// comparison.'}</p>
            <h2 style={{ marginTop: '10px' }}>FactoryJet custom automation vs. traditional approaches.</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ width: '100%', minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Feature.</th>
                    <th className="me">FactoryJet Custom Pipeline.</th>
                    <th>DIY Zapier / Make Subscriptions.</th>
                    <th>Traditional IT Outsourcer.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td><strong>Cost Model.</strong></td>
                    <td><strong>Fixed implementation build (no per-task markup).</strong></td>
                    <td>Aggressive recurring per-task fee tiers.</td>
                    <td>Hourly billing with open-ended scope.</td>
                  </tr>
                  <tr>
                    <td><strong>Unstructured PDF &amp; Document Parsing.</strong></td>
                    <td>Yes (vision LLM extraction).</td>
                    <td>Requires expensive third-party add-ons.</td>
                    <td>Manual custom OCR coding.</td>
                  </tr>
                  <tr>
                    <td><strong>Data Privacy &amp; VPC Hosting.</strong></td>
                    <td>Yes (runs on your AWS/GCP cloud).</td>
                    <td>No (data processed on vendor servers).</td>
                    <td>Depends on manual setup.</td>
                  </tr>
                  <tr>
                    <td><strong>Error Recovery &amp; Dead-Letter Queues.</strong></td>
                    <td>Yes (automatic retries + Slack alerts).</td>
                    <td>Basic error notifications.</td>
                    <td>Custom logging required.</td>
                  </tr>
                  <tr>
                    <td><strong>Code &amp; Workflow File Ownership.</strong></td>
                    <td>Yes (you own all JSON &amp; Python repo).</td>
                    <td>Locked inside proprietary vendor clouds.</td>
                    <td>Often withheld under proprietary retainers.</td>
                  </tr>
                  <tr>
                    <td><strong>Implementation Timeline.</strong></td>
                    <td>2 to 4 weeks to production.</td>
                    <td>Ongoing DIY maintenance.</td>
                    <td>3 to 6 months typical.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Selection Checklist: How to Choose a Partner */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// buyer checklist.'}</p>
            <h2 style={{ marginTop: '10px' }}>How to evaluate an enterprise workflow automation partner.</h2>
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
            <p className="pp-mlabel">{'// implementation process.'}</p>
            <h2 style={{ marginTop: '10px' }}>From process audit to live pipeline in 3 weeks.</h2>
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
            <p className="pp-mlabel">'Enterprise security &amp; workflow governance.'</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise security, guardrails. And pipeline governance architecture.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Workflow automation processes sensitive customer records, financial ledgers. And trade data. We enforce SOC 2, HIPAA. And GDPR standards across all deployed pipelines.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>SECURITY: SOC 2 &amp; HIPAA.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Pipeline Data Encryption.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Data streams and transaction payloads are encrypted at rest and in transit. Strict compliance with SOC 2, HIPAA, GDPR. And enterprise security policies.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>INTEGRATION: CRM &amp; ERP SYNC.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Live CRM &amp; ERP Sync.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  REST APIs and authenticated webhooks sync invoice data. They update records in HubSpot, Salesforce. And NetSuite.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>ACCESS: RBAC &amp; SSO.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Role-Based Access Control.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Role-based access control (RBAC) and single sign-on (SSO) via SAML secure prompt engineering, automation nodes. And cloud cloud servers.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>ORCHESTRATION: RAG.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Deterministic Tool Execution.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Retrieval augmented generation (RAG) with vector search, embeddings, function calling, tool use. And human in the loop reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS."
          headline="Questions operations leaders ask before deploying automated pipelines."
          lead="Guides covering n8n architecture, ERP connectors, error recovery. And data ownership."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <FinalCTA
          eyebrow="READY TO AUTOMATE YOUR DATA FLOWS?"
          headline="Scope your custom AI workflow automation today."
          sub="Book a discovery call with our engineering team. We map repetitive manual steps. We review your architecture and provide a fixed-price implementation blueprint."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View AI Agent Overview', href: '/services/ai-agent-development' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
