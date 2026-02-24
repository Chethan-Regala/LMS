'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { CheckCircle2, Loader2, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CompletionButtonProps {
    subject: string;
    unitId: number;
    moduleId: number;
    onComplete?: () => void;
}

const CompletionButton: React.FC<CompletionButtonProps> = ({ subject, unitId, moduleId, onComplete }) => {
    const { data: session } = useSession();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleMarkComplete = async () => {
        if (!session?.user?.email) return;

        setStatus('loading');
        try {
            const res = await fetch('/api/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userEmail: session.user.email,
                    subject,
                    unitId,
                    moduleId,
                    score: 100,
                    totalQuestions: 100,
                    completed: true
                })
            });

            if (res.ok) {
                setStatus('success');
                if (onComplete) onComplete();
                // Reset after 5 seconds to allow for re-marking if needed, 
                // though typically it stays completed.
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error("Failed to mark as complete", error);
            setStatus('idle');
        }
    };

    return (
        <div className="flex justify-center mt-16 mb-12">
            
        </div>
    );
};

export default CompletionButton;
