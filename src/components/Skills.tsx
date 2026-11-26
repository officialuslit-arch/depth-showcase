import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  CornerDownRight,
  Grid,
  Layers,
  Terminal,
} from 'lucide-react';

type SkillTier = 'primary' | 'secondary' | 'signature';
type ViewMode = 'matrix' | 'topology' | 'manifest';
type SkillState = 'active' | 'related' | 'dimmed' | 'default';

interface SkillItem {
  name: string;
  tag: string;
  tier: SkillTier;
  color: string;
  context: string;
  usedIn: string;
  related: string[];
}

interface SkillCategory {
  id: string;
  index: string;
  code: string;
  title: string;
  subtitle: string;
  span: string;
  featured?: boolean;
  skills: SkillItem[];
}

type IndexedSkill = SkillItem & {
  categoryTitle: string;
  categoryCode: string;
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frameworks',
    index: '01',
    code: 'SYS.CORE_STACK',
    title: 'Frameworks & Libraries',
    subtitle: 'Production full-stack runtime, real-time event pipelines & component architecture',
    span: 'lg:col-span-7',
    featured: true,
    skills: [
      {
        name: 'React.js',
        tag: 'UI Runtime',
        tier: 'primary',
        color: '#38bdf8',
        context: 'Component architecture, custom hooks, state synchronization & concurrent rendering.',
        usedIn: 'Client SPA & Dashboards',
        related: ['TypeScript', 'JavaScript', 'TailwindCSS', 'Socket.io', 'Vercel'],
      },
      {
        name: 'Node.js',
        tag: 'Server Runtime',
        tier: 'primary',
        color: '#4ade80',
        context: 'Asynchronous event-driven microservices, stream processing & high-concurrency APIs.',
        usedIn: 'Backend Core',
        related: ['Express.js', 'JavaScript', 'TypeScript', 'Socket.io', 'Docker', 'Mongoose'],
      },
      {
        name: 'Express.js',
        tag: 'API Layer',
        tier: 'primary',
        color: '#e4e4e7',
        context: 'RESTful routing, custom auth middleware, rate-limiting & structured error pipelines.',
        usedIn: 'HTTP Gateways',
        related: ['Node.js', 'Mongoose', 'PostgreSQL', 'Postman', 'MongoDB'],
      },
      {
        name: 'Socket.io',
        tag: 'Bidirectional',
        tier: 'primary',
        color: '#f59e0b',
        context: 'Low-latency WebSockets, room-based pub/sub broadcasting & live state sync.',
        usedIn: 'Real-Time Engines',
        related: ['Node.js', 'React.js', 'Express.js'],
      },
      {
        name: 'Mongoose',
        tag: 'ODM Modeling',
        tier: 'secondary',
        color: '#ef4444',
        context: 'Strict schema validation, aggregation pipelines, middleware hooks & indexing.',
        usedIn: 'Document Layer',
        related: ['MongoDB', 'Node.js', 'Express.js'],
      },
      {
        name: 'TailwindCSS',
        tag: 'Design Tokens',
        tier: 'secondary',
        color: '#2dd4bf',
        context: 'Utility-first design systems, responsive grid architecture & dark-mode tokens.',
        usedIn: 'Interface Styling',
        related: ['React.js', 'HTML', 'CSS'],
      },
    ],
  },
  {
    id: 'languages',
    index: '02',
    code: 'SYS.ALGORITHMS',
    title: 'Programming Languages & DSA',
    subtitle: 'Low-level memory model awareness, algorithmic complexity & multi-paradigm foundations',
    span: 'lg:col-span-5',
    featured: true,
    skills: [
      {
        name: 'C++',
        tag: 'Systems / STL',
        tier: 'primary',
        color: '#60a5fa',
        context: 'Pointers, STL containers, memory management & competitive algorithmic problem solving.',
        usedIn: 'Core Algorithms',
        related: ['Data Structures and Algorithms', 'Problem Solving'],
      },
      {
        name: 'Java',
        tag: 'OOP / JVM',
        tier: 'primary',
        color: '#fb923c',
        context: 'Object-oriented design patterns, multithreading, collections framework & strict typing.',
        usedIn: 'Enterprise OOP',
        related: ['Data Structures and Algorithms', 'MySQL'],
      },
      {
        name: 'Python',
        tag: 'Scripting / Backend',
        tier: 'primary',
        color: '#facc15',
        context: 'Rapid prototyping, automation scripts, data manipulation & clean algorithmic logic.',
        usedIn: 'Automation & Logic',
        related: ['Data Structures and Algorithms', 'PostgreSQL', 'Docker'],
      },
      {
        name: 'Data Structures and Algorithms',
        tag: 'Time / Space O(n)',
        tier: 'signature',
        color: '#ff5500',
        context: 'Graphs, dynamic programming, trees, heaps & asymptotic complexity optimization.',
        usedIn: 'System Optimization',
        related: ['C++', 'Java', 'Python', 'Problem Solving'],
      },
    ],
  },
  {
    id: 'web',
    index: '03',
    code: 'WEB.STANDARDS',
    title: 'Web Technologies',
    subtitle: 'Type-safe client foundations & modern browser specifications',
    span: 'lg:col-span-4',
    skills: [
      {
        name: 'TypeScript',
        tag: 'Static Types',
        tier: 'primary',
        color: '#3b82f6',
        context: 'Strict generics, shared API contracts & compile-time safety across client/server.',
        usedIn: 'Full-Stack Contracts',
        related: ['JavaScript', 'React.js', 'Node.js'],
      },
      {
        name: 'JavaScript',
        tag: 'ES2024+',
        tier: 'primary',
        color: '#eab308',
        context: 'Closures, event loop mechanics, Promises/async-await & DOM APIs.',
        usedIn: 'Core Web Runtime',
        related: ['TypeScript', 'React.js', 'Node.js', 'HTML', 'CSS'],
      },
      {
        name: 'HTML',
        tag: 'Semantic DOM',
        tier: 'secondary',
        color: '#f97316',
        context: 'Accessible ARIA landmarks, SEO-first document structure & web standards.',
        usedIn: 'Document Markup',
        related: ['CSS', 'JavaScript', 'React.js'],
      },
      {
        name: 'CSS',
        tag: 'Layout Engine',
        tier: 'secondary',
        color: '#06b6d4',
        context: 'CSS Grid, Flexbox, custom properties, keyframe animations & fluid typography.',
        usedIn: 'Visual Architecture',
        related: ['HTML', 'TailwindCSS', 'React.js'],
      },
    ],
  },
  {
    id: 'databases',
    index: '04',
    code: 'DATA.PERSISTENCE',
    title: 'Databases',
    subtitle: 'Relational ACID compliance & distributed NoSQL document stores',
    span: 'lg:col-span-4',
    skills: [
      {
        name: 'PostgreSQL',
        tag: 'Relational / ACID',
        tier: 'primary',
        color: '#60a5fa',
        context: 'Complex joins, indexing strategies, transactional integrity & JSONB querying.',
        usedIn: 'Primary Relational Store',
        related: ['Node.js', 'Express.js', 'Docker'],
      },
      {
        name: 'MongoDB',
        tag: 'Document NoSQL',
        tier: 'primary',
        color: '#22c55e',
        context: 'Flexible document schemas, compound indexes & high-write throughput collections.',
        usedIn: 'Document Store',
        related: ['Mongoose', 'Node.js', 'Express.js'],
      },
      {
        name: 'MySQL',
        tag: 'Relational SQL',
        tier: 'secondary',
        color: '#38bdf8',
        context: 'Normalized relational schema design, stored procedures & query optimization.',
        usedIn: 'Structured Data',
        related: ['Java', 'Node.js'],
      },
    ],
  },
  {
    id: 'tools',
    index: '05',
    code: 'INFRA.DEVOPS',
    title: 'Tools & Cloud Infra',
    subtitle: 'Containerization, orchestration & zero-downtime deployment pipelines',
    span: 'lg:col-span-4',
    skills: [
      {
        name: 'Docker',
        tag: 'Containers',
        tier: 'primary',
        color: '#38bdf8',
        context: 'Multi-stage Dockerfiles, isolated dev environments & reproducible builds.',
        usedIn: 'Containerization',
        related: ['Kubernetes', 'Node.js', 'PostgreSQL', 'Render'],
      },
      {
        name: 'Kubernetes',
        tag: 'Orchestration',
        tier: 'primary',
        color: '#818cf8',
        context: 'Pod scheduling, service discovery, horizontal scaling & declarative manifests.',
        usedIn: 'Cluster Scaling',
        related: ['Docker', 'Node.js'],
      },
      {
        name: 'Postman',
        tag: 'API Testing',
        tier: 'secondary',
        color: '#fb923c',
        context: 'Automated API collections, environment variables & payload contract testing.',
        usedIn: 'Endpoint QA',
        related: ['Express.js', 'Node.js'],
      },
      {
        name: 'Vercel',
        tag: 'Edge Cloud',
        tier: 'secondary',
        color: '#f4f4f5',
        context: 'CI/CD preview deployments, edge caching & serverless frontend hosting.',
        usedIn: 'Frontend CD',
        related: ['React.js', 'GitHub', 'Git'],
      },
      {
        name: 'Render',
        tag: 'Cloud PaaS',
        tier: 'secondary',
        color: '#34d399',
        context: 'Managed web services, persistent background workers & auto-deploys from Git.',
        usedIn: 'Backend Hosting',
        related: ['Node.js', 'Docker', 'PostgreSQL', 'GitHub'],
      },
    ],
  },
  {
    id: 'vcs',
    index: '06',
    code: 'VCS.WORKFLOW',
    title: 'Version Control',
    subtitle: 'Distributed source control & collaborative code review hygiene',
    span: 'lg:col-span-5',
    skills: [
      {
        name: 'Git',
        tag: 'Source Control',
        tier: 'primary',
        color: '#f97316',
        context: 'Interactive rebasing, cherry-picking, clean atomic commits & branch strategies.',
        usedIn: 'Code History',
        related: ['GitHub', 'Collaboration'],
      },
      {
        name: 'GitHub',
        tag: 'Collaboration / CI',
        tier: 'primary',
        color: '#e4e4e7',
        context: 'Pull request reviews, GitHub Actions workflows, issue tracking & release tags.',
        usedIn: 'Team Workflow',
        related: ['Git', 'Vercel', 'Render', 'Collaboration'],
      },
    ],
  },
  {
    id: 'soft',
    index: '07',
    code: 'HUM.PRACTICE',
    title: 'Engineering Practice & Soft Skills',
    subtitle: 'How I collaborate with product teams, debug under pressure & ship reliable software',
    span: 'lg:col-span-7',
    skills: [
      {
        name: 'Problem Solving',
        tag: 'First Principles',
        tier: 'primary',
        color: '#ff5500',
        context: 'Breaking down ambiguous product bottlenecks into deterministic, testable engineering tasks.',
        usedIn: 'Architecture & Debugging',
        related: ['Data Structures and Algorithms', 'C++', 'Java', 'Python'],
      },
      {
        name: 'Communication',
        tag: 'Technical Clarity',
        tier: 'primary',
        color: '#a855f7',
        context: 'Writing crisp RFCs, documenting API contracts & translating trade-offs for stakeholders.',
        usedIn: 'Specs & Docs',
        related: ['Collaboration', 'GitHub'],
      },
      {
        name: 'Collaboration',
        tag: 'Cross-Functional',
        tier: 'primary',
        color: '#10b981',
        context: 'Constructive PR reviews, pair programming & async ownership across agile sprints.',
        usedIn: 'Team Delivery',
        related: ['Git', 'GitHub', 'Communication'],
      },
    ],
  },
];

const ARCHITECTURE_LAYERS = [
  {
    layer: 'L1 // CLIENT & PRESENTATION',
    desc: 'Component tree, static type safety & responsive styling tokens',
    items: ['React.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'HTML', 'CSS'],
  },
  {
    layer: 'L2 // API GATEWAY & REAL-TIME TRANSPORT',
    desc: 'REST controllers, bidirectional WebSocket channels & endpoint verification',
    items: ['Node.js', 'Express.js', 'Socket.io', 'Postman'],
  },
  {
    layer: 'L3 // DATA PERSISTENCE & ODM',
    desc: 'ACID relational tables, document schemas & indexing pipelines',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Mongoose'],
  },
  {
    layer: 'L4 // CORE ALGORITHMS & SYSTEMS',
    desc: 'High-efficiency data structures, OOP patterns & low-level execution',
    items: ['Data Structures and Algorithms', 'C++', 'Java', 'Python'],
  },
  {
    layer: 'L5 // INFRASTRUCTURE, VCS & DELIVERY',
    desc: 'Containers, cluster orchestration, source control & team execution',
    items: ['Docker', 'Kubernetes', 'Vercel', 'Render', 'Git', 'GitHub', 'Problem Solving', 'Communication', 'Collaboration'],
  },
];

const ALL_SKILLS_MAP: Record<string, IndexedSkill> = {};
SKILL_CATEGORIES.forEach((cat) => {
  cat.skills.forEach((skill) => {
    ALL_SKILLS_MAP[skill.name] = {
      ...skill,
      categoryTitle: cat.title,
      categoryCode: cat.code,
    };
  });
});

const Crosshair = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 11 11"
    fill="none"
    aria-hidden="true"
    className={`pointer-events-none h-2.5 w-2.5 select-none text-zinc-600 ${className}`}
  >
    <path d="M5.5 0V11M0 5.5H11" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export const Skills = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('matrix');
  const [activeSkill, setActiveSkill] = useState('React.js');
  const [lockedSkill, setLockedSkill] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentSkillName = lockedSkill || activeSkill;
  const currentSkillObj = ALL_SKILLS_MAP[currentSkillName] || ALL_SKILLS_MAP['React.js'];

  const handleSkillClick = (name: string) => {
    if (lockedSkill === name) {
      setLockedSkill(null);
    } else {
      setLockedSkill(name);
      setActiveSkill(name);
    }
  };

  const getSkillState = (skillName: string): SkillState => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const skill = ALL_SKILLS_MAP[skillName];
      const matches =
        skillName.toLowerCase().includes(q) ||
        skill?.tag.toLowerCase().includes(q) ||
        skill?.context.toLowerCase().includes(q);
      return matches ? 'active' : 'dimmed';
    }

    if (!currentSkillName) return 'default';
    if (skillName === currentSkillName) return 'active';
    if (currentSkillObj?.related?.includes(skillName)) return 'related';
    return 'default';
  };

  const totalSkillsCount = useMemo(
    () => SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0),
    [],
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-zinc-800/90 bg-[#09090b] text-[#f4f4f5] selection:bg-[#ff5500] selection:text-black"
    >
      {/* Subtle architectural dot matrix scoped to skills section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: 'radial-gradient(#52525b 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        {/* SECTION HEADER: Editorial Asymmetric Split */}
        <div className="grid grid-cols-1 items-end gap-8 border-b border-zinc-800/90 pb-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-400">
              <span className="text-primary">04 /</span>
              <span className="text-primary">TECHNICAL SPECIFICATION</span>
              <span className="text-zinc-700">—</span>
              <span className="text-zinc-500"></span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-zinc-100 sm:text-5xl">
              Skills &amp; Engineering{' '}
              <span className="font-display font-normal italic text-zinc-400">Architecture.</span>
            </h2>

            <p className="max-w-2xl text-base font-normal leading-relaxed text-zinc-400 sm:text-lg">
              Technologies, low-level foundations, and production tooling I use to design, build, and scale end-to-end full-stack systems.
            </p>
          </div>

          {/* Right Column: View Mode Switcher & Filter */}
          <div className="flex flex-col items-stretch justify-end gap-3 sm:flex-row sm:items-end lg:col-span-5 lg:flex-col">
            <div className="inline-flex self-start border border-zinc-800 bg-zinc-900/90 p-1 sm:self-end" role="tablist" aria-label="Skills display view">
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'matrix'}
                onClick={() => setViewMode('matrix')}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs transition-all ${viewMode === 'matrix'
                  ? 'bg-zinc-100 font-medium text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
                  }`}
              >
                <Grid className="h-3.5 w-3.5" aria-hidden="true" />
                <span>01. Matrix</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'topology'}
                onClick={() => setViewMode('topology')}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs transition-all ${viewMode === 'topology'
                  ? 'bg-zinc-100 font-medium text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
                  }`}
              >
                <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                <span>02. Stack Flow</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={viewMode === 'manifest'}
                onClick={() => setViewMode('manifest')}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs transition-all ${viewMode === 'manifest'
                  ? 'bg-zinc-100 font-medium text-zinc-950 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
                  }`}
              >
                <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                <span>03. spec.json</span>
              </button>
            </div>

            <div className="relative w-full self-start sm:w-64 sm:self-end lg:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setSearchQuery('');
                }}
                aria-label="Filter stack"
                placeholder="Filter stack (e.g. Socket, SQL, C++)..."
                className="w-full border border-zinc-800 bg-zinc-900/60 px-3 py-2 font-mono text-xs text-zinc-200 outline-none transition-colors placeholder:text-zinc-600 focus:border-zinc-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-[10px] text-zinc-400 hover:text-white"
                >
                  ESC
                </button>
              )}
            </div>
          </div>
        </div>

        {/* LIVE TELEMETRY / INSPECTOR BAR */}
        <div className="flex flex-col justify-between gap-4 border-x border-b border-zinc-800/90 bg-[#0c0c0f] px-4 py-3.5 sm:px-6 md:flex-row md:items-center">
          <div className="flex min-w-0 items-start gap-3 sm:items-center">
            <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 border border-[#ff5500]/30 bg-[#ff5500]/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#ff5500] sm:mt-0">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff5500]" />
              {lockedSkill ? 'LOCKED' : 'INSPECTING'}
            </span>

            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2.5 gap-y-1">
              <span className="font-mono text-sm font-semibold text-white">
                {currentSkillObj.name}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                [{currentSkillObj.tag}]
              </span>
              <span className="truncate text-xs text-zinc-400">
                — {currentSkillObj.context}
              </span>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase text-zinc-500">
              Synergy Links:
            </span>
            {currentSkillObj.related?.slice(0, 4).map((rel) => (
              <button
                key={rel}
                type="button"
                onClick={() => handleSkillClick(rel)}
                className="border border-zinc-700/80 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-300 transition-colors hover:border-[#ff5500] hover:text-white"
              >
                {rel}
              </button>
            ))}
            {lockedSkill && (
              <button
                type="button"
                onClick={() => setLockedSkill(null)}
                className="ml-1 font-mono text-[11px] text-zinc-400 underline hover:text-white"
              >
                Unlock
              </button>
            )}
          </div>
        </div>

        {/* VIEW 01: ARCHITECTURAL MATRIX */}
        {viewMode === 'matrix' && (
          <div className="grid grid-cols-1 border-l border-zinc-800/90 lg:grid-cols-12">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className={`${category.span} group relative flex flex-col justify-between border-b border-r border-zinc-800/90 bg-[#09090b] p-6 transition-colors hover:bg-[#0c0c10] sm:p-8`}
              >
                <Crosshair className="absolute -left-[5.5px] -top-[5.5px] z-10" />
                <Crosshair className="absolute -bottom-[5.5px] -right-[5.5px] z-10" />

                <div>
                  <div className="mb-5 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-400">
                        {category.index}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                        {category.code}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-600">
                      {category.skills.length} UNITS
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="mb-1.5 flex items-center gap-2 text-xl font-medium tracking-tight text-zinc-100">
                      {category.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {category.subtitle}
                    </p>
                  </div>

                  {category.featured ? (
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {category.skills.map((skill) => {
                        const state = getSkillState(skill.name);
                        const isSelected = lockedSkill === skill.name;

                        return (
                          <button
                            key={skill.name}
                            type="button"
                            onMouseEnter={() => !lockedSkill && setActiveSkill(skill.name)}
                            onClick={() => handleSkillClick(skill.name)}
                            className={`relative overflow-hidden border p-3.5 text-left transition-all duration-150 ${skill.tier === 'signature' ? 'sm:col-span-2' : ''
                              } ${state === 'active'
                                ? 'border-zinc-400 bg-zinc-900/95 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]'
                                : state === 'related'
                                  ? 'border-[#ff5500]/50 bg-zinc-900/50'
                                  : state === 'dimmed'
                                    ? 'border-zinc-900 bg-zinc-950 opacity-25'
                                    : 'border-zinc-800/90 bg-zinc-950/60 hover:border-zinc-700'
                              }`}
                          >
                            <div className="mb-1.5 flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span
                                  className="h-2 w-2 shrink-0 rounded-full"
                                  style={{ backgroundColor: skill.color }}
                                />
                                <span className="text-sm font-medium tracking-tight text-zinc-100">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                                {skill.tag}
                              </span>
                            </div>

                            <p className="line-clamp-2 text-xs leading-relaxed text-zinc-400">
                              {skill.context}
                            </p>

                            {state === 'related' && (
                              <div className="mt-2 flex items-center gap-1 font-mono text-[10px] text-[#ff5500]">
                                <CornerDownRight className="h-3 w-3" aria-hidden="true" />
                                <span>Paired with {currentSkillName}</span>
                              </div>
                            )}
                            {isSelected && (
                              <div className="mt-2 flex items-center gap-1 font-mono text-[10px] text-zinc-300">
                                <span>● Locked for inspection (click to unlock)</span>
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {category.skills.map((skill) => {
                        const state = getSkillState(skill.name);
                        return (
                          <button
                            key={skill.name}
                            type="button"
                            onMouseEnter={() => !lockedSkill && setActiveSkill(skill.name)}
                            onClick={() => handleSkillClick(skill.name)}
                            className={`flex w-full items-center justify-between gap-3 border px-3.5 py-2.5 text-left transition-all duration-150 ${state === 'active'
                              ? 'border-zinc-400 bg-zinc-900 text-white'
                              : state === 'related'
                                ? 'border-[#ff5500]/50 bg-zinc-900/50 text-zinc-100'
                                : state === 'dimmed'
                                  ? 'border-zinc-900 bg-zinc-950 opacity-25'
                                  : 'border-zinc-800/80 bg-zinc-950/50 text-zinc-300 hover:border-zinc-700'
                              }`}
                          >
                            <div className="flex min-w-0 items-center gap-2.5">
                              <span
                                className="h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: skill.color }}
                              />
                              <span className="truncate text-sm font-medium text-zinc-100">
                                {skill.name}
                              </span>
                              {state === 'related' && (
                                <span className="hidden font-mono text-[10px] text-[#ff5500] sm:inline">
                                  ↔ linked
                                </span>
                              )}
                            </div>

                            <div className="flex shrink-0 items-center gap-2">
                              <span className="font-mono text-[11px] text-zinc-500">
                                {skill.tag}
                              </span>
                              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-zinc-900 pt-3 font-mono text-[11px] text-zinc-600">
                  <span>DOMAIN // {category.id.toUpperCase()}</span>
                  <span className="transition-colors group-hover:text-zinc-400">
                    HOVER OR CLICK TO TRACE
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 02: STACK TOPOLOGY */}
        {viewMode === 'topology' && (
          <div className="space-y-6 border-x border-b border-zinc-800/90 bg-[#09090b] p-6 sm:p-10">
            <div className="max-w-2xl">
              <div className="mb-1 font-mono text-xs uppercase text-[#ff5500]">
                // SYSTEM DATA FLOW &amp; LAYER TOPOLOGY
              </div>
              <p className="text-sm text-zinc-400">
                How my {totalSkillsCount} listed skills assemble into a cohesive full-stack production architecture—from browser DOM rendering down to containerized Linux clusters.
              </p>
            </div>

            <div className="space-y-4">
              {ARCHITECTURE_LAYERS.map((layer, idx) => (
                <div
                  key={layer.layer}
                  className="relative border border-zinc-800/90 bg-zinc-950/70 p-5 sm:p-6"
                >
                  <div className="mb-4 flex flex-col justify-between gap-4 border-b border-zinc-900 pb-4 md:flex-row md:items-center">
                    <div>
                      <div className="font-mono text-xs font-semibold tracking-wider text-zinc-200">
                        {layer.layer}
                      </div>
                      <div className="mt-0.5 text-xs text-zinc-400">{layer.desc}</div>
                    </div>
                    <div className="font-mono text-[11px] text-zinc-500">
                      STAGE 0{idx + 1} / 05
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {layer.items.map((skillName) => {
                      const skill = ALL_SKILLS_MAP[skillName];
                      const state = getSkillState(skillName);
                      if (!skill) return null;

                      return (
                        <button
                          key={skillName}
                          type="button"
                          onMouseEnter={() => !lockedSkill && setActiveSkill(skillName)}
                          onClick={() => handleSkillClick(skillName)}
                          className={`flex items-center gap-2.5 border px-3.5 py-2 text-left transition-all ${state === 'active'
                            ? 'border-zinc-300 bg-zinc-900 text-white'
                            : state === 'related'
                              ? 'border-[#ff5500]/60 bg-zinc-900/60 text-zinc-100'
                              : state === 'dimmed'
                                ? 'border-zinc-900 bg-zinc-950 opacity-25'
                                : 'border-zinc-800 bg-[#09090b] text-zinc-300 hover:border-zinc-700'
                            }`}
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                          <div>
                            <div className="text-xs font-medium leading-none">{skill.name}</div>
                            <div className="mt-1 font-mono text-[10px] text-zinc-500">
                              {skill.usedIn}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 03: SPEC.JSON MANIFEST */}
        {viewMode === 'manifest' && (
          <div className="overflow-x-auto border-x border-b border-zinc-800/90 bg-[#09090b]">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-950 font-mono text-[11px] uppercase text-zinc-500">
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Index</th>
                  <th scope="col" className="px-4 py-3.5">Technology / Skill</th>
                  <th scope="col" className="px-4 py-3.5">Category</th>
                  <th scope="col" className="px-4 py-3.5">Role</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Production Engineering Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-sm">
                {Object.values(ALL_SKILLS_MAP).map((skill, idx) => {
                  const state = getSkillState(skill.name);
                  return (
                    <tr
                      key={skill.name}
                      onMouseEnter={() => !lockedSkill && setActiveSkill(skill.name)}
                      onClick={() => handleSkillClick(skill.name)}
                      className={`cursor-pointer transition-colors ${state === 'active'
                        ? 'bg-zinc-900/90'
                        : state === 'related'
                          ? 'bg-[#ff5500]/5'
                          : state === 'dimmed'
                            ? 'opacity-25'
                            : 'hover:bg-zinc-950'
                        }`}
                    >
                      <td className="px-4 py-3 font-mono text-xs text-zinc-600 sm:px-6">
                        {String(idx + 1).padStart(2, '0')}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-100">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                          <span>{skill.name}</span>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-zinc-400">
                        {skill.categoryTitle}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-zinc-500">
                        {skill.tag}
                      </td>
                      <td className="px-4 py-3 text-xs text-zinc-400 sm:px-6">
                        {skill.context}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* SECTION FOOTER SUMMARY BAR */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 font-mono text-xs text-zinc-500 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span>TOTAL INDEXED CAPABILITIES: {totalSkillsCount}</span>
            <span className="text-zinc-700">•</span>
            <span>DOMAINS: 07</span>
            <span className="text-zinc-700">•</span>
            <span className="text-zinc-400">
              TIP: CLICK ANY SKILL TO LOCK ITS FULL-STACK SYNERGY GRAPH
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Ready for Full-Stack &amp; Backend Engineering Roles</span>
          </div>
        </div>
      </div>
    </section>
  );
};
