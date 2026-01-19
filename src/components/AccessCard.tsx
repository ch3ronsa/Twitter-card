import React from 'react';
import { TwitterUserData } from '@/lib/mockData';
import { QRCodeSVG } from 'qrcode.react';
import { Verified, Calendar, Users, Twitter, Star, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

interface AccessCardProps {
    data: TwitterUserData;
    theme: 'cyberpunk' | 'minimalist' | 'bulk1' | 'bulk2';
    cardRef: React.RefObject<HTMLDivElement | null>;
}

export const AccessCard: React.FC<AccessCardProps> = ({ data, theme, cardRef }) => {
    const isCyber = theme === 'cyberpunk';
    const isBulk1 = theme === 'bulk1';
    const isBulk2 = theme === 'bulk2';

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
                <div className="absolute -inset-2 bg-gradient-to-b from-white/10 to-transparent rounded-[40px] blur-2xl opacity-50"></div>
            )}
            {isBulk2 && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            )}

            <div
                ref={cardRef}
                className={`relative w-[350px] md:w-[400px] aspect-[1.586/1] rounded-3xl overflow-hidden grain ${isCyber ? 'cyber-glass text-white' :
                        isBulk1 ? 'bulk1-glass text-white border-white/20' :
                            isBulk2 ? 'bulk2-glass text-white border-white/10' :
                                'minimal-glass text-slate-800'
                    }`}
            >
                {/* Background Image for Bulk 2 */}
                {isBulk2 && (
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/bulk-bg.png"
                            alt="Bulk BG"
                            className="w-full h-full object-cover opacity-40 scale-110 group-hover:scale-100 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
                    </div>
                )}

                {/* Decorative Elements */}
                {isCyber ? (
                    <>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-purple/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>
                    </>
                ) : isBulk1 ? (
                    <>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-white/5 to-transparent"></div>
                        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-1 h-48 bg-white/20 blur-sm"></div>
                        <Star className="absolute top-4 right-4 w-4 h-4 text-white/40 animate-pulse" />
                    </>
                ) : isBulk2 ? (
                    <>
                        <div className="absolute top-2 right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <Rocket className="absolute top-4 right-4 w-4 h-4 text-white/20 -rotate-45" />
                    </>
                ) : (
                    <div className="absolute top-0 right-0 w-full h-1 bg-slate-100"></div>
                )}

                <div className="p-6 h-full flex flex-col justify-between relative z-10">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-4">
                            {/* Profile Image */}
                            <div className={`relative p-1 rounded-2xl ${isCyber ? 'bg-gradient-to-br from-cyber-blue to-cyber-purple' :
                                    isBulk1 ? 'bg-white/10 border border-white/20' :
                                        isBulk2 ? 'bg-white/5 border border-white/10 backdrop-blur-sm' :
                                            'bg-slate-200'
                                }`}>
                                <img
                                    src={data.profilePicture}
                                    alt={data.name}
                                    className="w-16 h-16 rounded-xl bg-white object-cover shadow-2xl"
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-1">
                                    <h2 className={`font-display font-bold text-xl tracking-tight ${isCyber ? 'text-glow' :
                                            isBulk1 ? 'uppercase tracking-widest' :
                                                isBulk2 ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' :
                                                    ''
                                        }`}>
                                        {data.name}
                                    </h2>
                                    {data.verified && (
                                        <Verified className={`w-4 h-4 ${isCyber ? 'text-cyber-blue' : isBulk1 ? 'text-white' : isBulk2 ? 'text-blue-400' : 'text-blue-500'}`} />
                                    )}
                                </div>
                                <p className={`text-sm ${isCyber ? 'text-cyber-blue/80' :
                                        isBulk1 ? 'text-white/40 font-mono' :
                                            isBulk2 ? 'text-blue-300/40 font-mono italic' :
                                                'text-slate-500'
                                    }`}>
                                    {data.username}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                            <Twitter className={`w-5 h-5 ${isCyber ? 'text-cyber-blue' : isBulk1 ? 'text-white' : isBulk2 ? 'text-blue-400' : 'text-slate-300'}`} />
                            {(isBulk1 || isBulk2) && <span className="text-[8px] uppercase tracking-tighter text-white/20">Identity Card</span>}
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className={`text-sm line-clamp-2 leading-relaxed ${isCyber ? 'text-white/70' :
                                isBulk1 ? 'text-white/60 font-medium' :
                                    isBulk2 ? 'text-white/80 drop-shadow-sm' :
                                        'text-slate-600'
                            }`}>
                            {data.bio}
                        </p>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                        <div className="space-y-1.5 font-display">
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
                                <Users className={`w-3 h-3 ${isCyber ? 'text-cyber-purple' : isBulk1 || isBulk2 ? 'text-white/60' : 'text-slate-400'}`} />
                                <span className={isCyber ? 'text-white/50' : isBulk1 || isBulk2 ? 'text-white/40' : 'text-slate-400'}>
                                    <strong className={isCyber ? 'text-white' : isBulk1 || isBulk2 ? 'text-white' : 'text-slate-700'}>
                                        {data.followersCount.toLocaleString()}
                                    </strong> Members
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
                                <Calendar className={`w-3 h-3 ${isCyber ? 'text-cyber-purple' : isBulk1 || isBulk2 ? 'text-white/60' : 'text-slate-400'}`} />
                                <span className={isCyber ? 'text-white/50' : isBulk1 || isBulk2 ? 'text-white/40' : 'text-slate-400'}>
                                    EST <strong className={isCyber ? 'text-white' : isBulk1 || isBulk2 ? 'text-white' : 'text-slate-700'}>{data.memberSince}</strong>
                                </span>
                            </div>
                        </div>

                        <div className={`p-1.5 rounded-lg bg-white ${isCyber ? 'opacity-80' : isBulk1 ? 'invert' : isBulk2 ? 'opacity-90 grayscale shadow-lg' : 'opacity-100 border border-slate-100'}`}>
                            <QRCodeSVG
                                value={`https://twitter.com/${data.username.replace('@', '')}`}
                                size={44}
                                level="L"
                                includeMargin={false}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Bar */}
                {isBulk1 || isBulk2 ? (
                    <div className={`absolute bottom-2 left-6 right-6 flex justify-between items-center text-[7px] uppercase tracking-[0.2em] font-bold border-t pt-2 ${isBulk1 ? 'text-white/20 border-white/5' : 'text-blue-400/30 border-white/5'
                        }`}>
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
