"use client";

import { motion } from "framer-motion";
import { useProgress } from "@/app/pages/useProgress";

interface SubjectProgressBarProps {
    name: string;
    code: string;
    totalModules: number;
    color: string;
}

export default function SubjectProgressBar({ name, code, totalModules, color }: SubjectProgressBarProps) {
    const { completedPercentage } = useProgress(code, totalModules);

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center text-[10px] font-black">
                <span className="text-[#121212]">
                    {name} — <span className="text-[#888]">{code}</span>
                </span>
                <span className={`${completedPercentage < 50 ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {completedPercentage}%
                </span>
            </div>
            <div className="h-1 w-full bg-[#F5F5F5] rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${completedPercentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${color}`}
                />
            </div>
        </div>
    );
}
