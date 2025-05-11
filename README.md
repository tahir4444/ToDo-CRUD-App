
# 📝 ToDo CRUD App (React + Node.js + MongoDB)

A full-stack ToDo List application with user registration, login, role-based UI, and CRUD operations using:

- **Frontend**: React 18+, React Router v6, Context API, Hooks
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT Auth
- **Roles**: Admin & User

---

## 📁 Project Structure

```
todo-crud/
├── backend/      # Node.js + Express API
└── frontend/     # React 18+ app with role-based UI
```

---

## 🚀 Features

- User Registration & Login (JWT-based)
- Role-based UI (Admin vs. User)
- CRUD operations for Todos
- Protected API routes
- Modern React stack (Hooks, Context, Router v6)
- MongoDB for data storage

---

## ⚙️ Prerequisites

- Node.js (v18 or newer)
- MongoDB (local or Atlas)
- Postman (optional, for API testing)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-crud.git
cd todo-crud
```

---

### 2. Backend Setup

```bash
cd backend
cp .env.example .env
# Then fill in MONGO_URI and JWT_SECRET in .env

npm install
npm start
```

- Server runs on: `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

- App runs on: `http://localhost:5173`

---

## 🔐 Environment Variables

### `.env` (for `backend/`)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/todo_crud_app
JWT_SECRET=your_jwt_secret_key_here
```

---

## 🔌 API Endpoints

### Auth Routes

| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| POST   | `/api/users/register` | Register user      |
| POST   | `/api/users/login`    | Login user         |

### Todo Routes (require JWT)

| Method | Endpoint        | Description        |
|--------|-----------------|--------------------|
| GET    | `/api/todos`    | Get all todos      |
| POST   | `/api/todos`    | Create new todo    |
| PUT    | `/api/todos/:id`| Update a todo      |
| DELETE | `/api/todos/:id`| Delete a todo      |

---

## 🔄 Role-Based UI

- **Admin**:
  - Can manage all todos.
  - See all users’ todos (optional future feature).
- **User**:
  - Can only manage their own todos.

---

## 🧪 Postman Collection

1. Import `todo-crud-backend.postman_collection.json` into Postman.
2. Replace `{{authToken}}` with the JWT from the login request.

---

## 👨‍💻 Author

Made with ❤️ by [Mohd Tahir](https://github.com/tahir4444/todo-app-crud)  
> React + Node.js Full Stack App with a clean codebase and modular structure.
