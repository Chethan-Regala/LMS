"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Users, UserPlus, ShieldPlus, Search, Edit2, Trash2, Phone, GraduationCap, X, Menu, Globe } from "lucide-react";
import AdminSidebar from "../../../components/AdminSidebar";

export default function AdminUsers() {
    const { data: session } = useSession();
    const router = useRouter();
    const [users, setUsers] = useState<any[]>([]);
    const [newUserEmail, setNewUserEmail] = useState("");
    const [newAdminEmail, setNewAdminEmail] = useState("");
    const [newGuestEmail, setNewGuestEmail] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [editUser, setEditUser] = useState<any>(null);
    const [editForm, setEditForm] = useState({ fullName: "", phoneNumber: "", currentSemester: 1 });

    useEffect(() => {
        if (session?.user?.isAdmin === false) {
            router.push("/");
        } else if (session?.user?.isAdmin) {
            fetchUsers();
        }
    }, [session, router]);

    const fetchUsers = async () => {
        const res = await fetch("/api/users/students");
        const data = await res.json();
        if (data.ok) {
            setUsers(data.data);
        }
    };

    const addUser = async () => {
        if (!newUserEmail.trim()) {
            alert("Please enter an email");
            return;
        }
        const res = await fetch("/api/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: newUserEmail })
        });
        if (res.ok) {
            alert("User added!");
            setNewUserEmail("");
            fetchUsers();
        }
    };

    const addAdmin = async () => {
        if (!newAdminEmail.trim()) {
            alert("Please enter an email");
            return;
        }
        const res = await fetch("/api/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: newAdminEmail, isAdmin: true })
        });
        if (res.ok) {
            alert("Admin added!");
            setNewAdminEmail("");
            fetchUsers();
        }
    };

    const addGuest = async () => {
        if (!newGuestEmail.trim()) {
            alert("Please enter an email");
            return;
        }
        const res = await fetch("/api/users/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: newGuestEmail, isGuest: true })
        });
        if (res.ok) {
            alert("Guest added!");
            setNewGuestEmail("");
            fetchUsers();
        }
    };

    const openEditModal = (user: any) => {
        setEditUser(user);
        setEditForm({
            fullName: user.fullName || "",
            phoneNumber: user.phoneNumber || "",
            currentSemester: user.currentSemester || 1
        });
    };

    const updateUser = async () => {
        if (!editForm.fullName.trim() || !editForm.phoneNumber.trim()) {
            alert("Please fill in all fields");
            return;
        }
        const res = await fetch("/api/users/update", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: editUser.email, ...editForm })
        });
        if (res.ok) {
            alert("User updated!");
            setEditUser(null);
            fetchUsers();
        }
    };

    const deleteUser = async (email: string) => {
        if (!confirm(`Delete user ${email}?`)) return;
        const res = await fetch("/api/users/delete", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });
        if (res.ok) {
            alert("User deleted!");
            fetchUsers();
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
                                className="sm:hidden p-2 bg-white border border-[#E5E2D9] rounded-xl text-[#3E73C1]"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A8A]">Manage Users</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col items-end">
                                <p className="text-[10px] font-bold uppercase text-[#888] tracking-widest leading-none">Admin</p>
                                <p className="text-sm font-bold text-[#3E73C1] mt-1">{session?.user?.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* PAGE HEADER */}
                    <div className="mb-12 px-2">
                        <h1 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tighter mb-4 flex items-center gap-4">
                            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#3E73C1]" />
                            Manage Users
                        </h1>
                        <p className="text-slate-500 font-semibold text-sm sm:text-lg max-w-2xl leading-relaxed">
                            Add new students or admins, update user details, and manage accounts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* ADD STUDENT */}
                        <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm hover:border-[#3E73C1]/30 transition-all group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-50 rounded-2xl">
                                    <UserPlus className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase">Add Student</h3>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        placeholder="student.id@university.edu"
                                        value={newUserEmail}
                                        onChange={(e) => setNewUserEmail(e.target.value)}
                                        className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#3E73C1]/20 outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>
                                <button
                                    onClick={addUser}
                                    className="bg-[#3E73C1] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#1E3A8A] transition-all active:scale-95 whitespace-nowrap"
                                >
                                    Add Student
                                </button>
                            </div>
                        </div>

                        {/* ADD ADMIN */}
                        <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm hover:border-[#3E73C1]/30 transition-all group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-indigo-50 rounded-2xl">
                                    <ShieldPlus className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase">Add Admin</h3>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        placeholder="admin@university.edu"
                                        value={newAdminEmail}
                                        onChange={(e) => setNewAdminEmail(e.target.value)}
                                        className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-indigo-200 outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>
                                <button
                                    onClick={addAdmin}
                                    className="bg-[#1E3A8A] text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all active:scale-95 whitespace-nowrap"
                                >
                                    Add Admin
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ADD GUEST - Full Width */}
                    <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm hover:border-emerald-400/30 transition-all group mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-emerald-50 rounded-2xl">
                                <Globe className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase">Add Guest</h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Accepts Gmail, Outlook, and other email providers</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    placeholder="guest@gmail.com"
                                    value={newGuestEmail}
                                    onChange={(e) => setNewGuestEmail(e.target.value)}
                                    className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-emerald-200 outline-none transition-all placeholder:text-slate-400"
                                />
                            </div>
                            <button
                                onClick={addGuest}
                                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all active:scale-95 whitespace-nowrap"
                            >
                                Add Guest
                            </button>
                        </div>
                    </div>

                    {/* USER REGISTRY SECTION */}
                    <div className="bg-white border border-[#E5E2D9] rounded-[2.5rem] p-8 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-8 bg-[#3E73C1] rounded-full" />
                                <h3 className="text-xl font-bold text-[#121212] tracking-tight uppercase">All Users</h3>
                            </div>
                            <div className="relative max-w-md w-full">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search by email or name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#F8F6F1] border border-[#E5E2D9] pl-12 pr-4 py-3 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#3E73C1]/20 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {users.filter(user => user.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase())).map((user) => (
                                <div key={user._id} className="group relative bg-[#F8F6F1]/50 border border-[#E5E2D9] rounded-[2rem] p-6 hover:bg-white hover:border-[#3E73C1]/30 transition-all duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-base text-[#121212] truncate tracking-tight">{user.fullName || "Not Set"}</h4>
                                            <p className="text-xs font-bold text-slate-500 truncate lowercase opacity-70">{user.email}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${user.isAdmin
                                            ? 'bg-indigo-50 border-indigo-100 text-indigo-600'
                                            : user.isGuest
                                                ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                                                : 'bg-blue-50 border-blue-100 text-blue-600'
                                            }`}>
                                            {user.isAdmin ? "Admin" : user.isGuest ? "Guest" : "Student"}
                                        </span>
                                    </div>

                                    <div className="space-y-2 mb-8 bg-white p-4 rounded-2xl border border-[#E5E2D9]/50">
                                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                            <Phone className="w-3.5 h-3.5 text-[#3E73C1]" />
                                            {user.phoneNumber || "N/A"}
                                        </div>
                                        {!user.isAdmin && (
                                            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                                <GraduationCap className="w-3.5 h-3.5 text-[#3E73C1]" />
                                                Semester 0{user.currentSemester}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => openEditModal(user)}
                                            className="flex-1 flex items-center justify-center gap-2 bg-white border border-[#E5E2D9] hover:border-[#3E73C1] hover:text-[#3E73C1] text-slate-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all"
                                        >
                                            <Edit2 className="w-3.5 h-3.5" />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteUser(user.email)}
                                            className="group/del flex items-center justify-center bg-rose-50 border border-rose-100 hover:bg-rose-600 hover:border-rose-600 p-3 rounded-xl transition-all"
                                        >
                                            <Trash2 className="w-4 h-4 text-rose-600 group-hover/del:text-white" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>

            {/* EDIT MODAL */}
            <AnimatePresence>
                {editUser && (
                    <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setEditUser(null)}
                            className="absolute inset-0 bg-[#121212]/40"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white border border-[#E5E2D9] rounded-[2.5rem] w-full max-w-lg shadow-lg overflow-hidden p-8 sm:p-10"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1E3A8A] tracking-tighter uppercase mb-1">Edit User</h2>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Editing {editUser.email}</p>
                                </div>
                                <button onClick={() => setEditUser(null)} className="p-3 bg-[#F8F6F1] rounded-2xl hover:bg-rose-50 hover:text-rose-600 transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={editForm.fullName}
                                        onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                                        className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#3E73C1]/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input
                                        type="text"
                                        value={editForm.phoneNumber}
                                        onChange={(e) => setEditForm({ ...editForm, phoneNumber: e.target.value })}
                                        className="w-full bg-[#F8F6F1] border border-[#E5E2D9] p-4 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-[#3E73C1]/20 outline-none transition-all"
                                    />
                                </div>
                                {!editUser.isAdmin && (
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Semester</label>
                                        <div className="grid grid-cols-4 gap-2">
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                                                <button
                                                    key={sem}
                                                    onClick={() => setEditForm({ ...editForm, currentSemester: sem })}
                                                    className={`py-3 rounded-xl text-xs font-bold transition-all border ${editForm.currentSemester === sem
                                                        ? 'bg-[#3E73C1] border-[#3E73C1] text-white'
                                                        : 'bg-[#F8F6F1] border-[#E5E2D9] text-slate-600 hover:border-[#3E73C1]/30'
                                                        }`}
                                                >
                                                    S0{sem}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="flex gap-4 pt-6">
                                    <button
                                        onClick={updateUser}
                                        className="flex-[2] bg-[#3E73C1] text-white py-5 rounded-[1.5rem] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#1E3A8A] transition-all active:scale-95"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        onClick={() => setEditUser(null)}
                                        className="flex-1 bg-[#F8F6F1] border border-[#E5E2D9] text-slate-600 py-5 rounded-[1.5rem] font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
