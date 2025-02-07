<template>
  <div class="home-page">
    <MovieCarousel />
  </div>
</template>

<script lang="ts" setup>
import MovieCarousel from "./components/MovieCarousel.vue";
</script>

<style scoped>
.home-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
