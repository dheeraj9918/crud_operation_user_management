# User Registration and Management with CRUD Operations (MERN Stack)

This project implements a CRUD (Create, Read, Update, Delete) application for managing user registration, updating user information, and deleting users. It is built using the MERN stack, which consists of MongoDB, Express.js, React.js, and Node.js.

## Features

- **Register User**: Create a new user account with necessary details.
- **Update User**: Modify existing user information.
- **Delete User**: Remove a user from the database.
- **Read Users**: View a list of all registered users.

## Technologies Used

- **MongoDB**: Database for storing user data.
- **Express.js**: Backend framework for handling API requests.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for executing server-side code.

## Prerequisites

- Node.js (v14 or above)
- MongoDB (local or cloud instance)
- npm (Node package manager)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/dheeraj9918/crud_operation_user_management.git
    cd mern-crud-user-management
    ```

2. **Install backend dependencies:**

    ```bash
    cd server
    npm install
    ```

3. **Install frontend dependencies:**

    ```bash
    cd ../client
    npm install
    ```

4. **Configure the environment variables:**

    Create a `.env` file in the `server` directory and add the following variables:

    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

## Usage

1. **Start the backend server:**

    ```bash
    cd server
    npm start
    ```

    The server will run on `http://localhost:5000`.

2. **Start the frontend development server:**

    ```bash
    cd client
    npm start
    ```

    The React app will run on `http://localhost:3000`.

## API Endpoints

- **GET /api/getAll**: Retrieve a list of all users.
- **POST /api/add**: Create a new user.
- **PUT /api/update/:id**: Update user information by ID.
- **DELETE /api/delete/:id**: Delete a user by ID.

## Folder Structure

mern-crud-user-management/
├── server/ # Express backend
│ ├── controllers/ # Controller functions for handling requests
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ ├── .env # Environment variables
│ ├── index.js # Entry point of the backend
├── client/ # React frontend
│ ├── src/ # Source files
│ ├── public/ # Public files
│ ├── package.json # Frontend dependencies
├── README.md # Project documentation
