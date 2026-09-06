import type { Metadata } from 'next';
import Breadcrumbs from '@/components/v2/Breadcrumbs';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import HeroInlineForm from '@/components/HeroInlineForm';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'AI Chatbot Agent Development for US Businesses | FactoryJet',
  description:
    'Custom AI chatbot agents for US businesses: website chat, phone, SMS and email. Integrated with HubSpot, Salesforce, Shopify and Stripe. Fixed price.',
  keywords: [
    'AI chatbot development services',
    'AI chatbot agent development USA',
    'custom AI chatbot development US',
    'chatbot agent for customer support US',
    'conversational AI agent development',
    'AI customer support chatbot US',
    'HubSpot AI chatbot integration',
    'Salesforce AI chatbot agent',
    'website AI chat agent',
    'Spanish and English AI chatbot',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Chatbot Agent Development for US Businesses | FactoryJet',
    description:
      'Custom AI chatbot agents for websites, phone, SMS, email and support portals. HubSpot, Salesforce, Shopify and Stripe ready. Fixed price. Live in 2-3 weeks.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-agent-us.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Agent Development for US Businesses | FactoryJet',
    description:
      'Website AI chat, phone, SMS and email chatbot agents for US businesses. Fixed price. English + Spanish ready.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-agent-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
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
   JSON-LD Schemas, faqSchema is declared after CHATBOT_FAQ_ITEMS below
───────────────────────────────────────────────────────────────────────────── */

// Freshness signal. Benchmark: 56% of Google-AI-Overview-cited pages carry
// dateModified; these pages carried none. Keep this honest: bump it when the
// page's content actually changes, not on every unrelated deploy.
const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Chatbot', url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot' },
];

const PAGE_MODIFIED = '2026-08-30';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-chatbot#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Chatbot Agent Development',
  provider: {
    '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'AI Chatbot Development',
  description:
    'Custom AI chatbot agents for US businesses: website chat agents, phone and SMS agents, and email support bots integrated with HubSpot, Salesforce, Shopify, Stripe, and Zendesk. Fixed price. Deployed in 2-3 weeks.',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-chatbot#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const CHATBOT_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discover.',
    description:
      'A 45-minute call. We map which conversations are costing your team the most time, your highest-volume website chat and email threads, FAQ patterns, lead qualification steps, and identify the highest-ROI chatbot use case to build first.',
  },
  {
    number: '02',
    title: 'Design.',
    description:
      'We design conversation flows, decide on deployment channels (website chat, phone, SMS, email, or a mix), map integrations with your existing stack, and deliver a chatbot design document you approve before we write code.',
  },
  {
    number: '03',
    title: 'Build & Integrate.',
    description:
      'Engineering the chatbot agent with your language, tone, and business rules. We integrate HubSpot, Salesforce, Shopify, Zendesk, Stripe, or ShipStation so the agent can take actions, not just answer questions.',
  },
  {
    number: '04',
    title: 'Train & Test.',
    description:
      'We run the chatbot against real customer conversation samples, including Spanish queries, edge cases, and abusive inputs, tune the prompts, and stress-test until behavior is reliable and on-brand.',
  },
  {
    number: '05',
    title: 'Deploy & Hand Over.',
    description:
      'Launch on your chosen channel with monitoring, escalation paths to human agents, and a recorded training session. All code, API keys, and channel account access are handed to you at delivery.',
  },
];

const CHATBOT_STATS = [
  {
    value: '70%',
    label: 'of routine support questions handled by AI chatbots without human intervention.',
    microcopy: 'FactoryJet client data.',
    categoryLabel: 'DEFLECTION RATE.',
  },
  {
    value: '<60s',
    label: 'average first reply time across chat, SMS, and email.',
    microcopy: 'Across FactoryJet chatbot deployments.',
    categoryLabel: 'RESPONSE TIME.',
  },
  {
    value: '24/7',
    label: 'coverage across website chat, phone, SMS, and email.',
    microcopy: 'Every FactoryJet chatbot deployment.',
    categoryLabel: 'COVERAGE.',
  },
];

const CHATBOT_MARKET_STATS = [
  {
    value: '49%',
    label: 'of US adults use AI chatbots, up from 33% in 2024.',
    sourceUrl:
      'https://www.pewresearch.org/internet/2026/06/17/americans-and-ai-2026-chatbots-smart-devices-and-views-on-impact/',
    sourceLabel: 'Pew Research Center, June 2026.',
  },
  {
    value: '$3.99B',
    label: 'global chatbot market projected by 2030 at a 25.7% CAGR.',
    sourceUrl:
      'https://www.prnewswire.com/news-releases/chatbot-market-to-hit-3-99-billion-by-2030-at-cagr-25-7-grand-view-research-inc-301741773.html',
    sourceLabel: 'Grand View Research.',
  },
  {
    value: '61.1%',
    label: 'of multilingual Americans speak Spanish at home.',
    sourceUrl: 'https://www.census.gov/newsroom/press-releases/2023/language-at-home-acs-5-year.html',
    sourceLabel: 'US Census Bureau, 2018-2022 ACS.',
  },
];

const CHATBOT_COMPARISON_COLUMNS = [
  { label: 'FactoryJet.', isFactoryJet: true },
  { label: 'Scripted Chatbot Tool.' },
  { label: 'Freelancer.' },
  { label: 'No-Code Builder.' },
] as const;

const CHATBOT_COMPARISON_ROWS = [
  {
    feature: 'Starting price.',
    values: [
      'Fixed price after a scoping call.',
      'Monthly SaaS subscription, forever.',
      'Hourly or milestone, scope creep common.',
      'Monthly subscription, and you build it.',
    ],
  },
  {
    feature: 'Understands natural language.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="partial" />,
    ],
  },
  {
    feature: 'English + Spanish support.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'Website, phone, SMS and email channels.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="partial" />,
    ],
  },
  {
    feature: 'HubSpot / Zendesk / Shopify integration.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'Stripe payment and invoice actions.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'Fixed-price contract (no ongoing SaaS fee).',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: 'You own the code & IP.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
  {
    feature: '500+ SMB projects.',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="sc" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="nc" kind="no" />,
    ],
  },
];

const CHATBOT_INDUSTRIES = [
  {
    name: 'DTC E-Commerce.',
    description:
      'Website chat and email agents that answer order status queries, process returns, send carrier tracking updates from ShipStation, and handle product questions 24/7, integrated directly with your Shopify or WooCommerce store. Frees your support team to focus on complex issues.',
    example: 'DTC brands report 70%+ support ticket deflection within 30 days of launch.',
    linkLabel: 'See e-commerce AI',
    linkHref: '/services/ecommerce-development',
  },
  {
    name: 'Real Estate.',
    description:
      'Website and SMS agents that qualify leads coming in from Zillow, Realtor.com, and your own listings, answer property FAQs, show available units, and book showings: all logged automatically to HubSpot, Salesforce, or Follow Up Boss.',
    example: 'Brokerages see 35-50% more showings booked without adding inside sales reps.',
  },
  {
    name: 'Education & Training.',
    description:
      'Enrollment agents that answer program questions, collect student details, send Stripe payment links, deliver onboarding material, and track cohort registration, cutting advisor workload by 60%+.',
    example: 'Course platforms report 3× faster lead-to-enrollment conversion.',
  },
  {
    name: 'Healthcare & Clinics.',
    description:
      'Appointment booking agents on your website, phone line, and SMS that check provider availability, confirm slots, send reminders, and handle cancellations, built to respect HIPAA requirements with full audit trails on every interaction.',
    example: 'Clinics recover 3-4 hours of front-desk time per day.',
  },
  {
    name: 'Financial Services.',
    description:
      'Lead qualification agents for loan applications, insurance quotes, and advisory services, collecting identity documents, asking eligibility questions, and routing hot leads to advisors in real time, with TCPA consent captured before any outbound SMS or call.',
    example: 'Lenders cut application intake time by 55%.',
  },
  {
    name: 'Retail & Distribution.',
    description:
      'B2B ordering agents on your customer portal, email, and SMS that let your dealers place orders, check stock levels, track delivery status, and pull invoices from QuickBooks or NetSuite, without calling your sales team or waiting for business hours.',
    example: 'Distributors report 40% fewer inbound sales calls after launch.',
  },
];

const CHATBOT_FAQ_CATEGORIES = [
  { key: 'basics',     label: 'Chatbot Basics.' },
  { key: 'channels',   label: 'Channels & Deployment.' },
  { key: 'compliance', label: 'US Stack & Compliance.' },
  { key: 'process',    label: 'Process & Timeline.' },
  { key: 'pricing',    label: 'Pricing & ROI.' },
];

const CHATBOT_FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is the difference between an AI chatbot and a scripted chatbot?',
    answer:
      'Scripted chatbots follow rigid decision trees. They break when user wording varies. AI chatbots use LLM reasoning and retrieval augmented generation (RAG). They understand natural language intent. They execute live tool use and function calling across systems. They update CRM sync records in HubSpot. They check Shopify order status live with zero scripts.',
  },
  {
    category: 'basics',
    question: 'What can an AI chatbot agent actually do for my business?',
    answer:
      'Chatbots answer routine customer questions 24/7. They run lead qualification from website visitors to accelerate speed to lead. Agents book appointments on Google Calendar. They generate Stripe payment links. Chatbots execute ERP integration with NetSuite and pull invoices. They resolve 70% of support tickets autonomously.',
  },
  {
    category: 'basics',
    question: 'Will the chatbot understand customer questions it was not specifically trained on?',
    answer:
      'Yes. Modern language models understand conversational intent rather than exact keywords. The agent retrieves knowledge through vector search and semantic embeddings. It answers shipping queries, pricing questions, and policy details accurately. It references official documentation with zero hallucinations.',
  },
  {
    category: 'basics',
    question: 'What happens when the chatbot cannot answer a question?',
    answer:
      'The architecture enforces confidence thresholds and human in the loop safety. When confidence is low, the chatbot initiates warm handoffs to live agents. It forwards full conversation summaries to Zendesk, Intercom, or Slack. The customer never has to repeat themselves.',
  },
  {
    category: 'channels',
    question: 'Which channels can the AI chatbot agent be deployed on?',
    answer:
      'Agents deploy across website chat widgets, email, SMS, and phone lines. They integrate with Zendesk, Intercom, and HubSpot Service Hub. We also connect social messaging channels. All channels share one central knowledge base and unified business logic.',
  },
  {
    category: 'channels',
    question: 'Can the agent handle phone calls and SMS, not just typed chat?',
    answer:
      'Yes. We build voice and SMS pipelines using Twilio SIP infrastructure. The same prompt engineering and knowledge base powers your phone answering and text messaging. Callers experience natural spoken dialogue. Outbound SMS follows strict TCPA consent guidelines.',
  },
  {
    category: 'channels',
    question: 'Do you support WhatsApp as a channel?',
    answer:
      'Yes. We configure the WhatsApp Business API for global customer messaging. It connects directly to the same AI agent core. For US operations, teams often combine website chat, SMS, and email for high-volume support coverage.',
  },
  {
    category: 'channels',
    question: 'Can the chatbot send proactive messages, not just respond?',
    answer:
      'Yes. Chatbots send automated tracking links and payment confirmations. They dispatch appointment reminders and lead nurture sequences. These trigger from webhook events in Stripe, Shopify, or HubSpot. All outbound SMS captures TCPA consent and opt-out preferences.',
  },
  {
    category: 'compliance',
    question: 'Can the chatbot respond in Spanish as well as English?',
    answer:
      'Yes. The agent automatically detects English and Spanish in the first message. It responds with native fluency. This provides bilingual coverage for US customer operations without maintaining two separate systems.',
  },
  {
    category: 'compliance',
    question: 'Which business tools can the chatbot integrate with?',
    answer:
      'We integrate HubSpot, Salesforce, Zendesk, Stripe, and QuickBooks. We connect NetSuite, Shopify, ShipStation, and Google Calendar. The agent runs function calling over authenticated REST APIs and webhooks.',
  },
  {
    category: 'compliance',
    question: 'Does an SMS or voice chatbot have to follow TCPA rules?',
    answer:
      'Yes. All automated calls and SMS to US numbers must follow TCPA rules. The system enforces local calling windows from 8am to 9pm. It captures written consent and executes instant opt-out requests with full audit logging.',
  },
  {
    category: 'compliance',
    question: 'How do you handle CCPA and HIPAA requirements?',
    answer:
      'We build to strict security standards. For healthcare clients, we deploy HIPAA-compliant private cloud VPCs. For California users, we support CCPA data deletion requests. All data encrypts in transit and at rest with role-based access control.',
  },
  {
    category: 'process',
    question: 'How long does it take to build an AI chatbot agent?',
    answer:
      'Focused website chat agents deploy in 2 to 3 weeks. Multi-channel enterprise agents with CRM sync and ERP sync take 4 weeks. Every build includes custom prompt engineering, connector setup, and testing.',
  },
  {
    category: 'process',
    question: 'What do I need to provide before you start building?',
    answer:
      'We need sample customer inquiries and knowledge base documents. We require API access for connected platforms like HubSpot or Shopify. We define tone of voice, escalation paths, and tool use permissions together.',
  },
  {
    category: 'process',
    question: 'How do you train the chatbot on my specific business content?',
    answer:
      'We build a retrieval augmented generation (RAG) knowledge engine. We convert your product manuals, pricing sheets, and FAQs into vector embeddings. The agent references verified data before answering. You update documents anytime via a simple admin panel.',
  },
  {
    category: 'process',
    question: 'What happens after the chatbot goes live?',
    answer:
      'Every deployment includes 30 days of post-launch tuning and observability monitoring. We inspect conversation transcripts and optimize prompts. We provide team training and offer optional ongoing maintenance retainers.',
  },
  {
    category: 'pricing',
    question: 'How much does an AI chatbot agent cost?',
    answer:
      'FactoryJet builds on a transparent fixed-price model. Pricing depends on integration depth and channel count. You pay model token usage directly to providers with zero software markups from us.',
  },
  {
    category: 'pricing',
    question: 'What is the typical return on investment for a business chatbot?',
    answer:
      'Clients recover 20 to 40 hours of support time weekly. Deflecting 70% of routine inquiries delivers full payback within 3 to 5 months. Faster lead qualification improves speed to lead and boosts sales conversion rates.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after the chatbot is built?',
    answer:
      'You pay cloud hosting and LLM token usage directly at cost. You pay direct telephony fees to Twilio for SMS and phone. FactoryJet charges zero recurring SaaS fees unless you request an ongoing maintenance retainer.',
  },
  {
    category: 'pricing',
    question: 'Is my business data safe with an AI chatbot?',
    answer:
      'Yes. Connections use encrypted REST APIs with least-privilege role-based access control. We offer private model deployments where data never leaves your VPC. Audit logging records every transaction for SOC 2 and GDPR compliance.',
  },
  {
    category: 'technical',
    question: 'What is Retrieval-Augmented Generation (RAG) and how does it prevent chatbot hallucinations?',
    answer:
      'Retrieval augmented generation (RAG) links language models to your documents via vector search and semantic embeddings. The agent retrieves exact policy excerpts before answering. This prevents hallucinations and ensures 100% factual accuracy.',
  },
  {
    category: 'technical',
    question: 'How do AI chatbots handle bi-directional tool calling and API execution?',
    answer:
      'The chatbot uses function calling and tool use to execute live actions. It checks ShipStation tracking codes. It generates Stripe invoices. It books appointments on Google Calendar and logs deal updates in CRM sync workflows.',
  },
  {
    category: 'channels',
    question: 'Can AI chatbots handle human agent handoffs with conversation context?',
    answer:
      'Yes. When issues require human review, the chatbot summarizes caller intent and sentiment. It transfers conversations to Zendesk, Intercom, or Slack with full context attached. Human in the loop handoffs prevent customer frustration.',
  },
  {
    category: 'technical',
    question: 'How do you evaluate and benchmark AI chatbot response accuracy and latency?',
    answer:
      'We run automated LLM evaluation harnesses across hundreds of test cases. We measure retrieval precision, factual faithfulness, and response latency before production deployment. Observability dashboards track quality continuously.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: CHATBOT_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AIChatbotUSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="ai-chatbot-us-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="ai-chatbot-us-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader
        locale="us"
        navLinks={[
          { label: 'Services', href: '/services' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Portfolio', href: '/portfolio' },          { label: 'Contact', modal: true, region: 'us' },
        ]}
        cta={{ label: 'Book a Free Call', modal: true, region: 'us' }}
      />

      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <main className="bg-fj-cream">
      <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
        formSlot={<HeroInlineForm region="us" source="services_ai_agent_development_ai_chatbot_hero" />}
          eyebrow="AI CHATBOT AGENT DEVELOPMENT · UNITED STATES"
          headline="AI Chatbot Agents Built for US Customers, Live in 2-3 Weeks"
          lead="Your customers ask the same questions 200 times a day, on your website, by phone, over SMS and in your inbox. An AI chatbot agent answers them instantly, in English or Spanish, while pushing data straight into HubSpot, Shopify, and Stripe. Fixed price. No ongoing SaaS fee."
          secondaryCta={{ label: 'Get Free Quote', modal: true as const, region: 'us' as const }}
          trustItems={[
            '500+ businesses served',
            'HubSpot + Shopify + Stripe ready',
            'English & Spanish',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#B23E13]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                AI CHATBOT AGENT IN ACTION
              </p>
              <p className="mt-4 font-fj-display text-[1.875rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                600+ customer questions resolved automatically: every day, without a single extra hire.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  'Customer: "Where is my order?" → Agent checks ShipStation → replies with tracking link in 3 seconds',
                  'Lead from a paid ad asks price → Agent qualifies, sends the catalog → books a demo into HubSpot',
                  'Dealer asks for an invoice → Agent fetches it from QuickBooks → emails the PDF instantly',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#F05A28]/10 font-fj-mono text-[10px] font-bold text-[#B23E13]">
                      {i + 1}
                    </span>
                    <p className="font-fj-body text-[0.875rem] leading-[1.5] text-fj-neutral-600">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-fj-neutral-100 pt-6">
                <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">
                  Runs 24/7 in English and Spanish, across chat, phone, SMS and email. No sick leave, no salary.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across the US, UK, UAE, and Asia" />

        {/* ── 3. TRUST STATS ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ businesses. 12 years of building. One goal: your results."
          description="Websites and AI systems designed and built for businesses across the US, the UK, the UAE and Asia: Shopify stores, B2B companies, and DTC brands. Fixed, transparent pricing, your codebase delivered in full, and a 7-day delivery guarantee."
        />

        {/* ── 4. WHAT IS AN AI CHATBOT ─────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="AI CHATBOT EXPLAINED"
          headline="Why an AI Chatbot Is Nothing Like the Scripted Bots You Have Tried"
          lead="Scripted chatbots break the moment a customer asks something unexpected. AI chatbots understand intent in plain language, take real actions in your systems, and improve over time, with no script to maintain."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'Website chat support',
                  'Lead qualification',
                  'Order tracking',
                  'Invoice retrieval',
                  'Appointment booking',
                  'Payment links',
                  'Product FAQs',
                  'English & Spanish',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p>
                The scripted chatbots most businesses have tried, button-click menus, keyword matching, decision trees, fail 40-60% of conversations because customers do not behave the way the script expects. They use different words, switch between English and Spanish, ask follow-up questions, or type something the script never anticipated. The bot breaks, the customer leaves, and your team picks up the mess.
              </p>
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '24/7', label: 'Always on' },
                  { value: '70%', label: 'Ticket deflection' },
                  { value: '<60s', label: 'Response time' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="font-fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  More like a knowledgeable team member than a phone menu.
                </p>
              </div>
              <p>
                FactoryJet AI chatbot agents are built on large language models: Claude, GPT-4o, or Gemini, with a retrieval layer trained on your specific business content: product catalog, pricing, policies, FAQ answers. The agent understands what your customer means, checks your live data (Shopify orders, HubSpot records, ShipStation tracking), and takes action or escalates intelligently. No script to maintain, no tree to update every time you change your pricing.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  AI vs. Scripted Chatbot
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    scenario: 'Customer types in Spanish',
                    scripted: 'Breaks, only English supported',
                    ai: 'Understands, responds in Spanish automatically',
                  },
                  {
                    scenario: 'Unexpected question asked',
                    scripted: '"Sorry, I did not understand. Please select an option."',
                    ai: 'Understands intent, answers from knowledge base',
                  },
                  {
                    scenario: 'Check Shopify order status',
                    scripted: 'Cannot, no system integration',
                    ai: 'Queries Shopify live, replies with status in 3 sec',
                  },
                  {
                    scenario: 'Send a Stripe payment link',
                    scripted: 'Cannot take actions',
                    ai: 'Generates and sends the link in chat instantly',
                  },
                  {
                    scenario: 'Knowledge base update',
                    scripted: 'Rebuild the decision tree',
                    ai: 'Upload a document, done in minutes',
                  },
                ].map((row) => (
                  <div key={row.scenario} className="px-7 py-4">
                    <p className="font-fj-mono font-semibold text-fj-ink" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>{row.scenario}</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-fj-neutral-50 px-3 py-2">
                        <p className="font-fj-mono uppercase text-fj-neutral-400" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>Scripted</p>
                        <p className="mt-1 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.scripted}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(240,90,40,0.2)] bg-[rgba(240,90,40,0.05)] px-3 py-2">
                        <p className="font-fj-mono uppercase text-[#B23E13]" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>AI Chatbot</p>
                        <p className="mt-1 font-fj-body text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.ai}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your team is answering the same messages on repeat"
          lead="The biggest hidden cost in most US businesses is not salary, it is repetition. Your support staff spend 60-70% of their time on questions with the same 10 answers. An AI chatbot agent eliminates that entirely."
          pillars={[
            {
              icon: '💬',
              title: 'Front-line support is your most expensive bottleneck',
              body: "Website chat, the support inbox, the phone line, the text thread. Your team works all of it manually, typing the same answers, sending the same tracking links, fielding the same pricing questions: all day, every day. One AI chatbot agent handles 70%+ of these automatically, in the customer's language, at 2 AM.",
            },
            {
              icon: '⏱️',
              title: 'Leads go cold while your team sleeps',
              body: 'Research on inbound lead response has repeatedly found that replying within minutes rather than hours dramatically improves the odds a lead converts. A prospect who messages your business at 11 PM Pacific and gets a reply at 9 AM Eastern the next day has likely already contacted three competitors. An AI chatbot agent responds in under 60 seconds, around the clock.',
            },
            {
              icon: '🔄',
              title: 'Scripted chatbots create more problems than they solve',
              body: "You tried a button-menu chatbot, it confused customers, increased escalations, and your team spent more time managing the bot than it saved. AI chatbot agents are fundamentally different: they understand intent, handle unexpected questions, integrate with your real systems, and get better over time. The failure mode of scripted bots is not an AI problem.",
            },
          ]}
        />

        {/* ── 6. BUILD JOURNEY (LIGHT) ─────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="HOW WE BUILD"
          headline="From discovery to a live chatbot agent in 2-3 weeks"
          stages={CHATBOT_JOURNEY_STAGES}
          closingNote="Every stage ends with a working demo. You see the agent before it talks to your customers."
        />

        {/* ── 7. TECH STACK (LIGHT, REVERSED) ──────────────────────────────── */}
        <ServiceExplanation
          eyebrow="TECHNOLOGY"
          headline="The technology stack behind your AI chatbot agent"
          lead="We do not have a preferred vendor, we pick the right model and platform for your business, channel, and data sensitivity requirements. Every architectural decision is documented."
          reverseOnDesktop
          body={
            <>
              <p>
                Every chatbot agent we build has four layers: an LLM for language understanding and response generation, a knowledge base (RAG architecture) trained on your business content, integration connectors for the tools your team already runs on, and a deployment layer for your website, phone line, SMS, and email. We choose best-in-class components for each layer and explain the reasoning in plain language.
              </p>
              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white" aria-hidden>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-fj-neutral-100 bg-fj-neutral-50">
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Layer</th>
                      <th className="px-5 py-3 font-fj-mono text-[10px] font-semibold uppercase tracking-widest text-fj-neutral-400">Tools We Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fj-neutral-100">
                    {[
                      { layer: 'LLM / AI Model',       tools: 'Claude, GPT-4o, Gemini, Mistral' },
                      { layer: 'Knowledge Base (RAG)',  tools: 'Pinecone, pgvector, Chroma' },
                      { layer: 'Orchestration',          tools: 'LangChain, LangGraph, n8n' },
                      { layer: 'Voice / SMS / Email',   tools: 'Twilio, SendGrid, WhatsApp Business API' },
                      { layer: 'Website Widget',        tools: 'Custom React embed, Vercel Edge' },
                      { layer: 'CRM / Support',         tools: 'HubSpot, Salesforce, Zendesk, Intercom' },
                      { layer: 'E-Commerce',            tools: 'Shopify, WooCommerce, ShipStation' },
                      { layer: 'Payments / Billing',    tools: 'Stripe, QuickBooks webhooks' },
                    ].map((row) => (
                      <tr key={row.layer}>
                        <td className="px-5 py-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.8125rem' }}>{row.layer}</td>
                        <td className="px-5 py-3 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem' }}>{row.tools}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                For data-sensitive sectors, healthcare, financial services, legal, we deploy private LLM setups where your data never leaves your infrastructure. No third-party model provider sees your customer conversations, which is what makes HIPAA workloads workable in the first place.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Five Chatbot Agent Types We Build
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    name: 'Customer Support Agent',
                    desc: '24/7 support on website chat, email and SMS. Order status, returns, product queries, human escalation.',
                  },
                  {
                    name: 'Lead Qualification Agent',
                    desc: 'Captures and qualifies inbound leads from ads and your website. Pushes qualified leads to HubSpot or Salesforce.',
                  },
                  {
                    name: 'E-Commerce Assistant',
                    desc: 'Shopify/WooCommerce agent for product discovery, order tracking, and Stripe payment links.',
                  },
                  {
                    name: 'Appointment Booking Agent',
                    desc: 'Books appointments, checks availability, sends reminders, handles rescheduling by chat, phone or text.',
                  },
                  {
                    name: 'B2B Ordering Agent',
                    desc: 'Lets your dealers place orders, check stock, and pull invoices from your customer portal, 24/7.',
                  },
                ].map((item) => (
                  <div key={item.name} className="px-7 py-4">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9rem' }}>{item.name}</p>
                    <p className="mt-0.5 font-fj-body text-fj-neutral-500" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ── 8. STATS BAND ─────────────────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{
            backgroundColor: '#FAFAF7',
            borderTop: '1.5px solid rgba(240,90,40,0.18)',
            borderBottom: '1.5px solid rgba(240,90,40,0.18)',
          }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {CHATBOT_STATS.map((stat) => (
                <div key={stat.value}>
                  {stat.categoryLabel && (
                    <div
                      className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.13em',
                        color: '#B23E13',
                        background: 'rgba(240,90,40,0.06)',
                        border: '1px solid rgba(240,90,40,0.22)',
                      }}
                    >
                      <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#F05A28' }} aria-hidden="true" />
                      {stat.categoryLabel}
                    </div>
                  )}
                  <p
                    className="font-fj-display font-bold"
                    style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-0.04em', color: '#F05A28' }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-3 font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>
                    {stat.label}
                  </p>
                  {stat.microcopy && (
                    <p className="mt-1.5 font-fj-body text-fj-neutral-400" style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}>
                      {stat.microcopy}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. US MARKET CONTEXT ──────────────────────────────────────────── */}
        <CityContextSection
          eyebrow="US CHATBOT MARKET"
          headline="Half of US adults already talk to AI. Your customers expect the same from you."
          leadParagraphs={[
            "Roughly 49% of US adults now use AI chatbots, up from 33% in the summer of 2024, according to Pew Research Center. Your customers have already learned what a good AI conversation feels like, and they bring that expectation to your website chat, your phone line, and your support inbox. Businesses deploying AI chatbot agents now are compounding a customer experience advantage their competitors cannot easily close.",
            "Grand View Research puts the global chatbot market on track for $3.99 billion by 2030 at a 25.7% CAGR, with North America leading. The growth is not coming from large enterprises: most of them already have chatbots. It is coming from US SMBs in DTC e-commerce, real estate, education, healthcare, and B2B distribution discovering that AI chatbot agents are now affordable enough to deploy at any scale.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A lead that waits until tomorrow morning for a reply has already contacted three competitors.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  'DTC E-Commerce',
                  'Real Estate',
                  'Education',
                  'Healthcare',
                  'Financial Services',
                  'B2B Distribution',
                ].map((ind) => (
                  <span
                    key={ind}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#B23E13]"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </>
          }
          stats={CHATBOT_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Scripted Chatbot Tool vs. Freelancer vs. No-Code Builder"
          lead="Fixed price, full ownership, the US business stack out of the box, here is the honest comparison."
          pullQuote={{
            stat: 'Fixed price',
            caption:
              'scoped to your build, an AI chatbot agent with natural language understanding, English and Spanish support, HubSpot or Salesforce integration, and full code ownership. No SaaS subscription. No decision tree to maintain. Quoted up front after a free discovery call, so you know the full cost before work starts.',
          }}
          columns={CHATBOT_COMPARISON_COLUMNS}
          rows={CHATBOT_COMPARISON_ROWS}
          footer="Comparison reflects the options typically on the table for a US business in 2026. FactoryJet fixed-price contracts are available for every build."
        />

        {/* ── 11. INDUSTRIES GRID (DARK) ────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHO WE BUILD FOR"
          headline="AI chatbot agents for every major US industry"
          lead="Every industry has different conversation patterns, integrations, and compliance requirements. We build for yours."
          sectors={CHATBOT_INDUSTRIES}
        />

        <GetFreeQuoteCTA />
        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What founders say after we build their AI chatbot agents"
        />

                {/* ── Enterprise Security & Governance Architecture ── */}
        <section className="py-12 md:py-16 bg-[#FAFAF7] border-t border-b border-[rgba(240,90,40,0.18)]">
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <p className="font-fj-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#B23E13]">
              Enterprise Security &amp; Chatbot Governance.
            </p>
            <h2 className="mt-2 font-fj-display text-[1.875rem] font-bold text-fj-ink">
              Enterprise security, guardrails, and chatbot governance architecture.
            </h2>
            <p className="mt-3 max-w-[72ch] font-fj-body text-[1rem] leading-relaxed text-fj-neutral-600">
              AI chatbot agents process customer records, order details, and private conversations. We enforce SOC 2, HIPAA, and GDPR standards across all deployments.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">SECURITY: SOC 2 &amp; HIPAA.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Chatbot Data Encryption.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Chat transcripts and API payloads are encrypted at rest and in transit. Strict compliance with SOC 2, HIPAA, and GDPR standards.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">INTEGRATION: CRM &amp; ERP SYNC.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Live CRM &amp; ERP Sync.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Bidirectional REST APIs and authenticated webhooks sync chat transcripts, tickets, and customer notes to HubSpot, Salesforce, and NetSuite.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">ACCESS: RBAC &amp; SSO.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Role-Based Access Control.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Role-based access control (RBAC) and single sign-on (SSO) secure prompt engineering, chatbot knowledge bases, and admin settings.
                </p>
              </div>
              <div className="rounded-2xl border border-fj-neutral-200 bg-white p-6 shadow-sm">
                <span className="font-fj-mono text-[12px] font-bold text-[#B23E13]">ORCHESTRATION: RAG.</span>
                <h3 className="mt-2 font-fj-body text-[1.05rem] font-bold text-fj-ink">Deterministic Tool Execution.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Retrieval augmented generation (RAG) with vector search, embeddings, function calling, tool use, and human in the loop handoffs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. FAQ (LIGHT) ───────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Start"
          lead="The questions we answer on every AI chatbot discovery call, answered honestly, without the runaround."
          categories={CHATBOT_FAQ_CATEGORIES}
          items={CHATBOT_FAQ_ITEMS}
        />

        {/* ── 15. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}

        {/* ── 16. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="GET STARTED"
            headline="Book a Free AI Chatbot Strategy Call"
            sub="Tell us your biggest support or lead-response bottleneck. We will map out exactly which chatbot agent fits your business and give you a fixed-price estimate before writing a single line of code. No pitch, no pressure: an honest assessment from engineers who have been building for growing businesses for 12 years."
            primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All AI Agent Services', href: '/services/ai-agent-development' }}
            objectionHandler="Fixed price. Full code ownership. HubSpot + Shopify + Stripe ready. No SaaS lock-in."
          />
        </div>

      </main>

      <SiteFooter locale="us" />
    </>
  );
}
