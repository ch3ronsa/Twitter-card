export interface TwitterUserData {
    name: string;
    username: string;
    bio: string;
    profilePicture: string;
    followersCount: number;
    memberSince: string;
    verified: boolean;
}

const mockBios = [
    "Building the future of the decentralized web. 🚀 | Tech Enthusiast | Coffee Lover",
    "Digital Artist & Creative Director. Exploring the intersection of AI and Art. ✨",
    "Full-stack Developer. Open Source Contributor. I tweet about Rust and React.",
    "Founder @ Stealth. $BTC and $ETH maximalist. Living in the future.",
    "Minimalist. Designer. Thinker. Currently creating something new.",
];

export const generateMockUserData = (username: string): TwitterUserData => {
    const seed = username.length;
    return {
        name: username.charAt(0).toUpperCase() + username.slice(1),
        username: `@${username.toLowerCase()}`,
        bio: mockBios[seed % mockBios.length],
        profilePicture: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
        followersCount: Math.floor(Math.random() * 50000) + 1000,
        memberSince: "Oct 2021",
        verified: seed % 3 === 0,
    };
};
