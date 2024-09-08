# User Management API

This project is a RESTful API for user management, which allows for user authentication, creation, updating, and deletion of users. The API uses JWT for secure authentication and role-based authorization.

## Features

- User signup and login with JWT-based authentication
- Role-based authorization (e.g., admin-only routes)
- CRUD operations for users (get, create, update, delete)
- Password hashing for security
- Admin privileges for creating and managing users with different roles

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Token) for authentication
- bcrypt.js for password hashing

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/naziranwer/yesItLab_server.git
   cd yesItLab_server
   ```
2. **Install the dependencies:**
   ```bash
      npm install
   ```
3. **Create a .env file in the root directory and add the following environment variables:**
   ```bash
   JWT_SECRET=your-secret-key
   MONGO_URI=your-mongo-db-uri
   ```
4. **Start the server:**
   ```bash
      npm start
   ```
