# Student Feedback Application - Backend

This is the backend part of the Student Feedback Application. It is built using TypeScript and Express.js.

## Project Structure

- **src/**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the application, initializes the Express app and sets up middleware and routes.
  - **controllers/**: Contains the controllers for handling requests.
    - **feedbackController.ts**: Manages feedback-related operations.
  - **models/**: Contains the data models.
    - **feedback.ts**: Defines the structure of feedback data and includes validation methods.
  - **routes/**: Contains the route definitions.
    - **feedbackRoutes.ts**: Defines routes for feedback operations.
  - **types/**: Contains TypeScript interfaces.
    - **index.ts**: Defines interfaces for feedback data and request payloads.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd student-feedback-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

- **POST /feedback**: Create new feedback.
- **GET /feedback**: Retrieve all feedback.
- **DELETE /feedback/:id**: Delete feedback by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.