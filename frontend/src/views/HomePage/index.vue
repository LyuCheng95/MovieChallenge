<template>
  <div class="home-page">
    <MovieCarousel class="movie-carousel" />
    <HotMovies :movies="movies" class="hot-movies" />
    <div ref="observer" class="observer"></div>
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

.movie-carousel {
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
}

.hot-movies {
  padding: 2rem 1rem;
}

.observer {
  height: 20px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .movie-carousel {
    max-height: 50vh;
  }

  .hot-movies {
    padding: 1rem 0.5rem;
  }
}

@media (max-width: 480px) {
  .movie-carousel {
    display: none;
  }

  .hot-movies {
    padding: 0.5rem 0.25rem;
    margin-top: 15vh;
  }
}
</style>
