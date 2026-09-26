# SÀNA STYLE — 1-Week Intensive Registration Website

A polished static registration landing page designed for GitHub Pages.

## Included
- Responsive landing page
- SÀNA STYLE brand system
- Tutor photo supplied by the client
- Training curriculum section
- Payment/registration modal
- Account number copy button
- Receipt file selection step
- Congratulations + WhatsApp group reveal
- Direct WhatsApp link to tutor
- Remote Pexels imagery for sewing/fashion visuals

## Important: receipt upload
GitHub Pages is static hosting. It cannot securely receive and store uploaded payment receipts by itself.

The current version intentionally does **not** pretend to verify or store the receipt. When a student selects a receipt, the browser confirms the file selection and reveals the WhatsApp group link.

For a real production workflow, connect the receipt step to a backend/form service such as a serverless function, Supabase, Firebase, Formspree, or another service that can securely store the receipt and send a notification to Hassanat. Then reveal the WhatsApp link only after the backend confirms successful submission.

## Deploy to GitHub Pages
1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose your main branch and `/root`.
6. Save. GitHub will provide the public website URL.

## Registration window
Registration opens immediately on 26 September 2026 and closes on 19 October 2026 at 11:59 PM Nigeria time. The page includes a live countdown and automatically disables registration after the deadline.

The actual 1-week training/class dates were not provided, so the page does not invent them.

## Brand kit
Primary Wine: #7A2448
Deep Wine: #55152F
Rose: #B94770
Blush: #F9EEF2
Cream: #FFF9F5
Gold Accent: #D5A85A
Ink: #251B1F
Muted Text: #74676C

Typography:
- Display: Playfair Display
- Body/UI: DM Sans

Suggested brand direction: feminine, premium, confident, educational, modern African fashion.
