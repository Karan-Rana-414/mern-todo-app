# MERN Stack ToDo App ✅

This is a simple web application that allows users to manage their to-do lists. Users can create, read, update, and delete (CRUD) items. The app is built using React for the frontend, Node.js with Express for the backend, and MongoDB for data storage.


## Features 🙌

- **Authentication**: Users can create an account by sign up process or log in with existing details to access the his/her todos.
- **Task Management**: Users can view their all the tasks, add new tasks, update task, and delete tasks as needed.
- **User Interface**: The application offers a clean and friendly user interface for a smooth user experience.

## Technologies Used ⚙️

- **Frontend**:
  - React.js
  - React Router
  - Redux toolkit
  - Axios (for api interactions)
  - Form Validation
  - Tailwind Css (for styling)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ODM)
  - Express-validator
  - jsonwebtoken (for authentication)


- Endpoints for CRUD operations:
  GET /api/todos: Fetch all to-do items.
  POST /api/todos: Add a new to-do item.
  PUT /api/todos/:id: Update an existing to-do item.
  DELETE /api/todos/:id: Delete a to-do item.

## Installation

- Prerequisites
  - Node.js installed on your system
  - MongoDB instance running locally or on the cloud
  - Git for cloning the repository

1. Clone the repository:

$ git clone https://github.com/Karan-Rana-414/mern-todo-app.git
$ cd mern-todo-app

2. Install dependencies for both the frontend and backend:
    cd client
    npm install
    cd ../server
    npm install

    - create .env file in server folder
    - Add the following:

    PORT = 5000
    MONGOURI = your_mongodb_connection_string
    JWT_SECRET= your_secret_string

3. Start the both frontend and backend
    - in server directory- nodemon server.js
    - in client directory
    - cd ../client
    - npm run dev


## Future Enhancements 🚀
    - Improve UI with animations and additional themes.
    - Addition of status management
    - Filteration functionality
    - Logout option button ('logic available already in authSlice')


   

## demo video 💻
   https://www.loom.com/share/a8d728f597524ec0b7b825d069c61004?sid=4d013ae5-55d1-4244-8733-2da11e76c1c8



