import { defineStore } from "pinia";
import type { Genres, Movie } from "@lyuch000/movie-types";
import type { SortOrder } from "../types/SortOrder";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [] as Movie[],
    searchQuery: "",
    currentPage: 1,
    hasMore: true,
    suggestions: [] as string[],
    searchResults: [] as Movie[],
    originalResults: [] as Movie[],
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
    async searchMovies(keyword: string) {
      try {
        const response = await fetch(
          `http://localhost:3001/api/movies/search?query=${encodeURIComponent(
            keyword,
          )}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.searchResults = data;
        this.originalResults = data;
      } catch (error) {
        console.error("Error searching movies:", error);
        this.searchResults = [];
      }
    },
    resetPagination() {
      this.movies = [];
      this.currentPage = 1;
      this.hasMore = true;
    },
    async fetchSuggestions(query: string) {
      if (query.trim()) {
        try {
          const response = await fetch(
            `http://localhost:3001/api/autofill?q=${query}`,
          );
          const data = await response.json();
          this.suggestions = data;
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          this.suggestions = [];
        }
      } else {
        this.suggestions = [];
      }
    },
    clearSuggestions() {
      this.suggestions = [];
    },
    filterSearchResultByGenre(genre: Genres | "") {
      if (!genre) {
        this.searchResults = [...this.originalResults];
      } else {
        this.searchResults = this.originalResults.filter((movie) =>
          movie.genres.includes(genre),
        );
      }
    },

    sortSearchResultByYear(order: SortOrder) {
      const sortedResults = [...this.searchResults];

      if (order === "asc") {
        sortedResults.sort((a, b) => Number(a.year) - Number(b.year));
      } else if (order === "desc") {
        sortedResults.sort((a, b) => Number(b.year) - Number(a.year));
      }

      this.searchResults = sortedResults;
    },
    setSearchResults(results: Movie[]) {
      this.searchResults = results;
      this.originalResults = [...results];
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
