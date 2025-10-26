 # 🛒 Pure Harvest — Multi-Role E‑Commerce (MERN)

 Pure Harvest is a full-stack e-commerce platform that connects local farmers directly with consumers. It demonstrates a real-world MERN (MongoDB, Express, React, Node) stack application with multi-role capabilities for Users, Farmers, and Admins.

 This repository contains both the Client (React) and Server (Node/Express) applications.

 --

 ## 🔎 Quick links

 - Frontend (Live): https://pureharvest-mern.vercel.app/
 - Backend (Live API): https://e-commerce-mern-jdyl.onrender.com
 - Repo: https://github.com/olapuajay/purehavest_e-commerce

 --

 ## 🚀 Project summary

 - Purpose: Allow farmers to list and manage farm products and consumers to browse, purchase, and track orders.
 - Audience: Customers, Farmers, and Admins (for moderation and management).
 - Key differentiator: Multi-role flows (farmer onboarding & product approval) and an admin moderation dashboard.

 --

 ## ✨ Features & Functionality

 Shared features
 - Authentication (JWT) for Users, Farmers, and Admins
 - Image uploads (Cloudinary)
 - Role-based access control

 User (Customer)
 - Browse products by category, search and filter
 - Add to cart, update quantity, remove items
 - Checkout using Razorpay integration
 - View order history and order status

 Farmer
 - Register as a farmer and manage profile
 - Add, edit and delete products (with images)
 - View orders placed for their products
 - Products go through admin approval before listing (optional workflow)

 Admin
 - Admin dashboard to manage products, farmers, and orders
 - Approve/reject products submitted by farmers
 - View all user and farmer data and order metrics

 --

 ## �️ Tech stack

 - Frontend: React, React Router, Context API, Axios, Tailwind CSS
 - Backend: Node.js, Express.js
 - Database: MongoDB (Atlas) with Mongoose
 - Authentication: JWT, bcrypt
 - File uploads: Multer + Cloudinary
 - Payments: Razorpay

 --

 ## 📁 Repository structure (high level)

 - Client/ — React frontend
 - Server/ — Express backend API

 See the project root for the full tree.

 --

 ## 🧩 Environment / Setup

 This repo has separate frontend and backend apps. Basic setup instructions below.

 Prerequisites
 - Node.js 18+ and npm/yarn
 - MongoDB URI (Atlas recommended)
 - Cloudinary account (for image uploads)
 - Razorpay keys (for payments)

 Backend (Server)
 1. cd Server
 2. copy `.env.example` to `.env` and set values (see the example variables below)
 3. npm install
 4. npm run start (or `npm run dev` if a dev script is present)

 Frontend (Client)
 1. cd Client
 2. npm install
 3. npm run dev (or `npm start` depending on package.json)

 Example environment variables (names may vary in your local `.env`):

 - MONGO_URI — MongoDB connection string
 - JWT_SECRET — Secret used for signing JWTs
 - CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET — Cloudinary credentials
 - RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET — Razorpay credentials
 - PORT — Backend port (optional)

 Note: Inspect `Server/config` for exact env variable names used by this project.

 --

  ## 👥 Contributors

 This project was developed by a team:

 | Name    | GitHub |
 | ------- | ------ |
 | Ajay    | [@olapuajay](https://github.com/olapuajay) |
 | Akshaya | [@easyints05](https://github.com/easyints05) |
 | Abhinav | [@abhinavbestha26](https://github.com/abhinavbestha26) |
 | Avinash | [@avinashgadi](https://github.com/avinashgadi) |

 If you'd like your role/PRs highlighted, open a PR updating this section with your details (role, contributions, LinkedIn or personal site).

 --

 ## 🧪 Run & Test (short)

 Start backend then frontend locally. Ensure the frontend's API base URL points to your backend server (check `Client/src` configuration or Axios instances).

 --

 ## 🎯 Deployment

 This project was deployed as:
 - Frontend: Vercel
 - Backend: Render (or another Node host)

 If you wish to redeploy, update environment variables in the host panel (Vercel/Render) and set proper build commands from `package.json` in each folder.

 --

 ## 📜 License

 Specify the project license here (e.g., MIT). If you don't have one yet, add a `LICENSE` file to the repo.

 --

 ## 📝 Notes & next steps

 - Add a short demo GIF showing a user purchase flow.
 - Consider adding CONTRIBUTING.md with PR guidelines and CODE_OF_CONDUCT.md.

