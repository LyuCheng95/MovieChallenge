import moviesData from "../../data/movies.json";
import { Movie } from "@lyuch000/movie-types";

const moviePool = moviesData as unknown as { movies: Movie[] };

export const getPagedMovies = (page: number, pageSize: number) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pagedMovies = moviePool.movies.slice(startIndex, endIndex);

  return {
    movies: pagedMovies,
    totalCount: moviePool.movies.length,
    hasMore: endIndex < moviePool.movies.length,
  };
};

export const getAllMovies = () => {
  return moviePool;
};

export const searchMovies = (query: string) => {
  return moviePool.movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.director.toLowerCase().includes(query.toLowerCase())
  );
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
