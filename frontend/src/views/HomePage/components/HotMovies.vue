<template>
  <section class="hot-movies">
    <h2>Hot Movies</h2>
    <div class="movie-list">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import MovieCard from "../../../components/MovieCard.vue";
import type { Movie } from "../../../types/movie";

defineProps<{
  movies: Movie[];
}>();
</script>

<style scoped>
.hot-movies {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  gap: 20px;
}
</style>
