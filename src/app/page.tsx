"use client";

import React, { useState, useRef } from 'react';
import { AccessCard } from '@/components/AccessCard';
import { GeneratorForm } from '@/components/GeneratorForm';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { TwitterUserData } from '@/lib/mockData';
import { toPng } from 'html-to-image';
import { Download, Share2, Twitter, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type ThemeType = 'cyberpunk' | 'minimalist' | 'bulk1' | 'bulk2' | 'bulk3' | 'bulk4';

export default function Home() {
  const [userData, setUserData] = useState<TwitterUserData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState<ThemeType>('bulk1');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async (username: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/twitter?username=${username.replace('@', '')}`);
      const data = await response.json();

      if (!response.ok) {
        alert(data.error || 'Failed to fetch user data');
        setIsLoading(false);
        return;
      }

      setUserData(data);
    } catch (err) {
      console.error('API call failed', err);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (cardRef.current === null) return;

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2, // High quality
      });
      const link = document.createElement('a');
      link.download = `twitter-access-card-${userData?.username.replace('@', '')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download failed', err);
    }
  };

  const handleShare = () => {
    if (!userData) return;
    const shareText = encodeURIComponent(`Check out my new Twitter Identity Card! 🪪✨\n\nGenerated for ${userData.username} using ID-GEN PRO.\n\nCreate yours here: ${window.location.origin}\n\n#TwitterCard #DigitalID #Bulk`);
    window.open(`https://twitter.com/intent/tweet?text=${shareText}`, '_blank');
  };

  return (
    <main className={`min-h-screen flex flex-col items-center justify-start p-6 transition-colors duration-500 overflow-x-hidden ${theme === 'cyberpunk' ? 'bg-[#050505] text-white' :
        theme === 'bulk1' ? 'bg-black text-white' :
          theme === 'bulk2' ? 'bg-[#0a0a0f] text-white' :
            theme === 'bulk3' ? 'bg-[#0f1115] text-white' :
              theme === 'bulk4' ? 'bg-[#1a0b1a] text-white' :
                'bg-[#f8fafc] text-slate-900'
      }`} data-theme={theme}>

      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[120px] ${theme === 'cyberpunk' ? 'bg-cyber-blue/20' :
            theme === 'bulk1' ? 'bg-white/10' :
              theme === 'bulk2' ? 'bg-purple-600/20' :
                theme === 'bulk3' ? 'bg-blue-600/10' :
                  theme === 'bulk4' ? 'bg-pink-600/10' :
                    'bg-slate-300/30'
          }`}></div>
        {(theme === 'bulk1' || theme === 'bulk2' || theme === 'bulk3' || theme === 'bulk4') && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-screen bg-gradient-to-b from-white/20 to-transparent"></div>
        )}
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center pt-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className={`p-2 rounded-xl ${theme === 'cyberpunk' ? 'bg-cyber-blue/10 border border-cyber-blue/20' :
              theme === 'minimalist' ? 'bg-slate-100 border border-slate-200' :
                'bg-white/5 border border-white/10'
            }`}>
            <Twitter className={
              theme === 'cyberpunk' ? 'text-cyber-blue' :
                theme === 'minimalist' ? 'text-slate-400' :
                  theme === 'bulk3' ? 'text-blue-400' :
                    theme === 'bulk4' ? 'text-pink-400' :
                      'text-white'
            } size={24} />
          </div>
          <span className={`font-display font-medium tracking-tight ${theme === 'cyberpunk' ? 'text-white/60' :
              theme === 'minimalist' ? 'text-slate-400' :
                'text-white/40 uppercase tracking-widest text-[10px]'
            }`}>
            ID-GEN / PRO
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-display font-black text-center mb-6 tracking-tight leading-tight">
          Create Your <br />
          <span className={
            theme === 'cyberpunk' ? 'shimmer-text' :
              theme === 'minimalist' ? 'text-slate-900' :
                'uppercase tracking-tighter'
          }>
            Twitter Identity Card
          </span>
        </h1>

        <p className={`max-w-lg text-center mb-12 text-lg md:text-xl ${theme === 'cyberpunk' ? 'text-white/50' :
            theme === 'minimalist' ? 'text-slate-500' :
              'text-white/30 font-medium'
          }`}>
          Generate a high-fidelity digital ID for your profile.
          Perfect for sharing your aesthetics across the web.
        </p>

        <div className="flex flex-col items-center gap-8 w-full">
          <GeneratorForm onGenerate={handleGenerate} isLoading={isLoading} />

          <div className="w-full flex justify-center">
            <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
          </div>

          <div className="mt-12 w-full flex flex-col items-center gap-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              {userData ? (
                <motion.div
                  key="card"
                  initial={{ opacity: 0, rotateY: -20, scale: 0.8 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="flex flex-col items-center gap-6"
                >
                  <AccessCard data={userData} theme={theme} cardRef={cardRef} />

                  <div className="flex gap-4">
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95 bg-white text-black"
                    >
                      <Download size={18} />
                      Download HD
                    </button>
                    <button
                      onClick={handleShare}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95 border ${theme === 'cyberpunk' ? 'border-white/10 bg-white/5 text-white' :
                          theme === 'minimalist' ? 'border-slate-200 bg-white text-slate-800' :
                            'border-white/20 bg-black text-white'
                        }`}
                    >
                      <Share2 size={18} />
                      Share
                    </button>
                  </div>
                </motion.div>
              ) : (
                !isLoading && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex flex-col items-center text-center p-12 rounded-3xl border-2 border-dashed ${theme === 'cyberpunk' ? 'border-white/5 bg-white/[0.02] text-white/20' :
                      theme === 'minimalist' ? 'border-slate-100 bg-slate-50 text-slate-300' :
                        'border-white/10 bg-white/[0.01] text-white/10'
                      }`}
                  >
                    <Sparkles size={48} className="mb-4" />
                    <p className="font-medium">Enter your username above to begin</p>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <footer className={`mt-auto pt-20 pb-8 text-sm ${theme === 'cyberpunk' ? 'text-white/20' :
        theme === 'minimalist' ? 'text-slate-400' :
          'text-white/10 uppercase tracking-[0.3em] font-bold'
        }`}>
        Built with Precision & Style. Based on X / Twitter.
      </footer>
    </main>
  );
}
