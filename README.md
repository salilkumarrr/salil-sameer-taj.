# Anand Sweets Online Store

A frontend-only React + Tailwind CSS sweets store demo built with Vite.

## Features
- Responsive product catalogue with category filters and search
- Product size selection (250g, 500g, 1kg; Rasmalai uses piece options)
- Cart drawer with quantity controls and item removal
- Cart persistence using browser localStorage
- Checkout form with required-field, 10-digit mobile and 6-digit pincode validation
- Simulated order confirmation and saved last order
- No backend, API, payment gateway or real delivery

## Run locally
1. Install Node.js (LTS).
2. Extract this project folder.
3. Open a terminal in the project folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed by Vite.

## Production build
Run `npm run build`. The production files will be created in `dist/`.

## Notes
- Product names, descriptions and prices are sample/demo content, not verified Anand Sweets catalogue data.
- Product photos load from Unsplash URLs, so an internet connection is needed for those images.
- Orders are simulated only. No actual payment or delivery occurs.
- Cart and last-order data are stored only in the current browser's localStorage.
