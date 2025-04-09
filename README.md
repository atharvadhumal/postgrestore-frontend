# Postgrestore

A full-stack e-commerce application with a React frontend and Node.js/Express backend using PostgreSQL via Neon DB.

![Postgrestore](/public/postgrestore.png)

## 📋 Overview

Postgrestore is a modern web application that demonstrates a complete product management system. It features a responsive UI built with React, Tailwind CSS, and DaisyUI, with a robust backend powered by Express.js and PostgreSQL (via Neon DB's serverless solution).

## ✨ Features

- **Product Management**: Create, read, update, and delete products
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS and DaisyUI
- **Real-time Notifications**: Toast notifications for user feedback
- **State Management**: Centralized store using Zustand
- **API Rate Limiting**: Protection against abuse using Arcjet
- **Bot Detection**: Intelligent bot filtering for improved security
- **Database Integration**: PostgreSQL via Neon's serverless database

## 🚀 Tech Stack

### Frontend
- React 19
- React Router Dom
- Tailwind CSS
- DaisyUI
- Zustand (State Management)
- Axios (API Client)
- React Hot Toast (Notifications)
- Lucide React (Icons)
- Framer Motion (Animations)

### Backend
- Node.js
- Express
- PostgreSQL (via Neon DB)
- Arcjet (Security & Rate Limiting)
- Cors
- Helmet (Security Headers)
- Morgan (HTTP Request Logging)

## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher)
- NPM or Yarn
- PostgreSQL database or Neon DB account

### Setup Instructions

#### Clone the repository
```bash
git clone https://github.com/yourusername/postgrestore.git
cd postgrestore
```

#### Backend Setup
1. Navigate to the backend directory:
```bash
cd postgrestore-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
PORT=3000
PGHOST=your-neon-db-host
PGDATABASE=your-db-name
PGUSER=your-db-user
PGPASSWORD=your-db-password
ARCJET_KEY=your-arcjet-key
```

4. Start the backend server:
```bash
npm run dev
```

#### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd postgrestore-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🌟 Usage

Once both the frontend and backend are running, you can:

1. **View Products**: Browse all products on the homepage
2. **Add New Products**: Click "Add Product" button to create new items
3. **Edit Products**: Click the edit icon on a product card to modify details
4. **Delete Products**: Remove products using the delete button

## 🔒 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/products | Get all products |
| GET    | /api/products/:id | Get a specific product |
| POST   | /api/products | Create a new product |
| PUT    | /api/products/:id | Update a product |
| DELETE | /api/products/:id | Delete a product |


## 🌐 Deployment

### Backend Deployment
The backend is configured for deployment on platforms like Render.

### Frontend Deployment
The frontend is built with Vite and can be deployed on Netlify, Vercel, or similar platforms.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Neon DB](https://neon.tech/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Arcjet](https://arcjet.com/)
