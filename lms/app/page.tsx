"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Mail,
  Video,
  Calendar,
  Sparkles,
  MessageSquare,
  Clock,
  ArrowRight,
  LogOut,
  Search,
  CheckCircle2,
  TrendingUp,
  Layout,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Timetable from "@/components/Timetable";
import HeroIllustration from "@/components/HeroIllustration";
import { useProgress } from "@/app/pages/useProgress";
import Footer from "@/components/Footer";

function SubjectProgressBar({ name, code, totalModules }: { name: string, code: string, totalModules: number }) {
  const { completedPercentage, masteryPercentage } = useProgress(code, totalModules);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-[10px] font-black uppercase">
        <span className="text-[#121212]">
          {name} — <span className="text-[#888]">{code}</span>
        </span>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-end">
            <span className="text-[8px] text-[#AAA]">Progress</span>
            <span className={completedPercentage < 50 ? 'text-rose-600' : 'text-blue-600'}>
              {completedPercentage}%
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[8px] text-[#AAA]">Mastery</span>
            <span className={masteryPercentage < 50 ? 'text-rose-600' : 'text-emerald-600'}>
              {masteryPercentage}%
            </span>
          </div>
        </div>
      </div>
      <div className="h-2 w-full bg-[#EEEEEE] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${completedPercentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-blue-600 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#121212] font-sans selection:bg-[#E2E8F0]">
      <div className="flex relative">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 sm:ml-[280px] px-6 sm:px-16 py-6 sm:py-10 w-full">
          {/* TOP NAV BAR */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="sm:hidden p-2 bg-white border border-[#E5E2D9] rounded-xl text-[#3E73C1]"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">Dashboard</h2>
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="hidden md:relative group md:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA] group-focus-within:text-[#121212] transition-colors" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-11 pr-6 py-2.5 bg-white border border-[#E5E2D9] rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 w-64 lg:w-80 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">

            {/* LEFT COLUMN: 8 Units */}
            <div className="col-span-12 lg:col-span-8 space-y-8">

              {/* HERO CARD */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-[#E0F2FE] rounded-[2.5rem] p-6 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between border border-blue-200/50"
              >
                <div className="relative z-10 max-w-lg">
                  <h1 className="text-2xl sm:text-3xl font-black text-[#1E3A8A] mb-4 text-center md:text-left">Hello {session?.user?.name?.split(' ')[0] || "Student"},</h1>
                  <p className="text-[#1E3A8A]/70 text-sm sm:text-base font-semibold leading-relaxed mb-8 text-center md:text-left">
                    This university learning platform helps you stay on track with courses, assignments, and academic progress.
                  </p>
                </div>
                <div className="relative mt-8 md:mt-0">
                  <HeroIllustration />
                </div>
                {/* Decorative blobs */}
                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-blue-300/10 blur-[100px] rounded-full" />
              </motion.section>

              {/* TIMELINE SECTION */}
              <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-[#E5E2D9] shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-[#1E3A8A]">Class Schedule</h3>
                  <div className="flex gap-4">
                    <Calendar className="w-4 h-4 text-[#AAA]" />
                    <Layout className="w-4 h-4 text-[#AAA]" />
                  </div>
                </div>

                <div className="w-full">
                  <Timetable />
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: 4 Units */}
            <div className="col-span-12 lg:col-span-4 space-y-8">

              {/* COURSE PROGRESS */}
              <section className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-[#E5E2D9] shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-[#1E3A8A]">Course Progress</h3>
                  <button className="text-[10px] font-black text-[#AAA] uppercase hover:text-[#121212] flex items-center gap-1">
                    Analytics <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="space-y-8">
                  <div className="space-y-8">
                    <SubjectProgressBar name="Operating Systems" code="OS" totalModules={58} />
                    <SubjectProgressBar name="Data Structures" code="DS" totalModules={91} />
                    <SubjectProgressBar name="Formal Languages & Automata Theory" code="FLAT" totalModules={30} />
                    <SubjectProgressBar name="Environmental Science" code="ES" totalModules={25} />
                    <SubjectProgressBar name="Language Systems" code="LS" totalModules={22} />
                    <SubjectProgressBar name="National Service Scheme" code="NSS" totalModules={25} />
                  </div>
                </div>
              </section>

              {/* QUICK ACTION CARDS - Hidden for Guests */}
              {!(session?.user as any)?.isGuest && (
                <div className="grid grid-cols-1 gap-4">
                  <button className="flex items-center justify-between p-6 bg-[#E0F2FE] rounded-[2rem] border border-blue-200/50 group hover:shadow-lg transition-all text-left hover:cursor-pointer"
                    onClick={() => router.push('/pages/attendance')}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-[#1E3A8A]">Leave</p>
                        <p className="text-[10px] text-[#1E3A8A]/60 font-bold">Want to take a Leave?</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="flex items-center justify-between p-6 bg-[#F8FAFC] rounded-[2rem] border border-[#E5E2D9] group hover:shadow-lg transition-all text-left hover:cursor-pointer"
                    onClick={() => router.push('/pages/feedback')}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-2xl border border-[#E5E2D9] flex items-center justify-center text-slate-600">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-[#121212]">Complaint</p>
                        <p className="text-[10px] text-[#888] font-bold">Want to complaint against someone?</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#121212] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {(session?.user as any)?.isGuest && (
                <div className="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-2xl shadow-sm mb-4">
                    <Sparkles className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="text-sm font-black text-emerald-900 mb-2">Guest Access Active</h4>
                  <p className="text-[10px] font-bold text-emerald-700/60 leading-relaxed uppercase tracking-wider">
                    You have view-only access to course materials. Contact admin for full enrollment.
                  </p>
                </div>
              )}
            </div>
          </div>

          <Footer
            links={[
              { label: "Privacy", href: "#" },
              { label: "Safety", href: "#" },
              { label: "Help", href: "#" }
            ]}
            copyright="© 2026 JustListen • Design System"
          />
        </main>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: #F8F6F1;
          margin: 0;
          padding: 0;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}
