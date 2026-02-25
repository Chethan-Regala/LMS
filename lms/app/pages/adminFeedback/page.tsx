"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Clock, Trash2, ShieldCheck, Menu, AlertTriangle } from "lucide-react";
import AdminSidebar from "../../../components/AdminSidebar";
import Footer from "@/components/Footer";

export default function AdminFeedback() {
    const { data: session } = useSession();
    const router = useRouter();
    const [feedback, setFeedback] = useState<any[]>([]);

    useEffect(() => {
        if (session?.user?.isAdmin === false) {
            router.push("/");
        } else if (session?.user?.isAdmin) {
            fetchFeedback();
        }
    }, [session, router]);

    const fetchFeedback = async () => {
        const res = await fetch("/api/feedback");
        const data = await res.json();
        setFeedback(data);
    };

    const deleteFeedback = async (id: string) => {
        if (!confirm("Are you sure you want to delete this feedback?")) return;
        try {
            const res = await fetch("/api/feedback", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (res.ok) {
                setFeedback(feedback.filter((f: any) => f._id !== id));
            }
        } catch (error) {
            console.error("Failed to delete feedback", error);
        }
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8F6F1] text-[#121212] font-sans">
            <div className="flex relative">
                <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

                <main className="flex-1 sm:ml-[280px] px-6 sm:px-16 py-6 sm:py-10 min-w-0 overflow-x-hidden relative z-10">
                    {/* TOP NAV BAR */}
                    <div className="flex items-center justify-between mb-8 sm:mb-12">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="sm:hidden p-2 bg-white border border-[#E5E2D9] rounded-xl text-[#F97316] cursor-pointer"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A8A]">Student Feedback</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-100">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                <span className="text-[10px] font-bold uppercase text-emerald-600 tracking-widest">Anonymous</span>
                            </div>
                        </div>
                    </div>

                    {/* PAGE HEADER */}
                    <div className="mb-12 px-2">
                        <h1 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tighter mb-4 flex items-center gap-4">
                            <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-[#F97316]" />
                            Student Feedback
                        </h1>
                        <p className="text-slate-500 font-semibold text-sm sm:text-lg max-w-2xl leading-relaxed">
                            View and manage anonymous feedback submitted by students. Feedback auto-expires after 90 days.
                        </p>
                    </div>

                    <div className="bg-white border border-[#E5E2D9] rounded-[2.5rem] p-8 sm:p-10 shadow-sm min-h-[500px]">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-8 bg-[#F97316] rounded-full" />
                                <h3 className="text-xl font-bold text-[#121212] tracking-tight uppercase">All Feedback</h3>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-[#F8F6F1] px-4 py-2 rounded-xl border border-[#E5E2D9]/50">
                                <Clock className="w-3.5 h-3.5" />
                                Expires in: 90 Days
                            </div>
                        </div>

                        {feedback.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-24 opacity-40">
                                <Sparkles className="w-16 h-16 mb-4 text-slate-300" />
                                <p className="text-slate-400 font-bold text-xl uppercase tracking-widest">No Feedback Yet</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {feedback.map((item: any) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={item._id}
                                        className="group relative bg-[#F8F6F1]/50 border border-[#E5E2D9] rounded-[2.2rem] p-8 hover:bg-white hover:border-[#F97316]/30 transition-all duration-300"
                                    >
                                        <div className="absolute top-6 right-8">
                                            <div className="p-2 bg-white rounded-xl shadow-sm border border-[#E5E2D9] group-hover:border-[#F97316]/20">
                                                <ShieldCheck className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#F97316] transition-colors" />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E2D9] flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#F97316] leading-none mb-1">Source: Unknown</p>
                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{new Date(item.createdAt).toLocaleString()}</p>
                                            </div>
                                        </div>

                                        <div className="relative mb-8 pt-4">
                                            <span className="absolute top-0 left-0 text-4xl font-serif text-[#F97316]/10 leading-none">"</span>
                                            <p className="text-sm font-bold text-[#121212] leading-relaxed z-10 relative">
                                                {item.message}
                                            </p>
                                        </div>

                                        <div className="pt-6 border-t border-[#E5E2D9]/50 flex items-center justify-between">
                                            <div className="flex items-center gap-2 group/alert">
                                                <AlertTriangle className="w-3 h-3 text-rose-500/50 group-hover/alert:text-rose-500 transition-colors" />
                                                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 group-hover/alert:text-rose-500 transition-colors">
                                                    Expires: {new Date(item.expiresAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => deleteFeedback(item._id)}
                                                className="p-2 rounded-xl hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-all group/del cursor-pointer"
                                                title="Delete feedback"
                                            >
                                                <Trash2 className="w-3.5 h-3.5 text-slate-300 group-hover/del:text-rose-500 transition-colors" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                    <Footer
                        links={[
                            { label: "Admin Panel", href: "#" },
                            { label: "System Logs", href: "#" },
                            { label: "Support", href: "#" }
                        ]}
                        copyright="© 2026 GGU LMS • Administrative Interface"
                    />
                </main>
            </div>
        </div>
    );
}
