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

## All User 
![Screenshot 2024-06-21 183159](https://github.com/dheeraj9918/crud_operation_user_management/assets/136745393/4683abdf-1886-4261-9d0e-854351a24ef0)

## Add User
![Screenshot 2024-06-21 183220](https://github.com/dheeraj9918/crud_operation_user_management/assets/136745393/dd338a0a-22e7-4f08-9955-aa76f45909f5)

## Update user
![Screenshot 2024-06-21 183242](https://github.com/dheeraj9918/crud_operation_user_management/assets/136745393/758c43ac-396d-41e9-b566-0aecf4bef393)

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
![image](https://github.com/dheeraj9918/crud_operation_user_management/assets/136745393/2aa50f3f-f971-437d-87aa-e5fc2b9593b8)

