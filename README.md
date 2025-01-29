# 🚀 Next.js To-Do List with Prisma & MongoDB

A full-stack **To-Do List App** built with **Next.js 15 (App Router)**, **Prisma ORM**, and **MongoDB**.  
Supports **CRUD operations** (Create, Read, Update, Delete) and **API integration**.

---

## 📌 Features
✅ **Next.js 15 (App Router)** - Modern file-based routing  
✅ **Prisma ORM** - Type-safe database queries  
✅ **MongoDB Atlas** - Scalable NoSQL database  
✅ **REST API** - Fully functional API with Next.js Route Handlers  
✅ **TailwindCSS** - Beautiful, responsive UI  
✅ **State Management (Zustand)** - Lightweight & efficient  

---

## 📂 **Project Structure**
```
todolist/
│── prisma/             # Prisma schema & migrations
│── public/             # Static assets
│── src/
│   ├── app/            # Next.js App Router structure
│   │   ├── api/        # API routes (Next.js API Handlers)
│   │   ├── data/       # Frontend pages
│   ├── utils/          # Prisma Client & helper functions
│── .env                # Environment variables
│── package.json        # Dependencies
│── tailwind.config.ts  # TailwindCSS configuration
│── tsconfig.json       # TypeScript configuration
```

---

## 🔧 **Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone <repo_url>
cd <project_folder>
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file and add your **MongoDB Connection String**
```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/todolist"
```

### **4️⃣ Set Up Prisma**
```bash
npx prisma generate  # Generate Prisma Client
npx prisma db push   # Sync database schema
```

### **5️⃣ Start the Development Server**
```bash
npm run dev
```
✅ Open [http://localhost:3000](http://localhost:3000) to see your app running.

---

## 🔧 **Common `npm` Commands**
| **Command** | **Description** |
|------------|----------------|
| `npm install` | Install dependencies from `package.json` |
| `npm run dev` | Start the Next.js development server (`localhost:3000`) |
| `npm run build` | Create a production build |
| `npm start` | Run the production server |
| `npx prisma generate` | Generate Prisma Client (after schema changes) |
| `npx prisma db push` | Sync Prisma schema with MongoDB |
| `npx prisma studio` | Open Prisma Studio (GUI for database management) |
| `npx prisma -v` | Check Prisma version |
| `npm run lint` | Run ESLint for code quality |
| `npm run format` | Format code with Prettier |

---

## 📌 **API Endpoints (REST API)**
| Method | Endpoint          | Description             |
|--------|------------------|-------------------------|
| `GET`  | `/api/data`      | Fetch all To-Dos       |
| `POST` | `/api/data`      | Create a new To-Do     |
| `PUT`  | `/api/data`      | Update a To-Do         |
| `DELETE` | `/api/data`   | Delete a To-Do         |

📌 **Example `POST /api/data` Request**
```json
{
  "title": "Learn Next.js",
  "description": "Build a full-stack app with Next.js"
}
```

---

## 🚀 **Deployment**
### ✅ **Deploy to Vercel**
```bash
npm run build
vercel deploy
```

### ✅ **Deploy to Railway**
1. Create a database on **Railway**  
2. Set `DATABASE_URL` in `.env`  
3. Run:
```bash
railway up
```

---

## 📜 **License**
This project is licensed under the **MIT License**.

---

## ✨ **Credits**
Developed by **[Your Name]** 🚀  
Powered by **Next.js, Prisma, and MongoDB**.

---

### 🎯 **Now your README is fully documented & ready to use! 🚀**