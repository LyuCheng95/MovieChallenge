<template>
  <div class="home-page">
    <MovieCarousel />
    <HotMovies />
  </div>
</template>

<script lang="ts" setup>
import MovieCarousel from "./components/MovieCarousel.vue";
import HotMovies from "./components/HotMovies.vue";
</script>

<style scoped>
.home-page {
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
