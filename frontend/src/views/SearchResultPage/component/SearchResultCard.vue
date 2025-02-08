<template>
  <div class="movie-card" @click="goToDetails">
    <MoviePoster :posterUrl="movie.posterUrl" :title="movie.title" />
    <MovieInfo :movie="movie" :keyword="keyword" />
  </div>
</template>

<script setup lang="ts">
import type { Movie } from "@lyuch000/movie-types";
import MoviePoster from "./MoviePoster.vue";
import MovieInfo from "./MovieInfo.vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  movie: Movie;
  keyword: string;
}>();

const router = useRouter();
const goToDetails = () => {
  router.push({
    name: "MovieDetails",
    params: { id: props.movie.id },
  });
};
</script>

<style scoped>
.movie-card {
  display: flex;
  background-color: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 250px;
  width: 800px;
  margin: 10px;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .movie-card {
    flex-direction: column;
  }
}
</style>
