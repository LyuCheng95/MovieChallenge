import moviesData from "../../data/movies.json";
import { Genres, Movie } from "@lyuch000/movie-types";

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
