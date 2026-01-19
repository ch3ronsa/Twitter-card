import React from 'react';
import { Moon, Sun, Star, Rocket, Shield, Heart } from 'lucide-react';
import { ThemeType } from '@/app/page';

interface ThemeSwitcherProps {
    currentTheme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, setTheme }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 p-1 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
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
            <button
                onClick={() => setTheme('bulk1')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentTheme === 'bulk1'
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'text-slate-500 hover:text-slate-800'
                    }`}
            >
                <Star className="w-4 h-4 text-zinc-950" fill="currentColor" />
                Bulk 1
            </button>
            <button
                onClick={() => setTheme('bulk2')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentTheme === 'bulk2'
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'text-slate-500 hover:text-slate-800'
                    }`}
            >
                <Rocket className="w-4 h-4" />
                Bulk 2
            </button>
            <button
                onClick={() => setTheme('bulk3')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentTheme === 'bulk3'
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'text-slate-500 hover:text-slate-800'
                    }`}
            >
                <Shield className="w-4 h-4" />
                Bulk 3
            </button>
            <button
                onClick={() => setTheme('bulk4')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentTheme === 'bulk4'
                    ? 'bg-pink-600 text-white shadow-lg scale-105'
                    : 'text-slate-500 hover:text-slate-800'
                    }`}
            >
                <Heart className="w-4 h-4" fill="currentColor" />
                Bulk 4
            </button>
        </div>
    );
};
