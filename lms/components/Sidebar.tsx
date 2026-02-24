"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, BookOpen, MessageSquare, CheckSquare, LogOut } from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { icon: <LayoutGrid className="w-5 h-5" />, label: "Dashboard", path: "/" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Livebooks", path: "/pages/livebooks" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "Feedback", path: "/pages/feedback" },
    { icon: <CheckSquare className="w-5 h-5" />, label: "Leave", path: "/pages/attendance" },
  ];

  const sidebarContent = (
    <div className="flex h-full w-[280px] flex-col bg-white font-sans border-r border-[#E5E2D9]">
      {/* LOGO SECTION */}
      <div className="pt-12 pb-10 px-10 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-40">
            <img
              src="https://ggu.edu.in/wp-content/uploads/2025/03/ggu-new-logo.png"
              alt="GGU Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="sm:hidden p-2 hover:bg-slate-100 rounded-full transition-colors">
            <LayoutGrid className="w-5 h-5 text-slate-400 rotate-45" />
          </button>
        )}
      </div>

      {/* PROFILE SECTION */}
      <div className="px-10 mb-8 py-2">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-2 border-[#3E73C1] p-0.5 overflow-hidden">
              <img
                src={session?.user?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${session?.user?.name || 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}`}
                className="w-full h-full rounded-full object-cover bg-slate-50"
                alt="Profile"
              />
            </div>
            <div className="absolute top-1/2 -right-0.5 w-3.5 h-3.5 bg-[#4ADE80] rounded-full border-2 border-white shadow-sm -translate-y-1/2" />
          </div>
          <div>
            <p className="text-[#3E73C1] font-black text-base">{session?.user?.name || "Student"}</p>
            <p className="text-slate-400 font-bold text-xs">Student</p>
          </div>
        </div>
      </div>

      {/* BLUE NAVIGATION SECTION */}
      <div className="flex-1 bg-[#3E73C1] rounded-tr-[3.5rem] mt-2 flex flex-col pt-10 px-0 overflow-y-auto custom-scrollbar">
        <div className="space-y-4">
          <p className="px-10 text-sm font-bold text-white mb-6 uppercase tracking-widest opacity-60">General Navigation</p>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <div key={item.path} className="relative pl-8 ">
                  <button
                    onClick={() => {
                      router.push(item.path);
                      if (onClose) onClose();
                    }}
                    className={`w-full flex items-center gap-5 px-6 py-4 transition-all duration-300 ${isActive
                      ? "bg-[#F0F4F9] text-[#3E73C1] rounded-l-[1.5rem] shadow-lg shadow-blue-900/10"
                      : "text-white/90 hover:text-white cursor-pointer"}`}
                  >
                    <span className={`${isActive ? 'text-[#3E73C1]' : 'text-white'}`}>
                      {item.icon}
                    </span>
                    <span className="text-base font-bold tracking-tight">{item.label}</span>
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="pt-8 px-0">
            <div className="pl-8 cursor-pointer">
              <button
                onClick={() => signOut({ callbackUrl: "/pages/login" })}
                className="w-full flex items-center gap-5 px-6 py-5 text-red-500 hover:text-red-500/50 transition-all mt-4 border-t border-white/10"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-base font-bold tracking-tight">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden sm:flex fixed left-0 top-0 h-screen w-[280px] flex-col z-[50]">
        {sidebarContent}
      </aside>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] sm:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-screen w-[280px] z-[70] sm:hidden overflow-hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
