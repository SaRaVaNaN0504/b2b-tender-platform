# BidSphere - B2B Tender Management Platform

BidSphere is a modern B2B Tender Management platform that allows companies to post tenders and vendors to view and apply for opportunities. The platform is built using modern web technologies with a clean and responsive user interface.

## 🚀 Features

- Company Registration & Login with JWT Authentication
- Company Profile Creation and Management
- Tender Creation and Management
- Public Tender Listing Page
- Secure API Integration
- Role-Based Access (Company-only tender creation)
- Fully responsive UI

## 🛠️ Tech Stack

This project is built with:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Supabase (PostgreSQL)](https://supabase.com/)

## 🔧 Getting Started

To run this project locally, follow the steps below.

### 📦 Backend Setup

```bash
# Step 1: Navigate to the backend folder
cd backend

# Step 2: Install dependencies
npm install

# Step 3: Create a .env file with your Supabase DB URL and JWT secret
# .env
DATABASE_URL=postgresql://postgres:<your-password>@<your-db-url>:5432/postgres
JWT_SECRET=your_jwt_secret
PORT=5000

# Step 4: Run the server
npm run dev


🌐 Frontend Setup
bash
Copy
Edit
# Step 1: Navigate to the frontend folder
cd frontend/bid-sphere-platform-main

# Step 2: Install dependencies
npm install

# Step 3: Run the development server
npm run dev



📬API Endpoints

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| POST   | /api/auth/register | Register a new user       |
| POST   | /api/auth/login    | Login and receive JWT     |
| GET    | /api/company/me    | Get logged-in user info   |
| POST   | /api/company       | Create company profile    |
| POST   | /api/tender        | Create a new tender       |
| GET    | /api/tender        | Public tender listings    |
| GET    | /api/tender/my     | Tenders by logged-in user |


📁 Folder Structure

b2b-tender-platform/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── db/
│   ├── .env
│   └── server.js
└── frontend/
    └── bid-sphere-platform-main/
        ├── src/
        ├── index.html
        ├── vite.config.ts
        └── ...


🎯 Deployment
You can deploy this project using platforms like:

Vercel (Frontend)

Render / Railway / [Supabase Edge Functions] (Backend & DB)



