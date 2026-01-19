import React from 'react';
import { TwitterUserData } from '@/lib/mockData';
import { QRCodeSVG } from 'qrcode.react';
import { Verified, Calendar, Users, Twitter, Star, Rocket, Shield, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeType } from '@/app/page';

interface AccessCardProps {
    data: TwitterUserData;
    theme: ThemeType;
    cardRef: React.RefObject<HTMLDivElement | null>;
}

export const AccessCard: React.FC<AccessCardProps> = ({ data, theme, cardRef }) => {
    const isCyber = theme === 'cyberpunk';
    const isMinimalist = theme === 'minimalist';
    const isBulk1 = theme === 'bulk1';
    const isBulk2 = theme === 'bulk2';
    const isBulk3 = theme === 'bulk3';
    const isBulk4 = theme === 'bulk4';
    const isBulkAny = isBulk1 || isBulk2 || isBulk3 || isBulk4;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative p-1 rounded-[32px] group"
        >
            {/* Background Glows */}
            {isCyber && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-[32px] blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            )}
            {isBulkAny && (
                <div className={`absolute -inset-1 rounded-[32px] blur-xl opacity-30 animate-pulse ${isBulk1 ? 'bg-white/5' :
                        isBulk2 ? 'bg-purple-500/10' :
                            isBulk3 ? 'bg-blue-500/10' :
                                'bg-pink-500/10'
                    }`}></div>
            )}

            <div
                ref={cardRef}
                className={`relative w-[350px] md:w-[400px] aspect-[1.586/1] rounded-[32px] overflow-hidden ${isCyber ? 'cyber-glass text-white grain' :
                        isBulkAny ? 'bg-black text-white border border-white/10' :
                            'bg-[#fcfdff] text-slate-800 shadow-2xl border border-slate-100'
                    }`}
            >
                {/* Theme Backgrounds */}
                {isBulk1 && (
                    <div className="absolute inset-0 z-0">
                        <img src="/bulk1-bg.png" alt="" className="w-full h-full object-cover opacity-70" />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                )}
                {isBulk2 && (
                    <div className="absolute inset-0 z-0">
                        <img src="/bulk2-bg.png" alt="" className="w-full h-full object-cover opacity-70" />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                )}
                {isBulk3 && (
                    <div className="absolute inset-0 z-0">
                        <img src="/bulk3-bg.png" alt="" className="w-full h-full object-cover opacity-70" />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                )}
                {isBulk4 && (
                    <div className="absolute inset-0 z-0">
                        <img src="/bulk4-bg.png" alt="" className="w-full h-full object-cover opacity-70" />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                )}

                {/* Decorative Elements */}
                {isCyber ? (
                    <>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-purple/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>
                    </>
                ) : isBulkAny ? (
                    <>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black/20 z-[1]"></div>
                        <div className="absolute top-4 right-4 z-[2] opacity-20">
                            {isBulk1 && <Star className="w-4 h-4 animate-pulse" />}
                            {isBulk2 && <Rocket className="w-4 h-4 animate-bounce" />}
                            {isBulk3 && <Shield className="w-4 h-4" />}
                            {isBulk4 && <Heart className="w-4 h-4 animate-pulse" fill="currentColor" />}
                        </div>
                    </>
                ) : (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50/50 to-transparent"></div>
                )}

                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-5">
                            {/* Profile Image */}
                            <div className={`relative p-0.5 rounded-[22px] overflow-hidden ${isCyber ? 'bg-gradient-to-br from-cyber-blue to-cyber-purple' :
                                    isBulkAny ? 'bg-white/10 border border-white/20' :
                                        'bg-slate-200 shadow-inner'
                                }`}>
                                <img
                                    src={data.profilePicture}
                                    alt={data.name}
                                    className="w-20 h-20 rounded-[20px] bg-white object-cover shadow-2xl"
                                />
                            </div>

                            <div className="flex flex-col justify-center pt-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                    <h2 className={`font-display font-black text-2xl tracking-tight leading-none ${isCyber ? 'text-glow' :
                                            isBulkAny ? 'uppercase tracking-wider' :
                                                'text-slate-900'
                                        }`}>
                                        {data.name}
                                    </h2>
                                    {data.verified && (
                                        <Verified className={`w-5 h-5 ${isCyber ? 'text-cyber-blue' : isBulkAny ? 'text-white' : 'text-blue-500'}`} />
                                    )}
                                </div>
                                <p className={`text-base mt-1 ${isCyber ? 'text-cyber-blue/80' :
                                        isBulkAny ? 'text-white/40 font-mono' :
                                            'text-slate-400 font-medium'
                                    }`}>
                                    @{data.username.replace('@', '')}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1.5 pt-1">
                            <Twitter className={`w-6 h-6 ${isCyber ? 'text-cyber-blue' : isBulkAny ? 'text-white' : 'text-slate-300'}`} />
                            <span className={`text-[9px] uppercase tracking-[0.25em] font-black whitespace-nowrap ${isCyber ? 'text-cyber-blue/80' :
                                    isBulkAny ? 'text-white/40' :
                                        'text-slate-400'
                                }`}>
                                Access Card
                            </span>
                        </div>
                    </div>

                    <div className="px-1">
                        <p className={`text-sm line-clamp-2 leading-relaxed font-medium ${isCyber ? 'text-white/70' :
                                isBulkAny ? 'text-white/90 drop-shadow-md' :
                                    'text-slate-600'
                            }`}>
                            {data.bio}
                        </p>
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="space-y-2 font-display text-left">
                            <div className="flex items-center gap-3">
                                <Users className={`w-4 h-4 ${isCyber ? 'text-cyber-purple' : isBulkAny ? 'text-white/40' : 'text-slate-400'}`} />
                                <span className={`text-[11px] uppercase tracking-widest font-black ${isCyber ? 'text-white/50' : isBulkAny ? 'text-white/60' : 'text-slate-400'
                                    }`}>
                                    <strong className={isCyber ? 'text-white' : isBulkAny ? 'text-white text-base mr-1' : 'text-slate-800 text-sm mr-1'}>
                                        {data.followersCount.toLocaleString()}
                                    </strong> Members
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className={`w-4 h-4 ${isCyber ? 'text-cyber-purple' : isBulkAny ? 'text-white/40' : 'text-slate-400'}`} />
                                <span className={`text-[11px] uppercase tracking-widest font-black ${isCyber ? 'text-white/50' : isBulkAny ? 'text-white/60' : 'text-slate-400'
                                    }`}>
                                    EST <strong className={isCyber ? 'text-white ml-1' : isBulkAny ? 'text-white ml-2 text-sm' : 'text-slate-800 ml-2 text-sm'}>
                                        {data.memberSince ? data.memberSince.toUpperCase() : 'JAN 2024'}
                                    </strong>
                                </span>
                            </div>
                        </div>

                        <div className={`p-2 rounded-2xl bg-white shadow-xl ${isCyber ? 'opacity-80' : isBulkAny ? 'invert opacity-95' : 'opacity-100 border border-slate-100'}`}>
                            <QRCodeSVG
                                value={`https://twitter.com/${data.username.replace('@', '')}`}
                                size={52}
                                level="M"
                                includeMargin={false}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Bar Decor */}
                {isBulkAny && (
                    <div className="absolute bottom-2 left-6 right-6 h-px bg-white/10 z-0"></div>
                )}
            </div>
        </motion.div>
    );
};
