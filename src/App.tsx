import React, { useState, useRef } from 'react';
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
  CheckCircle2,
  Map,
  X,
  ArrowRight,
  Brain,
  ClipboardCheck,
  Cpu
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
    title: "Module 1: Mastering Personal Productivity",
    subtitle: "Focus: Managing time, energy, and individual workflows",
    icon: Clock,
    color: "bg-brand-primary",
    resources: [
      {
        title: "La Matrice di Eisenhower: come distinguere l'importante dall'urgente",
        lang: 'IT',
        type: "Article",
        expertOpinion: "You can't be organized if you can't prioritize. This is the foundational 'alphabet' of organization. It teaches learners how to categorize tasks to avoid the 'urgency trap'.",
        link: "https://asana.com/it/resources/eisenhower-matrix"
      },
      {
        title: "How to gain control of your free time - Laura Vanderkam",
        lang: 'EN',
        type: "Video",
        expertOpinion: "Vanderkam flips the script on 'not having enough time.' She argues that organization is a matter of choice and ownership. It’s highly engaging and provides a psychological shift necessary for the rest of the course.",
        link: "https://www.ted.com/talks/laura_vanderkam_how_to_gain_control_of_your_free_time"
      }
    ],
    content: "Master the foundational alphabet of organization by learning how to categorize tasks and shift your mindset regarding time ownership."
  },
  {
    id: 2,
    title: "Module 2: The Art of Focus and Deep Work",
    subtitle: "Focus: Minimizing distractions and managing digital clutter",
    icon: Brain,
    color: "bg-[#5D64FF]",
    resources: [
      {
        title: "Tecnica del Pomodoro: Smetti di procrastinare e migliora la concentrazione",
        lang: 'IT',
        type: "Article",
        expertOpinion: "This offers a practical, 'low-barrier' tool. It explains the science of why our brains need intervals, making it perfect for learners who feel overwhelmed by long to-do lists.",
        link: "https://www.todoist.com/it/productivity-methods/pomodoro-technique"
      },
      {
        title: "How to Use Cal Newport’s Deep Work Technique to Tackle Demanding Projects",
        lang: 'EN',
        type: "Article",
        expertOpinion: "Provides a practical framework to transition from shallow, distracted tasks to high-impact concentration. It breaks down the 'Deep Work' philosophy into actionable strategies to reclaim focus.",
        link: "https://toggl.com/blog/deep-work-technique"
      }
    ],
    content: "Minimizing distractions and managing digital clutter is essential for high-impact concentration and cognitive quality."
  },
  {
    id: 3,
    title: "Module 3: Project Management & Goal Setting",
    subtitle: "Focus: Turning abstract ideas into actionable plans",
    icon: ClipboardCheck,
    color: "bg-[#7C82FF]",
    resources: [
      {
        title: "Il METODO per raggiungere i tuoi OBIETTIVI (SMART)",
        lang: 'IT',
        type: "Video",
        expertOpinion: "Offers a professional and business-oriented perspective on the SMART framework. The structure is highly schematic and jargon-free, making it easy to create objectives.",
        link: "https://www.youtube.com/watch?v=esS8-zcUiII"
      },
      {
        title: "Agile project management: What is it and how to get started",
        lang: 'EN',
        type: "Guide",
        expertOpinion: "Provides a comprehensive overview of Agile principles like iterative development and continuous improvement. Highly visual and standardized for global business.",
        link: "https://www.atlassian.com/agile/project-management"
      }
    ],
    content: "Learn how to ground your ambitions in reality by mastering SMART goal setting and Agile project management frameworks."
  },
  {
    id: 4,
    title: "Module 4: Team Collaboration & Digital Ecosystems",
    subtitle: "Focus: Synergy, AI Integration, and Seamless Workflows",
    icon: Cpu,
    color: "bg-[#9BA0FF]",
    resources: [
      {
        title: "Come si riconosce, oggi, un team ad alte perfomance? E, come fare per crearne uno?",
        lang: 'IT',
        type: "Article",
        expertOpinion: "Provides a management-focused blueprint for building high-performance teams, emphasizing strategic alignment, trust, and how technology acts as a catalyst for results.",
        link: "https://www.cio.com/article/3491292/come-si-riconosce-oggi-un-team-ad-alte-perfomance-e-come-fare-per-crearne-uno.html"
      },
      {
        title: "Aneesh Raman: AI won’t decide the future of work—unless you let it",
        lang: 'EN',
        type: "Podcast",
        expertOpinion: "Offers a strategic perspective on how AI is reshaping teamwork. Features insights on managing human-AI collaboration and building an intelligent digital ecosystem.",
        link: "https://www.microsoft.com/en-us/worklab/podcast"
      }
    ],
    content: "Build a scalable and intelligent digital ecosystem by aligning human dynamics with cutting-edge AI integration and asynchronous workflows."
  }
];

export default function App() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const toggleSection = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const startPath = () => {
    setIsOverviewOpen(false);
    setTimeout(() => {
      mainRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (!expandedIds.includes(1)) {
        toggleSection(1);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <AnimatePresence>
        {isOverviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl md:rounded-[40px] shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[800px] overflow-hidden"
            >
              <button 
                onClick={() => setIsOverviewOpen(false)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 rounded-full bg-slate-100/80 backdrop-blur hover:bg-brand-primary hover:text-white transition-colors z-[60]"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              {/* Left Pane: Visual Roadmap */}
              <div className="w-full md:w-2/5 bg-brand-primary p-8 md:p-12 text-white flex flex-col justify-between relative overflow-y-auto md:overflow-hidden shrink-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-[-10%] right-[-10%] w-48 h-48 md:w-64 md:h-64 border-[30px] md:border-[40px] border-white rounded-full" />
                  <div className="absolute bottom-[-20%] left-[-20%] w-72 h-72 md:w-96 md:h-96 border-[1px] md:border-[2px] border-white rounded-full" />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-8 md:mb-12">
                    <Map size={12} /> Course Blueprint
                  </div>
                  
                  <div className="space-y-8 md:space-y-12">
                    {sections.map((s, idx) => (
                      <div key={s.id} className="flex items-center gap-4 md:gap-6 group">
                        <div className="relative">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white text-brand-primary flex items-center justify-center font-black text-lg md:text-xl shadow-lg">
                            {s.id}
                          </div>
                          {idx < sections.length - 1 && (
                            <div className="absolute top-10 left-5 md:top-12 md:left-6 w-0.5 h-8 md:h-12 bg-white/30" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-base md:text-lg leading-tight">{s.title.split(':')[1].trim()}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-8 md:pt-12 hidden md:block">
                  <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em]">
                    A Structured Excellence Path
                  </p>
                </div>
              </div>

              {/* Right Pane: Narrative Text */}
              <div className="w-full md:w-3/5 p-8 md:p-20 overflow-y-auto bg-white">
                <div className="max-w-md mx-auto md:mx-0 w-full flex flex-col min-h-full">
                  <div className="mb-2">
                    <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] opacity-70">
                      Project Goals
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
                    The Journey to <span className="text-brand-primary italic font-serif">Excellence</span>
                  </h2>
                  
                  <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                    <p>
                      This course is designed to guide you through a logical progression 
                      from <span className="text-slate-900 font-bold">individual mastery</span> to 
                      <span className="text-slate-900 font-bold"> team excellence</span>.
                    </p>
                    
                    <p>
                      It starts with <span className="text-brand-primary font-bold">Personal Productivity</span>, 
                      helping you master your own time so you can focus on what truly matters. 
                      From there, you will dive into <span className="text-brand-primary font-bold">Deep Work</span> to 
                      reclaim your concentration and produce higher quality results.
                    </p>
                    
                    <p>
                      The journey then moves to <span className="text-brand-primary font-bold">Project Management</span>, 
                      giving you the practical tools to turn your ideas into measurable success. 
                      Finally, you will explore <span className="text-brand-primary font-bold">Team Collaboration</span>, 
                      learning how to use AI and digital tools to work seamlessly with others.
                    </p>
                    
                    <p className="pt-4 border-t border-slate-100 italic text-sm md:text-base">
                      By the end of this course, you will have a complete toolkit to stay organized, 
                      focused, and ahead of the curve in today's fast-paced world.
                    </p>

                    <div className="pt-6 md:pt-8 flex flex-col items-start gap-6 pb-4">
                      <div className="text-slate-900">
                        <p className="text-lg md:text-xl font-black mb-1 leading-tight">Success is a matter of organization.</p>
                        <p className="text-brand-primary font-black tracking-widest uppercase text-[10px] md:text-sm">Enjoy your journey!</p>
                      </div>
                      
                      <button 
                        onClick={startPath}
                        className="group w-full md:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-brand-primary text-white rounded-full font-black shadow-xl shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all text-sm md:text-base mb-4"
                      >
                        Start Your Path <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Professional Header */}
      <header className="bg-gradient-to-b from-white to-[#e1f8ff] border-b border-slate-200 py-16 px-6 mb-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-bg rounded-full -mr-32 -mt-32 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-bg rounded-full -ml-32 -mb-32 opacity-30 blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20">
              <Layout className="text-white" size={24} />
            </div>
            <span className="text-brand-primary font-black tracking-tight text-xl">learninghub</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-primary mb-6 tracking-tight leading-[1.1]">
            Mastering Organizational Efficiency
          </h1>
          
          <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full mb-8" />
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            A curated learning path built for high-performance teams and individual excellence.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOverviewOpen(true)}
            className="inline-flex items-center gap-4 px-8 py-4 bg-slate-50 text-brand-primary border-2 border-slate-200 rounded-full font-black text-sm hover:border-brand-primary hover:bg-white transition-all shadow-sm"
          >
            <Map size={24} />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Project Goals</span>
              <span className="uppercase tracking-widest">Explore Learning Path</span>
            </div>
          </motion.button>
        </motion.div>
      </header>

      {/* 4 Cards Grid */}
      <main ref={mainRef} className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-8">
          {sections.map((section, index) => {
            const isExpanded = expandedIds.includes(section.id);
            const Icon = section.icon;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30, scale: 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.21, 1.02, 0.47, 0.98] 
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`group bg-gradient-to-b from-white to-[#e1f8ff] rounded-[32px] border transition-all duration-500 overflow-hidden flex flex-col ${
                  isExpanded 
                    ? 'border-brand-primary shadow-2xl ring-4 ring-brand-primary/5' 
                    : 'border-slate-200 shadow-sm hover:border-brand-primary/40 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full text-left p-8 md:p-10 flex items-center gap-8"
                >
                  <div className={`w-16 h-16 rounded-2xl ${section.color} text-white shrink-0 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-6`}>
                    <Icon size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-brand-primary text-[10px] font-black tracking-[0.25em] uppercase">
                        Module {section.id}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className={`transition-colors h-10 w-10 rounded-full flex items-center justify-center ${isExpanded ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-400'}`}
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1 leading-tight tracking-tight">{section.title}</h3>
                    <p className="text-slate-500 font-semibold text-sm leading-relaxed">{section.subtitle}</p>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 space-y-8">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 font-medium leading-relaxed italic">
                          {section.content}
                        </div>

                        {section.resources && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {section.resources.map((res, i) => (
                              <a 
                                key={i} 
                                href={res.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group/resource flex flex-col p-6 bg-white rounded-2xl border-2 border-slate-100 hover:border-brand-primary transition-all shadow-sm hover:shadow-md active:scale-95"
                              >
                                <div className="flex items-center justify-between mb-4">
                                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                    res.lang === 'IT' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                                  }`}>
                                    {res.lang} • {res.type}
                                  </span>
                                  <ExternalLink size={18} className="text-slate-300 group-hover/resource:text-brand-primary transition-colors" />
                                </div>
                                <h4 className="font-extrabold text-slate-900 text-lg mb-4 group-hover/resource:text-brand-primary transition-colors leading-tight">
                                  {res.title}
                                </h4>
                                <div className="mt-auto border-t border-slate-50 pt-4">
                                  <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-2 opacity-70">
                                    WHY THIS RESOURCE?
                                  </p>
                                  <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                                    {res.expertOpinion}
                                  </p>
                                </div>
                              </a>
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

        <footer className="mt-24 text-center pb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default group mb-8">
            <div className="w-5 h-5 rounded bg-brand-primary" />
            <span className="text-sm font-bold text-slate-800 tracking-tight">learning hub path</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
              Organizational Excellence
            </p>
            <p className="text-sm font-black text-slate-900 tracking-tight uppercase">
              Jacopo Piovan
            </p>
            <p className="text-xs font-bold text-brand-primary/60 tracking-widest">
              20/04/2026
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
