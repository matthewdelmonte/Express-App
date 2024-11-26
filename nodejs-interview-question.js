// Interview Question: Express.js API with Error Handling and Middleware

/*
Task: Create a basic Express.js REST API for a Todo List Application

Requirements:
1. Implement the following endpoints:
   - GET /todos : Retrieve all todos
   - POST /todos : Create a new todo
   - GET /todos/:id : Retrieve a specific todo by ID
   - PUT /todos/:id : Update a specific todo
   - DELETE /todos/:id : Delete a specific todo

2. Additional Technical Requirements:
   - Use in-memory storage (an array) to store todos
   - Each todo should have: 
     * id (unique identifier)
     * title (string)
     * description (string)
     * completed (boolean)
     * createdAt (timestamp)

3. Implement middleware for:
   - Logging each incoming request (method, path, timestamp)
   - Error handling for invalid requests
   - Validation middleware to ensure todo items have required fields

4. Handle potential errors:
   - 404 for resource not found
   - 400 for invalid request body
   - Appropriate error messages and status codes

5. Bonus points for:
   - Using express-validator for input validation
   - Implementing pagination for GET /todos
   - Adding basic input sanitization
*/

const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = 3000;

// Middleware and setup
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Validation middleware for todo creation
const validateTodo = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').optional(),
  body('completed').isBoolean().optional()
];

// Interview Evaluation Points:
// - Proper use of middleware
// - Error handling
// - RESTful API design
// - Input validation
// - In-memory data management
