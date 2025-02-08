<template>
  <div class="filter-component genre-filter">
    <label for="genre-select">Filter By Gener：</label>
    <select
      id="genre-select"
      v-model="selectedGenre"
      @change="filterByGenre"
      @click="updateGenres"
    >
      <option value="">all</option>
      <option v-for="genre in genres" :key="genre" :value="genre">
        {{ genre }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { useMovieStore } from "../../../../stores/movieStore";
import type { Genres } from "@lyuch000/movie-types";

const movieStore = useMovieStore();
const selectedGenre: Ref<Genres | ""> = ref("");

const genres = ref<Genres[]>([]);

const updateGenres = () => {
  const allGenres = movieStore.searchResults.flatMap((movie) => movie.genres);
  genres.value = [...new Set(allGenres)];
};

updateGenres();

const filterByGenre = () => {
  movieStore.filterSearchResultByGenre(selectedGenre.value);
};
</script>
<style scoped>
.filter-component {
  margin-bottom: 1rem;
}

label {
  color: #ffd700;
  margin-right: 0.5rem;
  font-weight: 600;
}

select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #444;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

select:hover,
select:focus {
  border-color: #ffd700;
  outline: none;
}
</style>
