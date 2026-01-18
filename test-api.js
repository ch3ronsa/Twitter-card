async function test() {
    const apiKey = "12ac455460msh09eefa2a0133037p1bfa71jsnbcd328ca56bb";
    const apiHost = "twitter241.p.rapidapi.com";
    const username = "elonmusk";
    const url = `https://${apiHost}/user?username=${username}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: { 'X-RapidAPI-Key': apiKey, 'X-RapidAPI-Host': apiHost },
    });

    const data = await response.json();
    const userResult = data.result?.data?.user?.result;

    console.log('--- CORE & VERIFICATION DEBUG ---');
    console.log('Core Keys:', userResult.core ? Object.keys(userResult.core) : 'No core');
    console.log('Verification Keys:', userResult.verification ? Object.keys(userResult.verification) : 'No verification');
    if (userResult.core) console.log('Core Content:', JSON.stringify(userResult.core));
}
test();
