import { Request, Response } from "express";
import * as movieService from "../services/movieService";

export const getPagedMovies = (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 50;
  const result = movieService.getPagedMovies(page, pageSize);
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
