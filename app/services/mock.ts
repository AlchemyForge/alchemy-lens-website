// ─── Mock data ──────────────────────────────────────────────────────────────
// Active when VITE_HUBSPOT_ACCESS_TOKEN is not set.

import type { BlogPost } from "~/types"

export const MOCK_POST_BODIES: Record<string, string> = {
  'understanding-ai-in-construction': `
    <p>Construction projects generate enormous volumes of data — schedules, site notes, supplier ETAs, consent tracking — yet most of it sits unused in spreadsheets and inboxes. AI changes that equation.</p>
    <h2>Why traditional project management falls short</h2>
    <p>The traditional approach relies on weekly reports and reactive problem-solving. By the time a delay is visible in a Gantt chart, it's already too late to course-correct without pain. Site managers are left firefighting rather than leading.</p>
    <p>AI-powered platforms can ingest signals from every corner of a project in near real time, identifying patterns that precede overruns <strong>weeks before</strong> they materialise in your schedule.</p>
    <h2>What early risk detection looks like in practice</h2>
    <p>Imagine knowing three weeks in advance that a key supplier is likely to miss their delivery window — not because they told you, but because their response latency on RFIs has been climbing steadily. That's the kind of explainable, actionable signal modern AI can surface.</p>
    <blockquote><p>"We went from reacting to delays to preventing them. That shift alone has changed how our site teams operate." — Project Director, Tier 2 contractor</p></blockquote>
    <h2>The path forward</h2>
    <p>Adopting AI in construction isn't about replacing experienced project managers — it's about giving them a force multiplier. The best outcomes come when domain expertise meets machine-speed pattern recognition.</p>
  `,
  'five-signals-that-predict-project-overruns': `
    <p>After analysing hundreds of commercial construction projects, five early warning signals consistently precede cost and schedule overruns. Here's what to watch.</p>
    <h2>1. RFI response latency creep</h2>
    <p>When average RFI response times start drifting upward — even subtly — it often signals resourcing pressure or coordination breakdowns on the other side of the chain.</p>
    <h2>2. Consent and approval clustering near milestones</h2>
    <p>Approvals that should have been lodged weeks earlier often arrive in clusters just before critical gates. This bunching is a reliable predictor of downstream schedule compression.</p>
    <h2>3. Subcontractor programme slippage under 5%</h2>
    <p>Small, consistent slippage — the kind that falls under typical reporting thresholds — compounds. A subcontractor running 3–4% behind week after week is on a trajectory, not a glitch.</p>
    <h2>4. Unusual variation in site diary sentiment</h2>
    <p>Natural language patterns in daily site diaries change before formal issues are raised. More hedging language, fewer definitive completions, and more "pending" qualifiers are worth tracking.</p>
    <h2>5. Procurement lead time uncertainty widening</h2>
    <p>When supplier-quoted lead times shift from a single number to a range, that uncertainty carries real schedule risk. The wider the range, the more buffer you need.</p>
  `,
  'xero-integration-for-construction': `
    <p>Financial visibility in construction has historically lagged behind site reality. Integrating your project platform with Xero closes that gap and gives finance teams the same real-time picture as site.</p>
    <h2>The problem with end-of-month reconciliation</h2>
    <p>When cost data only lands in the accounting system at month-end, project managers are making budget decisions with three-week-old information. In a fast-moving project environment, that's a critical blind spot.</p>
    <h2>What a live Xero integration enables</h2>
    <ul>
      <li>Committed cost visibility as invoices are approved, not after they're posted</li>
      <li>Forecast-to-actual reconciliation at trade package level</li>
      <li>Automated variance alerts when spend trajectory diverges from programme</li>
    </ul>
    <h2>Implementation considerations</h2>
    <p>The key to a successful integration is establishing clean cost code mapping between your project platform and your Xero chart of accounts upfront. Retrofitting this after go-live is painful.</p>
  `,
}

export const MOCK_POSTS: BlogPost[] = [
  {
    id: 'mock-1',
    slug: 'understanding-ai-in-construction',
    title: 'Understanding AI in Construction: From Hype to Practical Outcomes',
    subtitle: 'AI isn\'t a silver bullet — but applied correctly, it changes how project teams see risk. Here\'s what the evidence shows.',
    metaDescription: 'A practical look at how AI-powered platforms are changing risk detection in construction project management.',
    publishDate: '2026-04-01T09:00:00Z',
    author: { name: 'Daniel Carter', bio: 'Co-founder, Alchemy Forge', avatar: undefined },
    tagIds: ['tag-1', 'tag-2'],
    tagNames: ['AI', 'Project Management'],
    featuredImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    featuredImageAlt: 'Construction site aerial view',
    htmlBody: MOCK_POST_BODIES['understanding-ai-in-construction'],
  },
  {
    id: 'mock-2',
    slug: 'five-signals-that-predict-project-overruns',
    title: 'Five Signals That Predict Project Overruns — Weeks Before They Happen',
    subtitle: 'Based on analysis of hundreds of commercial projects, these are the leading indicators that matter most.',
    metaDescription: 'The five early warning signals that consistently precede construction project cost and schedule overruns.',
    publishDate: '2026-03-18T09:00:00Z',
    author: { name: 'Josh Williams', bio: 'Head of Product, Alchemy Forge', avatar: undefined },
    tagIds: ['tag-1', 'tag-3'],
    tagNames: ['Risk', 'Data'],
    featuredImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    featuredImageAlt: 'Construction project schedule on screen',
    htmlBody: MOCK_POST_BODIES['five-signals-that-predict-project-overruns'],
  },
  {
    id: 'mock-3',
    slug: 'xero-integration-for-construction',
    title: 'Real-Time Financial Visibility: Integrating Xero With Your Project Platform',
    subtitle: 'End-of-month reconciliation is a relic. Here\'s what live cost data looks like for construction teams.',
    metaDescription: 'How integrating Xero with your construction project platform eliminates the lag between site reality and financial reporting.',
    publishDate: '2026-03-05T09:00:00Z',
    author: { name: 'Michael O\'Brien', bio: 'CTO, Alchemy Forge', avatar: undefined },
    tagIds: ['tag-4'],
    tagNames: ['Finance'],
    featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80',
    featuredImageAlt: 'Financial dashboard on a laptop',
    htmlBody: MOCK_POST_BODIES['xero-integration-for-construction'],
  },
  {
    id: 'mock-4',
    slug: 'building-a-data-culture-in-construction',
    title: 'Building a Data Culture in Construction: Why It Starts on Site',
    subtitle: 'Technology adoption fails when it\'s imposed top-down. The teams getting the best results are bringing site managers along from day one.',
    metaDescription: 'How construction companies are building a data-first culture that starts on site, not in the boardroom.',
    publishDate: '2026-02-20T09:00:00Z',
    author: { name: 'Daniel Carter', bio: 'Co-founder, Alchemy Forge', avatar: undefined },
    tagIds: ['tag-5'],
    tagNames: ['Culture', 'Change Management'],
    featuredImage: undefined,
    featuredImageAlt: undefined,
    htmlBody: '<p>A placeholder article about building data culture in construction teams.</p>',
  },
  {
    id: 'mock-5',
    slug: 'consent-management-at-scale',
    title: 'Consent Management at Scale: Lessons From Major Infrastructure Projects',
    subtitle: 'When a project has hundreds of open consent items across multiple authorities, the tracking problem becomes a risk problem.',
    metaDescription: 'Practical lessons on managing construction consents at scale from major infrastructure project teams.',
    publishDate: '2026-02-05T09:00:00Z',
    author: { name: 'Josh Williams', bio: 'Head of Product, Alchemy Forge', avatar: undefined },
    tagIds: ['tag-6'],
    tagNames: ['Compliance'],
    featuredImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    featuredImageAlt: 'City infrastructure at dusk',
    htmlBody: '<p>A placeholder article about consent management at scale.</p>',
  },
]
