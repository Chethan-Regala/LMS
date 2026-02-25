"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Calendar, Trash2, Menu, AlertCircle, Clock } from "lucide-react";
import AdminSidebar from "../../../components/AdminSidebar";
import Footer from "@/components/Footer";

export default function AdminLeaves() {
    const { data: session } = useSession();
    const router = useRouter();
    const [leaves, setLeaves] = useState<any[]>([]);

    useEffect(() => {
        if (session?.user?.isAdmin === false) {
            router.push("/");
        } else if (session?.user?.isAdmin) {
            fetchLeaves();
        }
    }, [session, router]);

    const fetchLeaves = async () => {
        const res = await fetch("/api/leaves");
        const data = await res.json();
        setLeaves(data);
    };

    const deleteLeave = async (id: string) => {
        if (!confirm("Delete this leave application?")) return;
        await fetch("/api/leaves", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id })
        });
        fetchLeaves();
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
                                className="sm:hidden p-2 bg-white border border-[#E5E2D9] rounded-xl text-[#3E73C1] cursor-pointer"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A8A]">Leave Requests</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col items-end">
                                <p className="text-[10px] font-bold uppercase text-[#888] tracking-widest leading-none">Status</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <p className="text-sm font-bold text-[#3E73C1]">Active</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PAGE HEADER */}
                    <div className="mb-12 px-2">
                        <h1 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tighter mb-4 flex items-center gap-4">
                            <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-[#3E73C1]" />
                            Leave Requests
                        </h1>
                        <p className="text-slate-500 font-semibold text-sm sm:text-lg max-w-2xl leading-relaxed">
                            Review and manage student leave applications. Approve or delete leave requests.
                        </p>
                    </div>

                    <div className="bg-white border border-[#E5E2D9] rounded-[2.5rem] p-8 shadow-sm min-h-[500px]">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-2 h-8 bg-[#3E73C1] rounded-full" />
                            <h3 className="text-xl font-bold text-[#121212] tracking-tight uppercase">All Requests</h3>
                        </div>

                        {leaves.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-24 opacity-40">
                                <AlertCircle className="w-16 h-16 mb-4 text-slate-300" />
                                <p className="text-slate-400 font-bold text-xl uppercase tracking-widest">No Leave Requests</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                {leaves.map((leave) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={leave._id}
                                        className="group relative bg-[#F8F6F1]/50 border border-[#E5E2D9] rounded-[2.2rem] p-7 hover:bg-white hover:border-[#3E73C1]/30 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E2D9] flex items-center justify-center font-bold text-[#3E73C1] shadow-sm">
                                                    {leave.userName?.charAt(0) || "U"}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-base text-[#121212] tracking-tight uppercase">{leave.userName}</h4>
                                                    <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase opacity-70">{leave.userEmail}</p>
                                                </div>
                                            </div>
                                            <span className="px-4 py-1.5 bg-white border border-[#E5E2D9] rounded-full text-[9px] font-bold uppercase tracking-widest text-[#3E73C1] shadow-sm group-hover:bg-[#3E73C1] group-hover:text-white transition-colors">
                                                {leave.leaveType}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-white p-4 rounded-2xl border border-[#E5E2D9]/50 flex items-center gap-3">
                                                <Calendar className="w-4 h-4 text-[#3E73C1]" />
                                                <div className="flex flex-col text-[10px] font-bold uppercase tracking-widest">
                                                    <span className="text-slate-400">From</span>
                                                    <span>{new Date(leave.startDate).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-2xl border border-[#E5E2D9]/50 flex items-center gap-3">
                                                <Calendar className="w-4 h-4 text-rose-500" />
                                                <div className="flex flex-col text-[10px] font-bold uppercase tracking-widest">
                                                    <span className="text-slate-400">To</span>
                                                    <span>{new Date(leave.endDate).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-5 rounded-2xl border border-[#E5E2D9]/50 mb-6 relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-[#3E73C1]/20" />
                                            <p className="text-[11px] font-bold text-slate-600 leading-relaxed mb-4">"{leave.reason}"</p>
                                            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                                <Clock className="w-3 h-3" />
                                                Submitted: {new Date(leave.createdAt).toLocaleString()}
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => deleteLeave(leave._id)}
                                                className="group/del w-full flex items-center justify-center gap-3 bg-rose-50 border border-rose-100 hover:bg-rose-600 hover:border-rose-600 py-4 rounded-2xl transition-all cursor-pointer"
                                            >
                                                <Trash2 className="w-4 h-4 text-rose-600 group-hover/del:text-white" />
                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-600 group-hover/del:text-white">Delete Request</span>
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
