"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, Mail as MailIcon } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/pages/adminDashboard");
    } else {
      alert("Invalid credentials");
    }
    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/pages/adminDashboard?admin=true" });
  };

  return (
    <div className="h-screen bg-[#F8F6F1] flex items-center justify-center px-6 relative overflow-hidden text-[#121212]">
      {/* Decorative Dashboard-style blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-400/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-300/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white border border-[#E5E2D9] rounded-[2.5rem] p-8 sm:p-12 shadow-sm relative z-10"
      >
        <div className="flex flex-col items-center mb-8 text-center">
          <img src="https://ggu.edu.in/wp-content/uploads/2025/03/ggu-new-logo.png" alt="University Logo" className="h-10 mb-6" />
          <h1 className="text-2xl font-bold text-[#1E3A8A] tracking-tight mb-2">Admin Portal</h1>
          <p className="text-[#1E3A8A]/60 text-sm font-semibold max-w-xs">
            High-security access for university administrators.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-[#888] tracking-widest pl-2">Email Address</label>
            <div className="relative">
              <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA]" />
              <input
                type="email"
                placeholder="admin@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-[#F9F9F9] border border-[#E5E2D9] rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-[#BBB]"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-[#888] tracking-widest pl-2">Secret Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA]" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-[#F9F9F9] border border-[#E5E2D9] rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-[#BBB]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-[#1E3A8A] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#152a6a] transition-all disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Authorized Login"}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E2D9]"></div>
          </div>
          <div className="relative flex justify-center text-[9px]">
            <span className="px-4 bg-white text-[#AAA] font-bold uppercase tracking-widest">or secure sign-in</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border border-[#E5E2D9] bg-white px-6 py-4 flex items-center justify-center gap-3 cursor-pointer hover:bg-[#F9F9F9] transition-all rounded-2xl font-bold text-[#121212] text-[10px] uppercase tracking-widest"
        >
          <Image src="https://kalvium.community/assets/google_icon-c3f37307.svg" alt="Google Logo" width={16} height={16} />
          <span>Google Workspace Access</span>
        </button>

        <div className="mt-10 flex items-center justify-between border-t border-[#F0F0F0] pt-8">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-[9px] font-bold text-[#AAA] uppercase tracking-widest hover:text-[#121212] transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> Dashboard
          </button>
          <div className="h-1 w-1 bg-[#E5E2D9] rounded-full" />
          <a href="#" className="text-[9px] font-bold text-[#AAA] uppercase tracking-widest hover:text-[#121212] transition-colors">
            Security Protocol
          </a>
        </div>
      </motion.div>
    </div>
  );
}
