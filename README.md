# Haramaya Environmental Club 3D

Full-stack web app for Haramaya University Environmental Protection Club. Includes an Express/MongoDB API and a React + Tailwind CSS front-end with a Three.js hero scene.

## Stack

- Backend: Node.js, Express, MongoDB (Mongoose), JWT-like API key auth
- Frontend: React, React Router, Context, axios, Three.js, Tailwind CSS

## Quick start

1. Clone the repo and install deps in both apps:
   - `cd backend && npm install`
   - `cd ../frontend && npm install`
2. Create backend `.env` (see `.env.example`).
3. Make sure MongoDB is running locally (Windows):
   - Install MongoDB Community Server
   - Start the MongoDB service (or run `mongod`)
   - Recommended URL (Windows): `mongodb://127.0.0.1:27017` (avoids IPv6 `::1` issues)
4. Run local dev servers:
   - Backend: `cd backend && npm run dev`
   - Frontend: `cd frontend && npm run dev` (or `npm start`)

## Add the logo

Save the Haramaya University logo image as `frontend/public/haramaya-logo.png`. The navbar and footer will display it automatically.

## Backend env

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/club
API_KEY=changeme
CLIENT_URL=http://localhost:3000
```

## Scripts

- Backend: `npm run dev` (nodemon), `npm start`
- Frontend: `npm start`, `npm run build`, `npm test`

## Project structure

See tree in the user request for folders.

## Licensing

Content is provided for demonstration; update with your institutional policies.
