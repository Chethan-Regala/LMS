"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { OptionCardProps } from "@/types";

export default function OptionCard({ item, className, iconSize }: OptionCardProps) {
  const router = useRouter();

  // Optimized icon sizing
  const defaultIconSize = item.id === 6 ? "h-12 w-12" : "h-10 w-10";
  const finalIconSize = iconSize || defaultIconSize;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => router.push(item.link)}
      className={`group relative bg-white border border-[#E5E2D9] rounded-[2rem] overflow-hidden cursor-pointer p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-[#3E73C1]/30 ${className}`}
    >
      {/* BACKGROUND ACCENT */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
        style={{ backgroundColor: item.color }}
      />

      {/* ICON/IMAGE CONTAINER */}
      <div className="relative z-10 mb-4 flex items-center justify-center h-16 w-16 rounded-2xl bg-[#F8F6F1] group-hover:bg-white transition-colors duration-300 shadow-sm border border-transparent group-hover:border-[#E5E2D9]">
        {item.img ? (
          <img
            src={item.img}
            alt=""
            className={`object-contain ${finalIconSize} transition-transform duration-500 group-hover:rotate-12`}
          />
        ) : (
          <span className="text-3xl filter transition-transform duration-500 group-hover:scale-110">
            {item.icon}
          </span>
        )}
      </div>

      {/* LABEL */}
      <div className="relative z-10 text-center">
        <p className="text-[10px] sm:text-[11px] font-bold uppercase text-slate-500 tracking-[0.15em] leading-tight group-hover:text-[#1E3A8A] transition-colors duration-300">
          {item.name}
        </p>
      </div>

      {/* DECORATIVE DOT */}
      <div
        className="absolute bottom-4 h-1 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"
        style={{ backgroundColor: item.color }}
      />
    </motion.div>
  );
}
