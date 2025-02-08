<template>
  <div class="home-page">
    <MovieCarousel />
    <HotMovies :movies="movies" />
    <div ref="observer"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import MovieCarousel from "./components/MovieCarousel.vue";
import HotMovies from "./components/HotMovies.vue";
import { useMovieStore } from "../../stores/movieStore";

const movieStore = useMovieStore();
const observer = ref<HTMLElement | null>(null);
const movies = ref<any[]>([]);

onMounted(async () => {
  movieStore.resetPagination();
  movies.value = await movieStore.fetchMovies();

  const intersectionObserver = new IntersectionObserver(
    async (entries) => {
      if (entries[0].isIntersecting && movieStore.hasMore) {
        const newMovies = await movieStore.fetchMovies();
        movies.value = newMovies;
      }
    },
    { threshold: 1 },
  );

  if (observer.value) {
    intersectionObserver.observe(observer.value);
  }

  onUnmounted(() => {
    if (observer.value) {
      intersectionObserver.unobserve(observer.value);
    }
  });
});
</script>

<style scoped>
.home-page {
  width: 100%;
  box-sizing: border-box;
  background-color: #121212;
  color: white;
  padding: 0;
  margin: 0;
}
</style>
