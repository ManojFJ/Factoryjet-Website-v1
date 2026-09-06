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
  title: 'AI Voice Agents for US Operations | FactoryJet',
  description:
    'Custom conversational AI voice agents for US inbound phone support, qualification, and booking. Sub-500ms latency, Twilio SIP telephony, English and Spanish.',
  keywords: [
    'ai voice agents',
    'custom voice ai development',
    'conversational ai voice agent usa',
    'twilio ai voice agent integration',
    'bilingual ai voice agent english spanish',
    'ai phone answering service for business',
    'ai appointment booking voice agent',
    'ai call center automation',
    'inbound phone support ai agent',
    'voice ai development company',
    'real time voice agent engineering',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Voice Agents for US Operations | FactoryJet',
    description:
      'Custom conversational AI voice agents with sub-500ms latency for inbound support, lead qualification, and appointment scheduling. English and Spanish ready.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
    images: [
      {
        url: 'https://factoryjet.com/images/us/services/hero-ai-chatbot.webp',
        width: 1200,
        height: 800,
        alt: 'FactoryJet AI Voice Agent Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agents USA | FactoryJet',
    description:
      'Human-sounding AI voice agents for US inbound support and qualification. Sub-500ms latency, Twilio SIP telephony, CRM sync.',
    images: ['https://factoryjet.com/images/us/services/hero-ai-chatbot.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
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
  { key: 'basics', label: 'Voice AI basics.' },
  { key: 'telephony', label: 'Telephony & latency.' },
  { key: 'languages', label: 'Languages & accents.' },
  { key: 'compliance', label: 'TCPA & compliance.' },
  { key: 'process', label: 'Process & ownership.' },
  { key: 'architecture', label: 'Technical architecture.' },
];

const FAQ_ITEMS = [
  {
    category: 'basics',
    question: 'What is an AI voice agent and how does it work on phone calls?',
    answer:
      'An AI voice agent conducts live phone calls in real time. It pairs streaming speech-to-text with LLM reasoning. It uses fast neural speech synthesis over Twilio SIP trunking. The agent interprets caller intent. It runs database tool use and function calling in under 500 milliseconds. It updates CRM records with zero lag.',
  },
  {
    category: 'basics',
    question: 'How realistic and natural does an AI voice agent sound?',
    answer:
      'Modern neural voice models sound human. They use natural breath pauses and dynamic inflection. Pacing adjusts in real time. This eliminates the robotic cadence of legacy IVR phone menus.',
  },
  {
    category: 'basics',
    question: 'What types of phone calls can an AI voice agent handle?',
    answer:
      'The agent handles customer service inquiries and order tracking. It qualifies inbound leads to boost speed to lead. It manages appointment scheduling and clinic intake. It also handles field service management work order dispatch.',
  },
  {
    category: 'basics',
    question: 'How does the voice agent handle customer interruptions (barge-in)?',
    answer:
      'The pipeline uses full-duplex audio streaming. Acoustic echo cancellation detects caller speech. Synthesis halts in under 80 milliseconds. The caller speaks freely without conversational collisions.',
  },
  {
    category: 'telephony',
    question: 'What telephony infrastructure and providers do you support?',
    answer:
      'We integrate natively with Twilio Voice and Telnyx SIP trunking. We connect to RingCentral, Asterisk, and cloud PBX systems. Authenticated webhook events sync telephony states across your stack.',
  },
  {
    category: 'telephony',
    question: 'What is the end-to-end voice latency for spoken responses?',
    answer:
      'Our streaming audio pipelines achieve total turn-around latency under 500 milliseconds. Speech-to-text takes 120ms. LLM reasoning takes 180ms. Neural audio synthesis takes 120ms. The conversation feels completely natural.',
  },
  {
    category: 'telephony',
    question: 'Can the voice agent transfer callers to a live human representative?',
    answer:
      'Yes. The agent executes warm transfer routing via SIP REFER or Twilio Dial. It routes calls to human representatives or mobile queues. It provides a warm transfer summary so human staff have full context.',
  },
  {
    category: 'telephony',
    question: 'Can the voice agent query our CRM, calendar, or ERP during a call?',
    answer:
      'Yes. The agent runs function calling and real-time tool use while speaking. It looks up callers in HubSpot or Salesforce. It checks Google Calendar slots. It executes ERP integration and ERP sync across NetSuite.',
  },
  {
    category: 'languages',
    question: 'Does the voice agent support bilingual English and Spanish phone calls?',
    answer:
      'Yes. The agent detects English or Spanish in the first phrase. It responds with native regional accents. It handles bilingual call routing and records English summaries to your CRM.',
  },
  {
    category: 'languages',
    question: 'Can we select custom brand voices and accents?',
    answer:
      'Yes. You choose from dozens of neural voices. You can select regional US or international accents. You can also deploy custom cloned brand voices with licensed voice talent.',
  },
  {
    category: 'languages',
    question: 'How does the agent handle noisy background environments or poor cell connections?',
    answer:
      'The speech model applies deep learning noise suppression. It uses phonetic beam-search decoding. It isolates caller speech from traffic noise, machinery, and wind.',
  },
  {
    category: 'languages',
    question: 'Can the voice agent spell out confirmation codes, dates, and email addresses clearly?',
    answer:
      'Yes. The agent spells confirmation codes using phonetic standards. It verifies characters clearly. It repeats critical details to ensure complete accuracy.',
  },
  {
    category: 'compliance',
    question: 'How do you ensure compliance with TCPA and FCC calling regulations?',
    answer:
      'All agents follow TCPA rules and FCC guidelines. The system enforces local calling windows from 8am to 9pm. It executes instant DNC opt-outs and delivers mandatory entity disclosures.',
  },
  {
    category: 'compliance',
    question: 'Is call audio recorded and stored securely?',
    answer:
      'Call audio recordings, transcripts, and metadata are encrypted in transit and at rest. The architecture meets SOC 2 and GDPR standards. Data stores in private AWS S3 or Google Cloud buckets.',
  },
  {
    category: 'compliance',
    question: 'Can the voice agent take credit card payments over the phone?',
    answer:
      'For PCI DSS compliance, payments use secure DTMF keypad touch-tones. The agent can also text a checkout link via SMS. Raw credit card data never touches voice transcripts or LLM prompts.',
  },
  {
    category: 'compliance',
    question: 'How do you prevent hallucinations during live phone conversations?',
    answer:
      'The agent uses retrieval augmented generation (RAG) with vector search and embeddings. Guardrails limit answers to verified knowledge bases. It transfers edge cases to human specialists.',
  },
  {
    category: 'process',
    question: 'How long does an AI voice agent implementation take?',
    answer:
      'A custom voice agent takes 3 to 4 weeks to deploy. This includes script design, telephony wiring, and tool use testing. We run an evaluation harness on staging phone lines before launch.',
  },
  {
    category: 'process',
    question: 'What is the pricing structure for building an AI voice agent?',
    answer:
      'FactoryJet uses a transparent fixed-price model. You pay direct telephony fees to Twilio. You pay model inference at cost. There are zero per-minute markups or platform fees.',
  },
  {
    category: 'process',
    question: 'Do we own the voice agent code and telephony prompts?',
    answer:
      'Yes. You receive 100% source code ownership. You own all prompt engineering templates and webhook connectors. The solution runs entirely in your private cloud.',
  },
  {
    category: 'process',
    question: 'How do we test and review call recordings before go-live?',
    answer:
      'We set up a private staging phone number. Your team dials in to test real-world scenarios. You review transcripts and audio recordings in real time.',
  },
  {
    category: 'architecture',
    question: 'How does the voice pipeline manage audio jitter and network packet loss?',
    answer:
      'The pipeline uses adaptive jitter buffering. It deploys WebRTC and SIP forward error correction. Audio remains crystal clear even over unstable mobile cell connections.',
  },
  {
    category: 'architecture',
    question: 'What speech synthesis engine powers the voice output?',
    answer:
      'We use ultra-low-latency neural TTS models. Providers include Cartesia Sonic and ElevenLabs. The agent streams raw PCM audio chunks over WebSockets in under 120 milliseconds.',
  },
  {
    category: 'architecture',
    question: 'How does the voice agent fill conversational silence during database queries?',
    answer:
      'When an API lookup takes over 300ms, the agent speaks natural conversational fillers. It might say, "Let me check that record for you." This prevents awkward dead air.',
  },
  {
    category: 'architecture',
    question: 'Can the voice agent trigger SMS notifications during or after the call?',
    answer:
      'Yes. The agent triggers automated SMS texts via Twilio. It sends booking confirmations and directions while callers stay on the line.',
  },
  {
    category: 'architecture',
    question: 'How does the system handle voicemail detection on outbound calls?',
    answer:
      'The telephony engine runs Answering Machine Detection in 1.2 seconds. It leaves a concise recorded message if a machine answers. It starts conversation when a human picks up.',
  },
  {
    category: 'architecture',
    question: 'Can the voice agent route calls based on caller geographical location?',
    answer:
      'Yes. The agent inspects caller area codes and carrier location metadata. It executes automated call routing to regional branch offices or state-licensed specialists.',
  },
  {
    category: 'architecture',
    question: 'How does the system handle high-concurrency phone call spikes?',
    answer:
      'The architecture runs on elastic cloud infrastructure. Twilio SIP trunking scales to hundreds of concurrent calls. Callers experience zero busy signals or wait queues.',
  },
  {
    category: 'architecture',
    question: 'What analytics are provided on the voice operations dashboard?',
    answer:
      'Dashboards track call duration, latency, and resolution rates. They track human transfer frequency and caller sentiment curves. Data logs to Datadog, HubSpot, or Salesforce.',
  },
  {
    category: 'architecture',
    question: 'How does the voice agent handle callers with heavy regional accents?',
    answer:
      'The speech-to-text model trains across diverse regional American and Spanish dialects. It adjusts phoneme probabilities dynamically. Transcription stays accurate across accents.',
  },
  {
    category: 'architecture',
    question: 'Can the voice agent route calls based on dynamic caller account value?',
    answer:
      'Yes. The agent identifies caller phone numbers and checks CRM tiers. It routes enterprise VIP accounts directly to Account Managers while serving standard inquiries autonomously.',
  },
  {
    category: 'architecture',
    question: 'How do you test voice agent response quality before production launch?',
    answer:
      'We run automated dialer tests across 200+ simulated caller scenarios. We test latency, interruption handling, and tool use accuracy before cutting over live phone lines.',
  },
  {
    category: 'architecture',
    question: 'Can the voice agent handle simultaneous multi-party conference calls?',
    answer:
      'Yes. The agent joins scheduled conference lines as an active assistant. It takes spoken commands, transcribes discussion, and executes real-time database tasks.',
  },
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
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent#service',
  serviceType: 'AI voice agent development',
  name: 'Custom Conversational AI Voice Agent Development',
  description:
    'Custom conversational AI voice agents for US businesses: sub-500ms latency, Twilio SIP telephony, English/Spanish bilingual support, appointment scheduling, and CRM integration.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US customer support directors, healthcare clinics, commercial services, and sales call centers',
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent#webpage',
  url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
  name: 'AI Voice Agents for US Operations | FactoryJet',
  description:
    'Custom conversational AI voice agents with sub-500ms latency for inbound support, lead qualification, and appointment scheduling. English and Spanish ready.',
  dateModified: PAGE_MODIFIED,
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
};

const BREADCRUMB_ITEMS = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
  { name: 'AI Voice Agents', url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent' },
];

const STATS = [
  { b: '< 500 ms', s: 'end-to-end voice latency for natural conversation flow.' },
  { b: '24/7/365', s: 'instant phone answering with zero hold times or busy signals.' },
  { b: 'Bilingual', s: 'fluent English and Spanish with native regional accents.' },
  { b: 'Full ownership', s: 'you own the telephony scripts, prompts and cloud.' },
];

const SOURCED_STATS = [
  {
    v: '67%',
    d: 'of callers hang up on legacy phone menus. Long hold times destroy customer loyalty.',
    src: 'Consumer Reports Telephone Survey',
    href: 'https://www.consumerreports.org/cro/2011/07/customer-service-telephone-survey/index.htm',
  },
  {
    v: '41M+',
    d: 'US residents speak Spanish at home. Bilingual phone support gives operations a major competitive edge.',
    src: 'US Census Bureau Language Report',
    href: 'https://www.census.gov/topics/population/language-use.html',
  },
  {
    v: '100%',
    d: 'compliance required under FCC and TCPA rules. We engineer full regulatory compliance into every call workflow.',
    src: 'Federal Communications Commission',
    href: 'https://www.fcc.gov/general/telemarketing-and-robocalls',
  },
];

const CAPABILITIES = [
  {
    t: 'Sub-500ms Streaming Voice Pipeline.',
    d: 'Combines streaming speech-to-text, fast language models, and low-latency neural speech synthesis over WebSockets. Delivers natural spoken conversation with sub-second turnaround and zero awkward pauses.',
  },
  {
    t: 'Full-Duplex Barge-In Interruption.',
    d: 'Acoustic echo cancellation detects caller speech. It halts speech within 80 milliseconds. Callers can interrupt naturally without talking over the assistant.',
  },
  {
    t: 'Bilingual English & Spanish Support.',
    d: 'Detects caller language in the first sentence. Responds with native pronunciation and localized vocabulary. Switches between English and Spanish dynamically.',
  },
  {
    t: 'Live Calendar Appointment Booking.',
    d: 'Checks real-time availability in Google Calendar or Outlook 365. Reserves consultation slots and checks timezone offsets. Sends instant SMS confirmations.',
  },
  {
    t: 'Warm Human Call Transfer (SIP REFER).',
    d: 'Transfers complex calls to human agents or mobile queues. Plays an automated hold greeting. Passes an instant call summary to the receiving representative.',
  },
  {
    t: 'Real-Time CRM & Database Lookups.',
    d: 'Looks up caller phone numbers in HubSpot or Salesforce. References prior order history and open tickets. Checks customer lifetime value tiers.',
  },
  {
    t: 'TCPA & Regulatory Compliance.',
    d: 'Enforces US calling window constraints from 8am to 9pm local time. Delivers mandatory agent disclosure greetings. Manages automated DNC logging and consent recording.',
  },
  {
    t: 'Post-Call Transcripts & CRM Logging.',
    d: 'Transcribes every call and generates structured JSON summaries. Logs audio recordings directly into your CRM deal timeline with complete attribution.',
  },
];

const INDUSTRIES = [
  {
    name: 'Home Services & Commercial Contracting.',
    desc: 'Answers emergency plumbing, HVAC, and roofing calls 24/7. Captures job address, severity, and gate access codes. Schedules estimator site visits and dispatches on-call technicians immediately.',
  },
  {
    name: 'Healthcare Clinics & Dental Practices.',
    desc: 'Handles patient appointment scheduling and insurance intake screening. Provides office directions and prescription refill triage. Maintains HIPAA compliance and native bilingual fluency.',
  },
  {
    name: 'Legal Practices & Corporate Law Firms.',
    desc: 'Conducts initial case intake screening for law firms. Checks jurisdiction and screens conflicts of interest. Schedules attorney consultations on calendar.',
  },
  {
    name: 'Automotive Dealerships & Service Centers.',
    desc: 'Books vehicle service appointments and confirms parts inventory. Checks warranty recall statuses. Provides maintenance status updates to drivers via phone and automated SMS.',
  },
  {
    name: 'Property Management & Real Estate.',
    desc: 'Triages tenant maintenance emergencies after hours. Books property tour appointments across leasing agents. Answers rental qualification criteria with zero staff overhead.',
  },
  {
    name: 'Financial Services & Insurance Agencies.',
    desc: 'Performs preliminary insurance policy intake and answers billing questions. Checks claim status in CRM databases. Routes high-value underwriting claims to licensed insurance specialists.',
  },
];

const FAILURE_MODES = [
  {
    title: '1. Barge-In Interruption & Voice Collisions.',
    description: 'The voice agent speaks over a caller who tries to interject or ask a question.',
    mitigation: 'Dynamic Voice Activity Detection pairs with acoustic echo cancellation. Speech synthesis halts within 80 milliseconds of caller audio. This enables natural human-like conversational interruptions.',
  },
  {
    title: '2. Heavy Acoustic Background Noise & Wind.',
    description: 'A caller speaks from a moving work truck, noisy jobsite, or windy outdoors.',
    mitigation: 'Deepgram Nova-2 acoustic filters strip background noise frequencies. Phonetic beam-search decoding maintains high transcription accuracy. It prevents dropped syllables.',
  },
  {
    title: '3. Telephony Packet Loss & Jitter Jams.',
    description: 'Poor cellular reception or packet loss causes audio dropouts or voice distortion.',
    mitigation: 'Adaptive jitter buffering and WebRTC error correction smooth audio packets over UDP. This ensures uninterrupted audio streams even under 15% packet loss.',
  },
  {
    title: '4. Out-of-Domain Technical Questions.',
    description: 'A caller asks a complex question outside indexed company knowledge bases.',
    mitigation: 'The agent adheres to a strict negative constraint. It politely explains it will connect a human specialist. It initiates a warm SIP transfer with context summary rather than guessing.',
  },
  {
    title: '5. Credit Card PCI Data Exposure.',
    description: 'A caller attempts to read credit card numbers or banking PINs on the call.',
    mitigation: 'The agent routes payment collection to secure DTMF touch-tone entry. It can also dispatch an SMS checkout link while remaining on the call. Card numbers stay out of transcripts.',
  },
];

const SELECTION_CRITERIA = [
  {
    num: '01',
    title: 'Demand Sub-550ms Total Glass-to-Glass Latency.',
    desc: 'Voice agents with latency over 1,000ms cause awkward pauses. Demand streaming WebSockets audio architecture with fast speech-to-text. Ensure low-latency neural synthesis from your engineering partner.',
  },
  {
    num: '02',
    title: 'Verify Full-Duplex Interruption (Barge-In).',
    desc: 'Test the agent by interrupting it mid-sentence. If the agent cannot halt speech within 80 milliseconds, it will frustrate live callers. Full-duplex interruption prevents conversational collisions.',
  },
  {
    num: '03',
    title: 'Insist on Live CRM & Calendar Tool Integration.',
    desc: 'A voice agent must do more than answer FAQs. It must look up caller phone numbers in your CRM. It must check real-time calendar availability and book appointments live on the line.',
  },
  {
    num: '04',
    title: 'Verify TCPA & FCC Calling Compliance.',
    desc: 'Ensure the system enforces recipient timezone calling constraints from 8am to 9pm local time. Require instant opt-out logging and mandatory disclosure greetings under federal law.',
  },
  {
    num: '05',
    title: 'Insist on Telephony Code and Prompt Ownership.',
    desc: 'You should own all Twilio telephony configs and prompt templates. Webhook handlers deploy in your private cloud with zero per-minute markup or vendor lock-in.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Call Flow & Scripting Architecture.',
    d: 'We document your call scripts, objection branches, and booking logic. We map escalation criteria and phonetic vocabulary lists. Boundary guardrails ensure zero out-of-domain answers.',
  },
  {
    n: '02',
    t: 'Telephony & Voice Model Setup.',
    d: 'We provision Twilio SIP trunks and select neural voice models like Cartesia Sonic. We configure streaming speech-to-text recognition with custom pronunciation dictionaries.',
  },
  {
    n: '03',
    t: 'API Tool Integration & Calendar Sync.',
    d: 'We connect the voice agent to your CRM, scheduling calendars, and ERP endpoints. Real-time tool use ensures sub-second response lookups during live calls.',
  },
  {
    n: '04',
    t: 'Interactive Dial-In Testing & Simulation.',
    d: 'We configure a private staging phone line for team testing. Your team dials in across diverse caller accents, background noise, and mid-sentence barge-in interruptions.',
  },
  {
    n: '05',
    t: 'Live Production Phone Routing & Analytics.',
    d: 'We forward your primary business phone numbers or SIP trunks to the voice agent. Systems launch with real-time call recording, sentiment dashboards, and automated Slack alert feeds.',
  },
];

export default function AIVoiceAgentPage() {
  return (
    <>
      <script id="voice-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="voice-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="voice-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <BreadcrumbSchema items={BREADCRUMB_ITEMS} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <main className="platpage">
        <Breadcrumbs items={BREADCRUMB_ITEMS} />

        {/* Hero Section */}
        <section className="pp-dotgrid" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="pp-wrap" style={{ paddingTop: 'clamp(40px,5vh,72px)', paddingBottom: 'clamp(44px,6vh,84px)', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }} className="pp-herogrid">
              <div>
                <p className="pp-eyebrow">AI voice agents // US operations.</p>
                <h1 style={{ margin: '14px 0 12px', maxWidth: '19ch' }}>
                  Human-sounding AI voice agents with sub-500ms latency.
                </h1>
                <p className="pp-lead" style={{ maxWidth: '52ch' }}>
                  FactoryJet builds custom conversational AI voice agents for US phone operations. We answer inbound customer service calls, qualify sales leads, and schedule calendar appointments 24/7 with zero hold times in natural English and Spanish. Built on low-latency streaming WebSockets and Twilio SIP telephony with direct CRM and calendar integration.
                </p>
                <HeroInlineForm source="services_ai_voice_agent_hero" region="us" submitLabel="Scope your voice agent" />
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--pp-line)', boxShadow: '0 24px 48px -28px rgba(20,17,15,0.28)' }}>
                <Image
                  src="/images/us/services/hero-ai-chatbot.webp"
                  alt="Operations team monitoring live AI voice agent call routing and latency dashboard"
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
            <h2 style={{ marginTop: '10px' }}>What is an AI voice agent?</h2>
            <p className="pp-lead" style={{ marginTop: '16px', maxWidth: '74ch' }}>
              An AI voice agent conducts live phone calls. It uses streaming speech-to-text and LLM reasoning. Neural voice synthesis runs over Twilio SIP telephony. It speaks with natural inflection. Latency stays under 500 milliseconds.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              Callers speak in plain sentences. They ask questions and interrupt naturally. Callers schedule bookings and check order status. There are zero hold times.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              Calls are transcribed live. Transcripts sync to CRM records. The agent logs rich audio summaries. Human teams receive full context on warm transfers. The system connects to Google Calendar, HubSpot, and Salesforce. It runs database lookups in real time.
            </p>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '74ch' }}>
              The agent supports English and Spanish. It detects caller language in the first phrase. This removes language barriers. It provides 24/7 telephone coverage for US teams.
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
            <h2 style={{ marginTop: '10px' }}>The operational reality of telephone support.</h2>
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

        {/* Proprietary Framework: The Voice Latency Budget Architecture */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// proprietary framework.'}</p>
            <h2 style={{ marginTop: '10px' }}>The Voice Latency Budget Architecture.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Human conversation feels natural when response latency stays below 600ms. We break down every millisecond of our streaming audio pipeline:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '13px' }}>120 MS // STT.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Streaming Speech-to-Text.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Deepgram Nova-2 streaming WebSocket transcription. It applies phonetic correction for names, codes, and addresses.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '13px' }}>180 MS // LLM.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Reasoning &amp; Tool Call.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Fast inference models evaluate intent in real time. They query CRM and calendar APIs.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '13px' }}>120 MS // TTS.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Neural Speech Synthesis.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Low-latency voice synthesis models. They stream PCM audio chunks back over WebSockets.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '20px' }}>
                <span className="font-fj-mono font-bold text-green-600" style={{ fontSize: '13px' }}>&lt; 500 MS // TOTAL.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1rem' }}>Glass-to-Glass Latency.</h3>
                <p className="mt-1 font-fj-body text-[0.8125rem] text-fj-neutral-600 leading-relaxed">
                  Total conversational turnaround time. It delivers over Twilio SIP telephony with zero awkward pauses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator Section */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <AiAgentRoiCalculator defaultWorkflow="support" source="ai_voice_agent_page" />
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// capabilities.'}</p>
            <h2 style={{ marginTop: '10px' }}>What our AI voice agents handle.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Built for high-volume enterprise phone operations. Every phone call is transcribed, verified against CRM records, and logged with full attribution.
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
            <h2 style={{ marginTop: '10px' }}>The sub-500ms streaming telephony pipeline.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Our voice agents run as full-duplex audio pipelines. They deploy on dedicated WebSockets in your private cloud. This ensures complete data residency and sub-500ms turnaround.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>1. Full-Duplex Audio Streaming &amp; SIP.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Streams bidirectional audio via Twilio Media Streams or SIP. Audio processes in memory with zero disk buffering for low latency and data privacy.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>2. Fast Streaming Speech-to-Text (STT).</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Transcribes caller speech in 120ms. It uses acoustic models with phonetic correction for names and addresses.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>3. Real-Time Tool Calling &amp; Reasoning.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Executes sub-second API lookups into Google Calendar, HubSpot, or Shopify while maintaining conversational filler cues (&quot;Let me check that tracking number for you right now...&quot;) to eliminate dead air.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>4. Neural Text-to-Speech (TTS) Synthesis.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Synthesizes studio-quality speech with natural breathing. It streams PCM audio back to callers in under 120ms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Telephony Protocols & Infrastructure */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// telephony protocols.'}</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise telephony protocols &amp; infrastructure integration.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              We connect conversational voice agents into your existing business phone systems with zero rip-and-replace:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Twilio Media Streams &amp; SIP.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Bidirectional audio streaming over WebSockets via Twilio Voice or SIP. Connects to Asterisk, FreePBX, and Cisco PBX systems.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Warm Call Transfer (SIP REFER).</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Executes instant warm transfers to human agents. Plays automated hold greetings and shares pre-transfer call notes.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Secure DTMF Keypad Tones.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Captures credit card details via touch-tone keypad entry. Meets PCI-DSS standards by keeping financial data out of transcripts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Acoustic Physics & Noise Suppression */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// acoustic engineering.'}</p>
            <h2 style={{ marginTop: '10px' }}>Acoustic noise suppression &amp; real-time phonetic correction.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Real phone calls take place in moving vehicles, noisy job sites, and crowded streets. Here is how our speech layer handles difficult audio conditions:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Dynamic Noise Filtering.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Speech isolation models filter out traffic, HVAC hum, and background chatter before speech enters the decoder.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Phonetic Beam-Search.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Uses specialized phonetic dictionaries. Accurately transcribes industry part numbers, medical terms, and street addresses.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Acoustic Echo Cancellation.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Cancels speaker echo so the agent never transcribes its own voice. Enables sub-80ms conversational interruptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Telephony Edge-Case Handling Scenarios */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// edge-case engineering.'}</p>
            <h2 style={{ marginTop: '10px' }}>4 complex telephone edge cases handled autonomously.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Spoken conversation contains infinite nuance. Here is how our telephony models navigate difficult conversational edge cases:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>SCENARIO 01 // PHONETIC SPELLING.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Alphanumeric Codes &amp; Email Dictation.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  When callers dictate email addresses or tracking numbers, the agent confirms each character using standard phonetic alphabet equivalents (e.g. &ldquo;M as in Mary, 4, 9, K as in King&rdquo;) to prevent transcription errors.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>SCENARIO 02 // DIALECT &amp; ACCENT ADAPTATION.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Regional US &amp; Spanish Accents.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Acoustic models adapt vocabulary weights dynamically. They handle Southern drawls and Spanish dialects without errors.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>SCENARIO 03 // AMBIGUOUS CALLER REQUESTS.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Clarification Prompting &amp; Slot Disambiguation.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  When a caller asks an open-ended question (&ldquo;I need someone to look at my unit&rdquo;), the agent asks targeted follow-ups to determine whether the issue is commercial or residential before booking estimator calendars.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>SCENARIO 04 // CALLER SENTIMENT SPIKES.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Instant Warm Supervisor Handoff.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Acoustic models detect shouting or agitation. The agent halts automated replies and initiates a warm transfer to a supervisor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Negative Space: When NOT to build an AI voice agent */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// negative space & honest guidance.'}</p>
            <h2 style={{ marginTop: '10px' }}>When you should NOT build an AI voice agent.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Telephony automation requires specific operational conditions to deliver high return on investment. We believe in providing candid technical guidance so you avoid unviable software investments:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Call Volume &lt; 100 Calls / Month.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  If you receive few calls a week, standard forwarding is sufficient. Invest in voice automation only when call volume causes missed revenue.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Looking for Robocall Outbound Blast.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  We do not build telemarketing robocall dialers. We engineer compliant inbound answering and warm lead qualification systems.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Complex Psychiatric / Medical Advice.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  AI voice agents must never provide medical diagnosis or psychiatric counseling. We restrict healthcare telephony to scheduling and logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Use-Cases */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// industry workflows.'}</p>
            <h2 style={{ marginTop: '10px' }}>Engineered for your specific phone operations.</h2>
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
            <h2 style={{ marginTop: '10px' }}>How our voice agents handle acoustic &amp; telephony failure.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '70ch' }}>
              Real-time telephone conversations require rapid fault recovery. Here is how our architecture prevents call breakdowns:
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

        {/* Inbound Call Routing Modes */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// routing modes.'}</p>
            <h2 style={{ marginTop: '10px' }}>4 flexible telephony routing modes for your phone numbers.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Deploy the voice agent to fit your existing team schedule and telephony infrastructure:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ROUTING MODE 01 // DIRECT PRIMARY LINE.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>100% Autonomous Primary Answering.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  The agent answers all inbound calls on the first ring. It handles routine inquiries and schedules appointments. It transfers complex issues to staff.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ROUTING MODE 02 // OVERFLOW PROTECTION.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Rollover &amp; Peak Hour Queue Overflow.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Human staff answer calls first. If lines are busy, calls roll over to the AI agent. This eliminates dropped calls during peak hours.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ROUTING MODE 03 // AFTER-HOURS COVERAGE.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>24/7 Nights &amp; Weekend Coverage.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Activates outside normal business hours. Captures emergency service requests, qualifies leads, and schedules consultations.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>ROUTING MODE 04 // DEPARTMENT ROUTING.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Conversational Department Triage.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Replaces traditional keypad IVRs with a friendly greeting. Runs conversational triage and transfers calls to department queues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Core Telephony Topologies */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// production telephony topologies.'}</p>
            <h2 style={{ marginTop: '10px' }}>4 production telephony workflows our voice agents execute.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              From emergency after-hours dispatch to bilingual patient intake, here is how our telephony architecture operates in live production:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 01 // 24/7 EMERGENCY INTAKE.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Commercial Contracting &amp; After-Hours Dispatch.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  When HVAC emergencies occur at night, the agent answers on the second ring. It records addresses and gate codes. It alerts on-call technicians via SMS.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 02 // HEALTHCARE INTAKE.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Bilingual Patient Scheduling &amp; Clinic Routing.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Detects English or Spanish in real time. Screens patient symptoms against protocols. Checks doctor calendars and confirms appointment slots via SMS.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 03 // INBOUND SALES TRIAGE.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>High-Velocity Sales Phone Qualification.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Answers inbound sales calls within seconds. Queries caller phone numbers in CRM records. Qualifies project budget and transfers calls to sales closers.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-orange-600" style={{ fontSize: '12px' }}>TOPOLOGY 04 // APPOINTMENT RESCHEDULING.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.1rem' }}>Automated Service Appointment Rebooking.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Customers call in and identify vehicles by phone number. The agent checks service bay openings and reschedules visits automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pp-sec">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// comparison.'}</p>
            <h2 style={{ marginTop: '10px' }}>FactoryJet AI voice agent vs. traditional phone systems.</h2>
            <div style={{ marginTop: '28px', overflowX: 'auto' }}>
              <table className="pp-table" style={{ width: '100%', minWidth: '640px' }}>
                <thead>
                  <tr>
                    <th>Capability.</th>
                    <th className="me">FactoryJet Custom Voice Agent.</th>
                    <th>Legacy IVR Phone Tree (&quot;Press 1&quot;).</th>
                    <th>Third-Party Answering Service (BPO).</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="me">
                    <td><strong>Cost Model.</strong></td>
                    <td><strong>Fixed build + direct Twilio/model costs.</strong></td>
                    <td>Expensive monthly telecom licensing.</td>
                    <td>$1.50-$3.00 per minute human answering fee.</td>
                  </tr>
                  <tr>
                    <td><strong>Spoken Conversation Flow.</strong></td>
                    <td>Natural, full-duplex conversational reasoning.</td>
                    <td>Rigid keypad menu numbers only.</td>
                    <td>Basic human script reading.</td>
                  </tr>
                  <tr>
                    <td><strong>Direct Calendar &amp; CRM Sync.</strong></td>
                    <td>Yes. Books slots and logs transcripts live.</td>
                    <td>No. Cannot query external databases.</td>
                    <td>Manual message taking with delayed email.</td>
                  </tr>
                  <tr>
                    <td><strong>Response Latency &amp; Hold Time.</strong></td>
                    <td>Zero hold time; &lt; 500ms voice latency.</td>
                    <td>Multi-minute menu navigation.</td>
                    <td>Frequent hold times during peak call hours.</td>
                  </tr>
                  <tr>
                    <td><strong>Bilingual English / Spanish.</strong></td>
                    <td>Yes. Auto-detects language in first phrase.</td>
                    <td>Requires separate Spanish menu option.</td>
                    <td>Requires bilingual staff scheduling.</td>
                  </tr>
                  <tr>
                    <td><strong>Code &amp; Telephony Ownership.</strong></td>
                    <td>Yes. You own 100% of the codebase.</td>
                    <td>Locked in proprietary PBX hardware.</td>
                    <td>Zero automation asset ownership.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TCPA Compliance & Regulatory Guardrails */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// federal compliance.'}</p>
            <h2 style={{ marginTop: '10px' }}>TCPA &amp; FCC regulatory guardrails for US phone operations.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              US telephony automation is governed by strict federal statutes under FCC 47 CFR § 64.1200 and TCPA laws. We engineer compliance into the core runtime:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Timezone Calling Windows.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Prevents callbacks outside local calling hours from 8am to 9pm. Calculates recipient timezone from area codes and ZIP records.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Instant Do-Not-Call (DNC) Sync.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  When a caller states &quot;stop calling&quot; or &quot;remove my number,&quot; the agent parses the opt-out intent, confirms verbal acknowledgment, and writes an immediate suppression block across all CRM lists.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <h3 className="font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Mandatory Entity Disclosure.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Calls initiate with a compliant greeting. The agent states company name, call purpose, and AI assistant disclosure per federal rules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selection Checklist: How to Choose a Partner */}
        <section className="pp-sec tint">
          <div className="pp-wrap">
            <p className="pp-mlabel">{'// buyer checklist.'}</p>
            <h2 style={{ marginTop: '10px' }}>How to evaluate an AI voice agent development partner.</h2>
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
            <h2 style={{ marginTop: '10px' }}>From phone script to live routing in 4 weeks.</h2>
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
            <p className="pp-mlabel">'Enterprise security &amp; telephony governance.'</p>
            <h2 style={{ marginTop: '10px' }}>Enterprise security, guardrails, and telephony compliance architecture.</h2>
            <p className="pp-lead" style={{ marginTop: '12px', maxWidth: '72ch' }}>
              Telephony automation requires stringent operational controls, audio encryption, and regulatory guardrails. We enforce SOC 2, HIPAA, and GDPR standards across all deployed voice systems.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>SECURITY: SOC 2 &amp; HIPAA.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Telephony Audio Encryption.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Audio streams and call transcripts are encrypted at rest and in transit. Strict compliance with SOC 2, HIPAA, GDPR, and TCPA federal guidelines.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>INTEGRATION: CRM &amp; ERP SYNC.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Live CRM &amp; ERP Sync.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Bidirectional REST APIs and authenticated webhooks sync caller notes, appointment slots, and transcripts to HubSpot, Salesforce, and NetSuite.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>ACCESS: RBAC &amp; SSO.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Role-Based Access Control.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Role-based access control (RBAC) and single sign-on (SSO) via SAML secure prompt engineering, voice models, and telephony configuration.
                </p>
              </div>
              <div className="pp-card" style={{ backgroundColor: '#FFFFFF', padding: '24px' }}>
                <span className="font-fj-mono font-bold text-[#B23E13]" style={{ fontSize: '13px' }}>ORCHESTRATION: RAG.</span>
                <h3 className="mt-2 font-fj-body font-bold text-fj-ink" style={{ fontSize: '1.05rem' }}>Deterministic Tool Execution.</h3>
                <p className="mt-2 font-fj-body text-[0.875rem] leading-relaxed text-fj-neutral-600">
                  Retrieval augmented generation (RAG) with vector search, embeddings, function calling, tool use, and human in the loop warm transfers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS."
          headline="Questions phone operations leaders ask before deploying voice AI."
          lead="Everything you need to know about audio latency, telephony integration, and TCPA compliance."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* Final CTA */}
        <FinalCTA
          eyebrow="READY TO UPGRADE YOUR PHONE OPERATIONS?"
          headline="Scope your custom AI voice agent today."
          sub="Book a discovery call with our telephony team. We map your inbound call flows and review your phone system. You receive a fixed-price blueprint."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View All AI Agent Capabilities', href: '/services/ai-agent-development' }}
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
