import moviesData from "../../data/movies.json";
import { Movie } from "@lyuch000/movie-types";
import { pool } from "../config/database";
import type { MovieView } from "../types/MovieView";

const moviePool = moviesData as unknown as { movies: Movie[] };
const dbPool = pool;

export const getPagedMovies = async (page: number, pageSize: number) => {
  try {
    const [viewCountsResult] = await dbPool.query<MovieView[]>(`
      SELECT movie_id, view_count 
      FROM movie_views
      ORDER BY view_count DESC
    `);

    const viewCountsMap = new Map(
      viewCountsResult.map((row) => [row.movie_id, row.view_count])
    );

    const sortedMovies = moviePool.movies.sort((a, b) => {
      const viewsA = viewCountsMap.get(a.id) || 0;
      const viewsB = viewCountsMap.get(b.id) || 0;
      return viewsB - viewsA;
    });

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pagedMovies = sortedMovies.slice(startIndex, endIndex);

    const moviesWithViews = pagedMovies.map((movie) => ({
      ...movie,
      views: viewCountsMap.get(movie.id) || 0,
    }));

    return {
      movies: moviesWithViews,
      totalCount: sortedMovies.length,
      hasMore: endIndex < sortedMovies.length,
    };
  } catch (error) {
    console.error("Error fetching paged movies:", error);
    throw error;
  }
};

export const getAllMovies = () => {
  return moviePool;
};

export const searchMovies = (query: string) => {
  if (!query) {
    return [];
  }

  const lowerQuery = query.toLowerCase();

  return moviePool.movies.filter((movie) => {
    return (
      movie.genres.some((genre) => genre.toLowerCase().includes(lowerQuery)) ||
      movie.actors.toLowerCase().includes(lowerQuery) ||
      movie.director.toLowerCase().includes(lowerQuery) ||
      movie.title.toLowerCase().includes(lowerQuery)
    );
  });
};

export const getAutofillSuggestions = (query: string, limit: number) => {
  if (!query) {
    return [];
  }

  const matchedKeywords = new Set<string>();
  const lowerQuery = query.toLowerCase();

  moviePool.movies.forEach((movie) => {
    if (movie.title.toLowerCase().includes(lowerQuery)) {
      matchedKeywords.add(movie.title);
    }

    if (movie.director.toLowerCase().includes(lowerQuery)) {
      matchedKeywords.add(movie.director);
    }

    movie.actors.split(", ").forEach((actor) => {
      if (actor.toLowerCase().includes(lowerQuery)) {
        matchedKeywords.add(actor);
      }
    });
  });

  return Array.from(matchedKeywords)
    .slice(0, limit)
    .sort((a, b) => a.localeCompare(b));
};

export const getMovieById = (id: number): Movie | undefined => {
  return moviePool.movies.find((movie) => movie.id === id);
};
