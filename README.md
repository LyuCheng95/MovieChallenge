# MovieChallenge

MovieChallenge is a full-stack web application for movie enthusiasts to explore and search for their favorite films.
You can visit the live version: http://34.143.135.18/

## Setup

### Backend

1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

### Frontend

1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

The frontend application will be available at `http://localhost:5173`.

## Features

- Home page with a movie carousel and hot movies section
- Detailed movie information page
- Search functionality with auto-suggestions
- Search results page with genre filtering and year sorting
- Responsive design for various screen sizes

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/movies/paged`: Get paginated list of movies
- `GET /api/movies`: Get all movies
- `GET /api/movies/search`: Search movies by query
- `GET /api/autofill`: Get autofill suggestions for search
- `GET /api/movies/:id`: Get details of a specific movie by ID

## Technologies Used

- Frontend: Vue 3, Vue Router, Pinia, TypeScript
- Backend: Node.js, Express, TypeScript
- Shared: Custom npm package for type definitions (@lyuch000/movie-types)

## Project Structure

- `frontend/`: Contains the Vue.js frontend application
- `backend/`: Contains the Express.js backend server
- `packages/movie-types/`: Shared TypeScript definitions for movie data
