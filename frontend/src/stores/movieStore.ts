import { defineStore } from "pinia";
import type { Movie } from "../types/movie";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [] as Movie[],
    searchQuery: "",
    currentPage: 1,
    hasMore: true,
  }),
  actions: {
    async fetchMovies() {
      try {
        const response = await fetch(
          `http://localhost:3001/api/movies/paged?page=${this.currentPage}&pageSize=50`,
        );
        const result = await response.json();
        this.movies = [...this.movies, ...result.movies];
        this.hasMore = result.hasMore;
        this.currentPage++;
        return this.movies;
      } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
      }
    },
    searchMovies() {
      if (this.searchQuery === "") {
        return this.movies;
      } else {
        return this.movies.filter((movie: Movie) => {
          return (
            movie.title
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            (movie.director &&
              movie.director
                .toLowerCase()
                .includes(this.searchQuery.toLowerCase()))
          );
        });
      }
    },
    resetPagination() {
      this.movies = [];
      this.currentPage = 1;
      this.hasMore = true;
    },
  },
  getters: {
    displayedMovies(): Movie[] {
      return this.searchMovies();
    },
    getMovieById: (state) => {
      return (id: number) =>
        state.movies.find((movie) => movie.id === id) || null;
    },
  },
});
