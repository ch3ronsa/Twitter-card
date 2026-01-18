"use client";

import React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';

interface ThemeSwitcherProps {
    currentTheme: 'cyberpunk' | 'minimalist';
    setTheme: (theme: 'cyberpunk' | 'minimalist') => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, setTheme }) => {
    return (
        <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
            <button
                onClick={() => setTheme('cyberpunk')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentTheme === 'cyberpunk'
                        ? 'bg-black text-white shadow-lg'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
            >
                <Moon className="w-4 h-4 text-cyber-blue" />
                Cyberpunk
            </button>
            <button
                onClick={() => setTheme('minimalist')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentTheme === 'minimalist'
                        ? 'bg-white text-slate-800 shadow-lg'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
            >
                <Sun className="w-4 h-4 text-amber-500" />
                Minimalist
            </button>
        </div>
    );
};
