// ==========================================
// TON CONNECT MANIFEST ENDPOINT
// ==========================================
app.get('/tonconnect-manifest.json', (req, res) => {
    const appUrl = process.env.APP_URL || "https://goldhuntpro.vercel.app";
    
    res.json({
        "url": appUrl,
        "name": "GoldHunt Mining",
        "iconUrl": `${appUrl}/icon.png`,
        // IMPORTANT: These URLs must be accessible and return proper content
        "termsOfUseUrl": `${appUrl}/terms.html`,
        "privacyPolicyUrl": `${appUrl}/privacy.html`
    });
});
