"use client";

import React from 'react';
import { TwitterUserData } from '@/lib/mockData';
import { QRCodeSVG } from 'qrcode.react';
import { Verified, Calendar, Users, MapPin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface AccessCardProps {
    data: TwitterUserData;
    theme: 'cyberpunk' | 'minimalist';
    cardRef: React.RefObject<HTMLDivElement | null>;
}

export const AccessCard: React.FC<AccessCardProps> = ({ data, theme, cardRef }) => {
    const isCyber = theme === 'cyberpunk';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative p-1 rounded-3xl group"
        >
            {/* Background Glow for Cyberpunk */}
            {isCyber && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            )}

            <div
                ref={cardRef}
                className={`relative w-[350px] md:w-[400px] aspect-[1.586/1] rounded-3xl overflow-hidden grain ${isCyber ? 'cyber-glass text-white' : 'minimal-glass text-slate-800'
                    }`}
            >
                {/* Decorative Elements */}
                {isCyber ? (
                    <>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-purple/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>
                        <div className="absolute top-4 right-4 flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse delay-75"></div>
                            <div className="w-2 h-2 rounded-full bg-cyber-pink animate-pulse delay-150"></div>
                        </div>
                    </>
                ) : (
                    <div className="absolute top-0 right-0 w-full h-1 bg-slate-100"></div>
                )}

                <div className="p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-4">
                            {/* Profile Image */}
                            <div className={`relative p-1 rounded-2xl ${isCyber ? 'bg-gradient-to-br from-cyber-blue to-cyber-purple' : 'bg-slate-200'}`}>
                                <img
                                    src={data.profilePicture}
                                    alt={data.name}
                                    className="w-16 h-16 rounded-xl bg-white object-cover"
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-1">
                                    <h2 className={`font-display font-bold text-xl ${isCyber ? 'text-glow' : ''}`}>
                                        {data.name}
                                    </h2>
                                    {data.verified && (
                                        <Verified className={`w-4 h-4 ${isCyber ? 'text-cyber-blue' : 'text-blue-500'}`} />
                                    )}
                                </div>
                                <p className={`text-sm ${isCyber ? 'text-cyber-blue/80' : 'text-slate-500'}`}>
                                    {data.username}
                                </p>
                            </div>
                        </div>

                        <Twitter className={`w-6 h-6 ${isCyber ? 'text-cyber-blue' : 'text-slate-300'}`} />
                    </div>

                    <div className="mt-4">
                        <p className={`text-sm line-clamp-2 leading-relaxed ${isCyber ? 'text-white/70' : 'text-slate-600'}`}>
                            {data.bio}
                        </p>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                                <Users className={`w-3 h-3 ${isCyber ? 'text-cyber-purple' : 'text-slate-400'}`} />
                                <span className={isCyber ? 'text-white/50' : 'text-slate-400'}>
                                    <strong className={isCyber ? 'text-white' : 'text-slate-700'}>
                                        {data.followersCount.toLocaleString()}
                                    </strong> followers
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <Calendar className={`w-3 h-3 ${isCyber ? 'text-cyber-purple' : 'text-slate-400'}`} />
                                <span className={isCyber ? 'text-white/50' : 'text-slate-400'}>
                                    Member since <strong className={isCyber ? 'text-white' : 'text-slate-700'}>{data.memberSince}</strong>
                                </span>
                            </div>
                        </div>

                        <div className={`p-1.5 rounded-lg bg-white ${isCyber ? 'opacity-80' : 'opacity-100 border border-slate-100'}`}>
                            <QRCodeSVG
                                value={`https://twitter.com/${data.username.replace('@', '')}`}
                                size={48}
                                level="L"
                                includeMargin={false}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Bar */}
                <div className={`absolute bottom-0 left-0 w-full h-1.5 ${isCyber ? 'bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink' : 'bg-slate-200'
                    }`}></div>
            </div>
        </motion.div>
    );
};
