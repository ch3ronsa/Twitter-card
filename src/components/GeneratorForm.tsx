"use client";

import React, { useState } from 'react';
import { Search, Loader2, Wand2 } from 'lucide-react';

interface GeneratorFormProps {
    onGenerate: (username: string) => void;
    isLoading: boolean;
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({ onGenerate, isLoading }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            onGenerate(username.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-slate-400 group-focus-within:text-cyber-blue transition-colors" />
                </div>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter X / Twitter username..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-slate-100 dark:border-zinc-800 focus:border-cyber-blue outline-none transition-all font-medium text-lg shadow-sm"
                    disabled={isLoading}
                />
                {isLoading && (
                    <div className="absolute inset-y-0 right-4 flex items-center">
                        <Loader2 className="w-5 h-5 text-cyber-blue animate-spin" />
                    </div>
                )}
            </div>

            <button
                type="submit"
                disabled={isLoading || !username.trim()}
                className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${isLoading
                        ? 'bg-slate-200 text-slate-400 animate-pulse'
                        : 'bg-black text-white hover:bg-zinc-800'
                    }`}
            >
                {isLoading ? (
                    "Analyzing Identity..."
                ) : (
                    <>
                        <Wand2 className="w-5 h-5" />
                        Generate Access Card
                    </>
                )}
            </button>
        </form>
    );
};
