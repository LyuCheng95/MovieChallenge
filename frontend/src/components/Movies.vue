<template>
  <div>
    <input v-model="searchQuery" placeholder="Search by title or director" @input="searchMovies">
    <ul>
      <li v - for="movie in displayedMovies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <p>Director: {{ movie.director }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const searchQuery = ref('');
const movies = ref<any[]>([]);
const displayedMovies = ref<any[]>([]);

const fetchMovies = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/movies');
    movies.value = await response.json();
    displayedMovies.value = movies.value;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

const searchMovies = () => {
  if (searchQuery.value === '') {
    displayedMovies.value = movies.value;
  } else {
    displayedMovies.value = movies.value.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        (movie.director && movie.director.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });
  }
};

onMounted(() => {
  fetchMovies();
});
</script>
