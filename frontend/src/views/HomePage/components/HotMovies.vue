<template>
  <section class="hot-movies">
    <h2 class="section-title">Hot Movies</h2>
    <div class="movie-list">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import MovieCard from "../../../components/MovieCard.vue";
import type { Movie } from "@lyuch000/movie-types";

defineProps<{
  movies: Movie[];
}>();
</script>

<style scoped>
.hot-movies {
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #121212;
  color: white;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 1024px) {
  .hot-movies {
    padding: 30px 15px;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .movie-list {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .hot-movies {
    padding: 25px 10px;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 25px;
  }

  .movie-list {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .hot-movies {
    padding: 20px 5px;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .movie-list {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
  }
}
</style>
