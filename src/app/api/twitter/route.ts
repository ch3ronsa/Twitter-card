import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    const apiKey = process.env.RAPIDAPI_KEY;
    const apiHost = process.env.RAPIDAPI_HOST || 'twitter241.p.rapidapi.com';

    if (!apiKey) {
        return NextResponse.json({ error: 'API key is not configured' }, { status: 500 });
    }

    try {
        // Current valid endpoint for twitter241 API
        const response = await fetch(`https://${apiHost}/user?username=${username}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': apiHost,
            },
        });

        if (!response.ok) {
            return NextResponse.json({ error: `API Error: ${response.status}` }, { status: response.status });
        }

        const data = await response.json();
        const userResult = data.result?.data?.user?.result;

        if (!userResult) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(normalizeProfile(userResult));

    } catch (error) {
        console.error('Twitter API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

function normalizeProfile(user: any) {
    // Mapping from twitter241 GraphQL structure
    const legacy = user.legacy || {};
    const core = user.core || {};

    const name = core.name || legacy.name || '';
    const screenName = core.screen_name || legacy.screen_name || '';
    const description = legacy.description || '';
    const profileImageUrl = user.avatar?.image_url || legacy.profile_image_url_https || '';
    const followersCount = legacy.followers_count || 0;
    const createdAt = core.created_at || legacy.created_at || '';
    const verified = user.is_blue_verified || user.verification?.verified || legacy.verified || false;

    let memberSince = 'Joined';
    if (createdAt) {
        const date = new Date(createdAt);
        memberSince = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    }

    return {
        name: name,
        username: `@${screenName}`,
        bio: description,
        profilePicture: profileImageUrl.replace('_normal', '_400x400'),
        followersCount: followersCount,
        memberSince: memberSince,
        verified: verified,
    };
}
