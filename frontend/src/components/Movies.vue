<script lang="ts" setup>
import { useMovieStore } from '../stores/movieStore'

const movieStore = useMovieStore()

import { onMounted } from 'vue'
onMounted(() => {
  movieStore.fetchMovies()
})
</script>

<template>
  <div>
    <input v-model="movieStore.searchQuery" placeholder="Search by title or director" @input="movieStore.searchMovies">
    <ul>
      <li v-for="movie in movieStore.displayedMovies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <p>Director: {{ movie.director }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>