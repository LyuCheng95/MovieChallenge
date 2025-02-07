import express, { Request, Response } from "express";
import cors from "cors";
import moviesData from "../data/movies.json";

import type { Movie } from "./types/movie";
const moviePool = moviesData as unknown as { movies: Movie[] };

const app = express();
const port = 3001;

app.use(cors());

app.get("/api/movies/paged", (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 50;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const pagedMovies = moviePool.movies.slice(startIndex, endIndex);

  res.json({
    movies: pagedMovies,
    totalCount: moviePool.movies.length,
    hasMore: endIndex < moviePool.movies.length,
  });
});

app.get("/api/movies", (req: Request, res: Response) => {
  res.json(moviePool);
});

app.get("/api/movies/search", (req: Request, res: Response) => {
  const query = req.query.query as string;
  const filteredMovies = moviePool.movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.director.toLowerCase().includes(query.toLowerCase())
  );
  res.json(filteredMovies);
});

app.get("/api/autofill", (req: express.Request, res: express.Response) => {
  const query = ((req.query.q as string) || "").toLowerCase();
  const limit = parseInt(req.query.limit as string) || 10;

  if (!query) {
    res.json([]);
    return;
  }

  const matchedKeywords = new Set<string>();

  moviePool.movies.forEach((movie) => {
    if (movie.title.toLowerCase().includes(query)) {
      matchedKeywords.add(movie.title);
    }

    if (movie.director.toLowerCase().includes(query)) {
      matchedKeywords.add(movie.director);
    }

    movie.actors.split(", ").forEach((actor) => {
      if (actor.toLowerCase().includes(query)) {
        matchedKeywords.add(actor);
      }
    });
  });

  const suggestions = Array.from(matchedKeywords)
    .slice(0, limit)
    .sort((a, b) => a.localeCompare(b));

  res.json(suggestions);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
