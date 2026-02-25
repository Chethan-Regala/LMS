"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, BookOpen, User, Edit3, X, Menu, Save, Info } from "lucide-react";
import AdminSidebar from "../../../components/AdminSidebar";
import Footer from "@/components/Footer";

export default function AdminTimetable() {
    const { data: session } = useSession();
    const router = useRouter();
    const [timetable, setTimetable] = useState<any>({});
    const [editSubject, setEditSubject] = useState<any>(null);
    const [subjectForm, setSubjectForm] = useState({ professor: "", description: "" });

    useEffect(() => {
        if (session?.user?.isAdmin === false) {
            router.push("/");
        } else if (session?.user?.isAdmin) {
            fetchTimetable();
        }
    }, [session, router]);

    const fetchTimetable = async () => {
        const res = await fetch("/api/timetable");
        const data = await res.json();
        if (data.ok) setTimetable(data.data);
    };

    const updateSlot = async (day: string, index: number, field: string, value: string) => {
        const updated = { ...timetable, [day]: timetable[day].map((slot: any, i: number) => i === index ? { ...slot, [field]: value } : slot) };
        setTimetable(updated);
        await fetch("/api/timetable", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ schedule: updated })
        });
    };

    const openSubjectModal = (subject: any) => {
        setEditSubject(subject);
        setSubjectForm({
            professor: subject.teacher || "",
            description: subject.description || ""
        });
    };

    const updateSubject = async () => {
        const updated = { ...timetable };
        Object.keys(updated).forEach(day => {
            updated[day] = updated[day].map((slot: any) =>
                slot.subject === editSubject.subject ? { ...slot, teacher: subjectForm.professor, description: subjectForm.description } : slot
            );
        });
        setTimetable(updated);
        await fetch("/api/timetable", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ schedule: updated })
        });
        setEditSubject(null);
    };

    const nonSubjectEntries = [
        'LUNCH BREAK', 'FREE TIME', 'LIBRARY', 'SPORTS/ACTIVITIES',
        'HOBBY/RECREATION', 'GROUP STUDY', 'EXTRA CLASSES', 'ONLINE COURSES',
        'LAB PRACTICE', 'PROJECT WORK', 'ASSIGNMENT WORK', 'BREAK',
        'PRACTICE SESSION', 'INTEGRATED SESSION'
    ];

    const getUniqueSubjects = () => {
        const subjects = new Set();
        Object.values(timetable).forEach((day: any) => {
            day.forEach((slot: any) => {
                if (slot.subject) {
                    const upper = slot.subject.toUpperCase().trim();
                    const isNonSubject = nonSubjectEntries.some(entry => upper.includes(entry));
                    if (!isNonSubject) {
                        subjects.add(slot.subject);
                    }
                }
            });
        });
        return Array.from(subjects);
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
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A8A]">Timetable</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col items-end">
                                <p className="text-[10px] font-bold uppercase text-[#888] tracking-widest leading-none">Status</p>
                                <p className="text-sm font-bold text-[#3E73C1] mt-1">Active</p>
                            </div>
                        </div>
                    </div>

                    {/* PAGE HEADER */}
                    <div className="mb-12 px-2">
                        <h1 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tighter mb-4 flex items-center gap-4">
                            <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-[#3E73C1]" />
                            Schedule Management
                        </h1>
                        <p className="text-slate-500 font-semibold text-sm sm:text-lg max-w-2xl leading-relaxed">
                            Edit the weekly class schedule and assign professors to subjects. Changes reflect on student dashboards.
                        </p>
                    </div>

                    {/* MAIN TIMETABLE TABLE */}
                    <div className="bg-white border border-[#E5E2D9] rounded-[2.5rem] p-8 shadow-sm mb-12 overflow-hidden">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-2 h-8 bg-[#3E73C1] rounded-full" />
                            <h3 className="text-xl font-bold text-[#121212] tracking-tight uppercase">Weekly Schedule</h3>
                        </div>

                        <div className="overflow-x-auto rounded-3xl border border-[#E5E2D9] custom-scrollbar">
                            <table className="w-full min-w-[1000px] border-collapse">
                                <thead>
                                    <tr className="bg-[#F8F6F1]">
                                        <th className="p-6 text-left font-bold text-[10px] uppercase tracking-[0.2em] text-[#3E73C1] border-b border-r border-[#E5E2D9] w-32">Time Slot</th>
                                        {Object.keys(timetable).map(day => (
                                            <th key={day} className="p-6 text-left font-bold text-[10px] uppercase tracking-[0.2em] text-[#121212] border-b border-r border-[#E5E2D9] last:border-r-0">
                                                {day}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {timetable[Object.keys(timetable)[0]]?.map((_: any, index: number) => (
                                        <tr key={index} className="group hover:bg-[#F8F6F1]/50 transition-colors">
                                            <td className="p-6 font-bold text-xs text-[#1E3A8A] bg-[#F8F6F1]/30 border-b border-r border-[#E5E2D9] tracking-tighter">
                                                {timetable[Object.keys(timetable)[0]][index].time}
                                            </td>
                                            {Object.keys(timetable).map(day => (
                                                <td key={day} className="p-4 border-b border-r border-[#E5E2D9] last:border-r-0 min-w-[180px]">
                                                    <input
                                                        type="text"
                                                        value={timetable[day][index].subject}
                                                        onChange={(e) => updateSlot(day, index, 'subject', e.target.value)}
                                                        className="w-full bg-[#F8F6F1] p-3 rounded-xl text-xs font-bold uppercase tracking-tight border border-transparent focus:bg-white focus:border-[#3E73C1]/30 focus:shadow-sm focus:ring-4 focus:ring-[#3E73C1]/5 outline-none transition-all placeholder:opacity-30"
                                                        placeholder="VACANT"
                                                    />
                                                    {timetable[day][index].teacher && (
                                                        <p className="text-[9px] font-semibold text-slate-400 mt-1.5 ml-1 truncate">
                                                            {timetable[day][index].teacher}
                                                        </p>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* SUBJECT DETAILS GRID */}
                    <div className="mb-8 px-2 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-[#121212] tracking-tighter uppercase mr-4 flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-[#3E73C1]" />
                            Subject Allocation
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {getUniqueSubjects().map((subject: any) => {
                            const subjectData: any = Object.values(timetable).flat().find((s: any) => s.subject === subject);
                            return (
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    key={subject}
                                    className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm hover:border-[#3E73C1]/30 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h4 className="font-bold text-lg text-[#1E3A8A] tracking-tight uppercase leading-tight group-hover:text-black transition-colors">{subject}</h4>
                                        <div className="p-2 bg-[#F8F6F1] rounded-xl">
                                            <Info className="w-4 h-4 text-[#3E73C1]" />
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-[#F8F6F1] flex items-center justify-center text-[#3E73C1] shadow-sm">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-1">Lead Professor</p>
                                                <p className="text-xs font-bold text-[#121212]">{subjectData?.teacher || "Not Assigned"}</p>
                                            </div>
                                        </div>
                                        <div className="bg-[#F8F6F1]/50 p-4 rounded-2xl border border-[#E5E2D9]/50 min-h-[80px]">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#3E73C1] mb-2">Description</p>
                                            <p className="text-[11px] font-bold text-slate-500 leading-relaxed line-clamp-2">
                                                {subjectData?.description ? `"${subjectData.description}"` : "None provided."}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => openSubjectModal(subjectData)}
                                        className="w-full flex items-center justify-center gap-3 bg-white border border-[#E5E2D9] hover:bg-[#1E3A8A] hover:border-[#1E3A8A] hover:text-white px-4 py-4 rounded-xl transition-all font-bold text-[10px] uppercase tracking-[0.2em] shadow-sm active:scale-95 cursor-pointer"
                                    >
                                        <Edit3 className="w-4 h-4" />
                                        Edit Details
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* PREMIUM EDIT MODAL */}
                    <AnimatePresence>
                        {editSubject && (
                            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setEditSubject(null)}
                                    className="absolute inset-0 bg-[#121212]/40"
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-lg overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-2 bg-[#3E73C1]" />

                                    <div className="flex justify-between items-center mb-10">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase text-[#3E73C1] tracking-[0.2em] mb-2 leading-none">Edit Subject</p>
                                            <h2 className="text-2xl font-bold text-[#121212] tracking-tighter uppercase">{editSubject.subject}</h2>
                                        </div>
                                        <button
                                            onClick={() => setEditSubject(null)}
                                            className="p-3 hover:bg-[#F8F6F1] rounded-2xl transition-colors group cursor-pointer"
                                        >
                                            <X className="w-6 h-6 text-slate-400 group-hover:text-rose-500 transition-colors" />
                                        </button>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-[#1E3A8A] ml-1">Professor Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter professor name"
                                                value={subjectForm.professor}
                                                onChange={(e) => setSubjectForm({ ...subjectForm, professor: e.target.value })}
                                                className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-5 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-[#3E73C1]/10 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-[#1E3A8A] ml-1">Subject Description</label>
                                            <textarea
                                                placeholder="Enter a brief description..."
                                                value={subjectForm.description}
                                                onChange={(e) => setSubjectForm({ ...subjectForm, description: e.target.value })}
                                                className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-5 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-[#3E73C1]/10 outline-none h-40 transition-all resize-none"
                                            />
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            <button
                                                onClick={updateSubject}
                                                className="flex-1 flex items-center justify-center gap-3 bg-[#3E73C1] text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#1E3A8A] transition-all shadow-md active:scale-95 cursor-pointer"
                                            >
                                                <Save className="w-4 h-4" />
                                                Save Changes
                                            </button>
                                            <button
                                                onClick={() => setEditSubject(null)}
                                                className="flex-1 bg-white border border-[#E5E2D9] text-slate-500 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#F8F6F1] hover:text-[#121212] transition-all active:scale-95 cursor-pointer"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
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
