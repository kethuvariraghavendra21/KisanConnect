# KisanConnect Complete v5

Complete SIH-ready agriculture procurement demo with a login-first experience.

## Main flow
Login/Register → Agriculture animation → Farmer Dashboard / Officer Dashboard.

## Working features
- Secure-style farmer registration/login/logout
- HttpOnly JWT session cookie
- Rate-limited authentication
- Helmet security headers
- Animated agriculture splash and dashboard transitions
- Farmer overview dashboard
- Digital procurement token creation
- Live queue/ETA calculation
- Token cancellation
- Procurement center search/filter
- Market prices with update timestamps
- Officer price editing
- Officer queue/status controls
- Officer token status controls
- Farmer notifications
- Community posts
- Weather widget with live Open-Meteo fallback
- Multilingual selector (English/Telugu/Hindi UI labels and assistant responses)
- Rule-based virtual assistant that works without an API key
- Dark/light mode
- Responsive design

## Run
1. Install Node.js 20+ (Node.js 24 is supported).
2. Extract this folder.
3. Double-click START.bat.
4. Browser opens at http://localhost:4000.

## Officer demo
Mobile: 9000000000
Password: Admin@12345

## Notes
Market prices are local demo records and are editable from the officer dashboard. Weather uses Open-Meteo when internet access is available and a safe fallback otherwise. Real government procurement feeds, OTP/SMS/WhatsApp, Aadhaar/KYC and production databases require external credentials/integrations and are not fabricated in this demo.

## v6 fixes
- Weather now requests the browser's current GPS coordinates and sends them to Open-Meteo.
- If location permission is denied/unavailable, the app uses a clearly labelled fallback reading.
- Market Refresh now calls a real backend refresh endpoint. Without an external market provider, it uses a demo feed with a fresh timestamp and simulated reference movement; this is not presented as an official live government price feed.
- English/Telugu/Hindi switching now updates the complete interface, including labels, headings, buttons, placeholders, token journey, market/weather status, notifications and assistant responses, and persists the selected language for the signed-in user.
- Language changes are saved through `/api/profile/language`.
