<template>
  <div v-if="movie" class="movie-details">
    <div class="content">
      <div class="poster-container">
        <img
          :src="movie.posterUrl"
          :alt="movie.title"
          @error="handleImageError"
          class="movie-poster"
        />
      </div>
      <div class="movie-info">
        <h1>{{ movie.title }}</h1>
        <div class="meta">
          <span class="year">{{ movie.year }}</span>
        </div>
        <p class="genre">
          <strong>GENRES: </strong>{{ movie.genres.join(", ") }}
        </p>
        <p class="director"><strong>DIRECTOR: </strong>{{ movie.director }}</p>
        <p class="actors"><strong>ACTORS: </strong>{{ movie.actors }}</p>
        <div class="description">
          <h3>PLOT</h3>
          <p>{{ movie.plot }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loading">
    <div class="spinner"></div>
    <p>loading...</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import placeholderImage from "../../assets/poster-placeholder.webp";
import { useMovieStore } from "../../stores/movieStore";

import type { Movie } from "@lyuch000/movie-types";

const route = useRoute();
const movie = ref<Movie | null>(null);
const movieStore = useMovieStore();

onMounted(async () => {
  const movieId = Number(route.params.id);
  if (isNaN(movieId)) {
    console.error("Invalid movie ID");
    return;
  }

  movie.value = movieStore.getMovieById(movieId);
  if (!movie.value) {
    movie.value = await movieStore.fetchMovieById(movieId);
  }
});

const handleImageError = (e: { target: { src: string } }) => {
  e.target.src = placeholderImage;
};
</script>
<style scoped>
.movie-details {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #fff;
  background-color: #000;
}

.content {
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.poster-container {
  flex: 0 0 300px;
  margin-right: 2rem;
}

.movie-poster {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.movie-poster:hover {
  transform: scale(1.05);
}

.movie-info {
  flex: 1;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #ffd700;
}

.meta {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.year {
  margin-right: 1rem;
  padding: 0.2rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

p {
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

.genre,
.director {
  font-size: 1.1rem;
}

.description {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.description h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #ffd700;
}

.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #fff;
  background-color: #000;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .movie-details {
    margin-top: 15vh;
  }

  .content {
    flex-direction: column;
    padding: 1rem;
  }

  .poster-container {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
