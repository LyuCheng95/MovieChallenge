import { Request, Response } from "express";
import { pool } from "../config/database";
import * as movieService from "../services/movieService";

export const getPagedMovies = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 50;
  const result = await movieService.getPagedMovies(page, pageSize);
  res.json(result);
};

export const getAllMovies = (req: Request, res: Response) => {
  const movies = movieService.getAllMovies();
  res.json(movies);
};

export const getAutofillSuggestions = (req: Request, res: Response) => {
  const query = (req.query.q as string) || "";
  const limit = parseInt(req.query.limit as string) || 10;
  const suggestions = movieService.getAutofillSuggestions(query, limit);
  res.json(suggestions);
};

export const searchMovies = (req: Request, res: Response) => {
  const query = req.query.query as string;
  const results = movieService.searchMovies(query);
  res.json(results);
};

export const getMovieById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid movie ID" });
    return;
  }

  const movie = movieService.getMovieById(id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
};

export const recordMovieView = async (req: Request, res: Response) => {
  const movieId = parseInt(req.params.id);

  try {
    const connection = await pool.getConnection();
    await connection.query(
      "INSERT INTO movie_views (movie_id, view_count) VALUES (?, 1) ON DUPLICATE KEY UPDATE view_count = view_count + 1",
      [movieId]
    );
    connection.release();
    res.status(200).json({ message: "View count updated successfully" });
  } catch (error) {
    console.error("Error updating view count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
