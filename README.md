# MovieChallenge

MovieChallenge is a full-stack web application for movie enthusiasts to explore and search for their favorite films.
You can visit the live version: https://movie-challenge.site

## Setup

### Backend

1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

### Frontend

1. Navigate to the frontend directory: `cd frontend`
2. Change environment constant to dev if you want to test/dev locally: modify /frontend/src/config.ts: `export const dev: Env = dev;`
3. Install dependencies: `npm install`
4. Start the server: `npm run dev`

The frontend application will be available at `http://localhost:5173`.

## Features

- Home page with a movie carousel and hot movies section
  - hot movies are ranked by total view counts of all users
- Detailed movie information page
- Advanced search functionality:
  - Real-time auto-suggestions
  - Search options (by genre, year, etc.)
- Search results page with:
  - Genre filtering
  - Year-based sorting
- Responsive design for various screen sizes

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/movies/paged`: Get paginated list of movies
- `GET /api/movies`: Get all movies
- `GET /api/movies/search`: Search movies by query
- `GET /api/autofill`: Get autofill suggestions for search
- `GET /api/movies/:id`: Get details of a specific movie by ID
- `POST /api/movie-view/:id`: Record one more view on a specific movie by ID

## Technologies Used

- Frontend:
  - Vue 3 with Composition API
  - Vue Router for navigation
  - Pinia for state management
  - TypeScript for type safety
  - Axios for API requests
- Backend:
  - Node.js runtime
  - Express.js framework
  - TypeScript for type safety
  - Mysql for database
- Shared:
  - Custom npm package for type definitions (@lyuch000/movie-types)
- Development and Deployment:
  - Vite for frontend build tool
  - ESLint and Prettier for code linting and formatting
  - Nginx for reverse proxy and serving static files
