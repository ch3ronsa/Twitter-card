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
            className="relative p-1 rounded-3xl group"
        >
            {/* Background Glows */}
            {isCyber && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            )}
            {isBulk1 && (
                <div className="absolute -inset-1 bg-white/5 rounded-3xl blur-xl opacity-50"></div>
            )}
            {isBulk2 && (
                <div className="absolute -inset-1 bg-purple-500/10 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            )}
            {isBulk3 && (
                <div className="absolute -inset-1 bg-blue-500/10 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            )}
            {isBulk4 && (
                <div className="absolute -inset-1 bg-pink-500/10 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            )}

            <div
                ref={cardRef}
                className={`relative w-[350px] md:w-[400px] aspect-[1.586/1] rounded-3xl overflow-hidden ${isCyber ? 'cyber-glass text-white grain' :
                    isBulkAny ? 'bg-black text-white border border-white/10' :
                        'minimal-glass text-slate-800 grain'
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
                    <div className="absolute top-0 right-0 w-full h-1 bg-slate-100"></div>
                )}

                <div className="p-6 h-full flex flex-col justify-between relative z-10">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-4">
                            {/* Profile Image */}
                            <div className={`relative p-0.5 rounded-2xl ${isCyber ? 'bg-gradient-to-br from-cyber-blue to-cyber-purple' :
                                isBulkAny ? 'bg-white/10 border border-white/20' :
                                    'bg-slate-200'
                                }`}>
                                <img
                                    src={data.profilePicture}
                                    alt={data.name}
                                    className="w-16 h-16 rounded-2xl bg-white object-cover shadow-2xl"
                                />
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-1">
                                    <h2 className={`font-display font-bold text-xl tracking-tight ${isCyber ? 'text-glow' :
                                        isBulkAny ? 'uppercase tracking-widest' :
                                            ''
                                        }`}>
                                        {data.name}
                                    </h2>
                                    {data.verified && (
                                        <Verified className={`w-4 h-4 ${isCyber ? 'text-cyber-blue' : isBulkAny ? 'text-white' : 'text-blue-500'}`} />
                                    )}
                                </div>
                                <p className={`text-sm ${isCyber ? 'text-cyber-blue/80' :
                                    isBulkAny ? 'text-white/40 font-mono' :
                                        'text-slate-500'
                                    }`}>
                                    {data.username}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                            <Twitter className={`w-5 h-5 ${isCyber ? 'text-cyber-blue' : isBulkAny ? 'text-white' : 'text-slate-300'}`} />
                            <span className={`text-[7px] uppercase tracking-[0.2em] font-black ${isCyber ? 'text-cyber-blue/80' :
                                    isBulkAny ? 'text-white/40' :
                                        'text-slate-400'
                                }`}>
                                Access Card
                            </span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className={`text-sm line-clamp-2 leading-relaxed ${isCyber ? 'text-white/70' :
                            isBulkAny ? 'text-white/90 font-medium drop-shadow-md' :
                                'text-slate-600'
                            }`}>
                            {data.bio}
                        </p>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                        <div className="space-y-1.5 font-display">
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
                                <Users className={`w-3 h-3 ${isCyber ? 'text-cyber-purple' : isBulkAny ? 'text-white/60' : 'text-slate-400'}`} />
                                <span className={isCyber ? 'text-white/50' : isBulkAny ? 'text-white/60' : 'text-slate-400'}>
                                    <strong className={isCyber ? 'text-white' : isBulkAny ? 'text-white' : 'text-slate-700'}>
                                        {data.followersCount.toLocaleString()}
                                    </strong> Members
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
                                <Calendar className={`w-3 h-3 ${isCyber ? 'text-cyber-purple' : isBulkAny ? 'text-white/60' : 'text-slate-400'}`} />
                                <span className={isCyber ? 'text-white/50' : isBulkAny ? 'text-white/60' : 'text-slate-400'}>
                                    EST <strong className={isCyber ? 'text-white' : isBulkAny ? 'text-white' : 'text-slate-700'}>{data.memberSince}</strong>
                                </span>
                            </div>
                        </div>

                        <div className={`p-1 rounded-lg bg-white ${isCyber ? 'opacity-80' : isBulkAny ? 'invert opacity-90' : 'opacity-100 border border-slate-200'}`}>
                            <QRCodeSVG
                                value={`https://twitter.com/${data.username.replace('@', '')}`}
                                size={40}
                                level="L"
                                includeMargin={false}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Bar */}
                {isBulkAny ? (
                    <div className="absolute bottom-2 left-6 right-6 flex justify-between items-center text-[7px] uppercase tracking-[0.2em] font-black border-t border-white/10 pt-2 text-white/40">
                        <span>One Exchange</span>
                        <div className="flex items-center gap-1">
                            <Star size={6} fill="currentColor" />
                            <span>Bulk</span>
                        </div>
                        <span>Infinite Markets</span>
                    </div>
                ) : (
                    <div className={`absolute bottom-0 left-0 w-full h-1.5 ${isCyber ? 'bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink' : 'bg-slate-200'}`}></div>
                )}
            </div>
        </motion.div>
    );
};
