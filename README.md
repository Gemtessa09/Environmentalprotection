# Haramaya Environmental Club 3D

Full-stack web app for Haramaya University Environmental Law and Policy Center. Includes an Express/MongoDB API and a React + Tailwind CSS front-end with a Three.js hero scene.

## Stack

- Backend: Node.js, Express, MongoDB (Mongoose), JWT Authentication, bcryptjs
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
4. Seed admin user:
   - `cd backend && npm run seed:admin`
5. Run local dev servers:
   - Backend: `cd backend && npm run dev`
   - Frontend: `cd frontend && npm run dev` (or `npm start`)

## Add the logo

Save the Haramaya University logo image as `frontend/public/haramaya-logo.png`. The navbar and footer will display it automatically.



## User Roles & Permissions

### Roles

- **Member**: Regular users who can view content and register
- **Staff**: Can manage members and view system statistics
- **Admin**: Full system access, can manage all users, clubs, and system settings

### Default Admin Account

After running `npm run seed:admin`:



## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new member
- `POST /api/auth/login` - Login with email/password
- `GET /api/auth/profile` - Get current user profile
- `PUT /api/auth/profile` - Update user profile

### Members

- `GET /api/members` - Get all active members (public)
- `GET /api/members/:id` - Get member by ID (authenticated)
- `PUT /api/members/:id` - Update member (own profile or admin)
- `DELETE /api/members/:id` - Delete member (staff/admin)
- `GET /api/members/admin/recent-registrations` - Recent registrations (staff/admin)

### Admin Only

- `GET /api/admin/stats` - System statistics
- `GET /api/admin/members` - All members with filtering
- `PUT /api/admin/members/:id` - Update member role/status
- `DELETE /api/admin/members/:id` - Delete member
- `GET /api/admin/clubs` - All clubs with filtering
- `PUT /api/admin/clubs/:id` - Update club status
- `POST /api/admin/create-staff` - Create staff member

### Clubs

- `GET /api/clubs` - Get all clubs
- `POST /api/clubs` - Create club (authenticated)
- `GET /api/clubs/:id` - Get club by ID
- `PUT /api/clubs/:id` - Update club (owner or admin)
- `DELETE /api/clubs/:id` - Delete club (owner or admin)

## Scripts

- Backend: `npm run dev` (nodemon), `npm start`, `npm run seed:admin`
- Frontend: `npm start`, `npm run build`, `npm test`

## Project structure

See tree in the user request for folders.

## Security Features

- JWT token authentication
- Password hashing with bcryptjs
- Role-based access control (RBAC)
- API key fallback for legacy support
- Input validation and sanitization
- CORS protection
- Helmet security headers

## Licensing

Content is provided for demonstration; update with your institutional policies.
