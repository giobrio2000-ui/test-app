import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Target, 
  Zap, 
  Layers, 
  Clock, 
  RefreshCw, 
  Info, 
  ExternalLink,
  ChevronDown,
  Layout,
  Focus,
  CheckCircle2
} from 'lucide-react';

interface Resource {
  title: string;
  lang: 'IT' | 'EN';
  type: string;
  expertOpinion: string;
  link?: string;
}

interface Section {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  content: string | React.ReactNode;
  resources?: Resource[];
  color: string;
}

const sections: Section[] = [
  {
    id: 1,
    title: "Path Overview",
    subtitle: "Mastering Organizational Efficiency",
    icon: Layout,
    color: "bg-cyan-500",
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-100 italic text-cyan-800">
          "Efficiency is doing things right; effectiveness is doing the right things." — Peter Drucker
        </div>
        <p className="text-sm leading-relaxed">
          Welcome to this curated learning journey designed by <strong>Senior Instructional Designer</strong>. 
          This path is built to transform how you handle your workload, moving from reactive chaos to proactive mastery.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "Pedagogical Approach",
    subtitle: "70-20-10 & Scaffolding",
    icon: BookOpen,
    color: "bg-teal-500",
    content: (
      <div className="space-y-3">
        <p className="text-sm font-medium">Methodology:</p>
        <ul className="list-disc list-inside text-sm space-y-2 opacity-80">
          <li><strong>70-20-10 Model:</strong> Focus on formal resources that encourage immediate on-the-job application.</li>
          <li><strong>Scaffolding:</strong> Moves logically from mindset and prioritization to technical workflow optimization.</li>
          <li><strong>Diverse Media:</strong> Videos, articles, and long-form guides to minimize cognitive load.</li>
        </ul>
      </div>
    )
  },
  {
    id: 3,
    title: "Learning Objectives",
    subtitle: "Based on Bloom's Taxonomy",
    icon: Target,
    color: "bg-emerald-500",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { level: "Analyze", active: "Work habits to identify bottlenecks." },
          { level: "Evaluate", active: "Tasks using the Eisenhower Matrix." },
          { level: "Implement", active: "Personal workflow system (GTD)." },
          { level: "Design", active: "Sustainable daily routines for Deep Work." }
        ].map((obj, i) => (
          <div key={i} className="p-3 bg-emerald-50 rounded border border-emerald-100">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">{obj.level}</span>
            <p className="text-xs font-medium">{obj.active}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 4,
    title: "Module 1: Decision Making",
    subtitle: "The Urgency Trap vs Significance",
    icon: Zap,
    color: "bg-orange-500",
    resources: [
      {
        title: "La Matrice di Eisenhower: come distinguere l'urgente dall'importante",
        lang: 'IT',
        type: "Article",
        expertOpinion: "Addresses the 'Analysis' level of Bloom's Taxonomy. Helps deconstruct to-do lists into actionable quadrants, reducing 'decision fatigue'."
      },
      {
        title: "How to avoid the 'Urgency Trap' - TED Ideas",
        lang: 'EN',
        type: "Video",
        expertOpinion: "Explains psychological biases toward urgency. Uses storytelling to facilitate long-term retention and behavioral change."
      }
    ],
    content: "Master the ability to distinguish between 'busy' and 'productive'."
  },
  {
    id: 5,
    title: "Module 2: Workflow Systems",
    subtitle: "Kanban & Getting Things Done",
    icon: Layers,
    color: "bg-blue-500",
    resources: [
      {
        title: "Guida al Metodo Kanban: gestire il lavoro in modo visivo",
        lang: 'IT',
        type: "Guide",
        expertOpinion: "Visual learning is crucial. Promotes transparency and 'Flow'. Focus on completion rather than just starting tasks."
      },
      {
        title: "Getting Things Done (GTD) System Explained in 10 Minutes",
        lang: 'EN',
        type: "Video",
        expertOpinion: "Microlearning resource. Focuses on the 'external brain' concept—moving tasks out of the mind into a trusted system."
      }
    ],
    content: "Moving from chaotic lists to a structured, reliable system."
  },
  {
    id: 6,
    title: "Module 3: Focus & Deep Work",
    subtitle: "Attention as your most valuable asset",
    icon: Focus,
    color: "bg-indigo-500",
    resources: [
      {
        title: "La Tecnica del Pomodoro: gestire il tempo e la concentrazione",
        lang: 'IT',
        type: "Podcast/Article",
        expertOpinion: "Explores time-blocking and cognitive endurance. Leverages the brain's natural attention spans using Nudge Theory."
      },
      {
        title: "Deep Work: How to focus in a distracted world - Cal Newport",
        lang: 'EN',
        type: "Article",
        expertOpinion: "Shifts perspective from 'output quantity' to 'output quality'. Essential for senior-level high-value cognitive tasks."
      }
    ],
    content: "Protecting your attention through time-blocking and cognitive endurance."
  },
  {
    id: 7,
    title: "Module 4: Continuous Improvement",
    subtitle: "Atomic Habits & Systemic Reflection",
    icon: RefreshCw,
    color: "bg-purple-500",
    resources: [
      {
        title: "Come creare abitudini atomiche - Riassunto di James Clear",
        lang: 'IT',
        type: "Video",
        expertOpinion: "Explains the 'Cue-Crave-Response-Reward' loop. Essential scaffolding for integrating new tools into daily identity."
      },
      {
        title: "The Weekly Review: The key to staying on top of it all",
        lang: 'EN',
        type: "Article/Guide",
        expertOpinion: "Reflection component of Kolb's Experiential Learning Cycle. Enables a self-correcting system through metacognition."
      }
    ],
    content: "Ensuring long-term sustainability through habit formation and weekly reviews."
  },
  {
    id: 8,
    title: "Final Note on Delivery",
    subtitle: "Global Best Practices & Local Context",
    icon: Info,
    color: "bg-slate-700",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-relaxed opacity-90">
          The resources balance theoretical depth and practical application. 
          The <strong>50/50 language split</strong> ensures connection with local cultural nuances (IT) 
          while accessing global leadership (EN).
        </p>
        <div className="flex items-center gap-2 p-2 bg-slate-100 rounded text-xs font-semibold text-slate-600">
          <CheckCircle2 size={14} className="text-emerald-500" />
          Designed for ROI: Return on Investment through behavioral change.
        </div>
      </div>
    )
  }
];

export default function App() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans">
      {/* Hero Header Section */}
      <header className="bg-white border-b border-slate-200 py-12 px-6 mb-8 text-center bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full mb-4 tracking-wider uppercase">
            Learning Path
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Mastering Organizational Efficiency
          </h1>
          <p className="text-lg text-slate-500 font-medium">
            A strategic curriculum for elite professionals
          </p>
        </motion.div>
      </header>

      {/* Cards Grid */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 gap-6">
          {sections.map((section, index) => {
            const isExpanded = expandedId === section.id;
            const Icon = section.icon;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
                className={`group relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'border-indigo-400 shadow-xl ring-4 ring-indigo-50' 
                    : 'border-slate-200 shadow-sm hover:border-indigo-200 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : section.id)}
                  className="w-full text-left p-6 flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl ${section.color} text-white shrink-0 shadow-lg scale-90 group-hover:scale-100 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase">
                        Section {section.id}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className="text-slate-400"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{section.title}</h3>
                    <p className="text-slate-500 text-sm font-medium">{section.subtitle}</p>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-slate-100"
                    >
                      <div className="p-6 pt-2 space-y-6">
                        {/* Summary Content */}
                        <div className="text-slate-600">
                          {typeof section.content === 'string' ? (
                            <p className="text-sm leading-relaxed">{section.content}</p>
                          ) : (
                            section.content
                          )}
                        </div>

                        {/* Resources Options */}
                        {section.resources && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.resources.map((res, i) => (
                              <div key={i} className="group/resource flex flex-col p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                    res.lang === 'IT' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                                  }`}>
                                    {res.lang} • {res.type}
                                  </span>
                                  <ExternalLink size={14} className="text-slate-300 group-hover/resource:text-indigo-500 transition-colors" />
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm mb-3 group-hover/resource:text-indigo-600 transition-colors">
                                  {res.title}
                                </h4>
                                <div className="mt-auto">
                                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Expert ID Opinion</p>
                                  <p className="text-xs text-slate-600 leading-relaxed italic">
                                    "{res.expertOpinion}"
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <footer className="mt-16 text-center text-slate-400">
          <p className="text-xs font-medium uppercase tracking-widest">
            Learning Path Curriculum • 2026
          </p>
          <div className="flex justify-center gap-6 mt-4 opacity-50 grayscale hover:grayscale-0 transition-all">
             {/* Simulating Edflex-like footer branding */}
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-indigo-500" />
                <span className="text-sm font-bold text-slate-800">edflex</span>
             </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
