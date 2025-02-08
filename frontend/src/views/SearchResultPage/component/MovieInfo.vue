<template>
  <div class="movie-info">
    <div class="movie-header">
      <h2 v-html="highlightKeyword(movie.title)" class="movie-title"></h2>
      <span
        class="movie-year"
        v-html="highlightKeyword(movie.year.toString())"
      ></span>
    </div>
    <p class="movie-detail">
      <strong>Director:</strong>
      <span v-html="highlightKeyword(movie.director)"></span>
    </p>
    <p class="movie-detail">
      <strong>Genres:</strong>
      <span v-html="highlightKeyword(movie.genres.join(', '))"></span>
    </p>
    <p class="movie-detail">
      <strong>Actors:</strong>
      <span v-html="highlightKeyword(movie.actors)"></span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from "@lyuch000/movie-types";

const props = defineProps<{
  movie: Movie;
  keyword: string;
}>();

const highlightKeyword = (text: string) => {
  if (!props.keyword) return text;
  const regex = new RegExp(`(${props.keyword})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
};
</script>

<style scoped>
.movie-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.movie-title {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.movie-detail {
  margin-bottom: 0.5rem;
  color: #cccccc;
  font-size: 0.9rem;
  line-height: 1.4;
}

.movie-detail strong {
  color: #ffd700;
  margin-right: 0.5rem;
  font-weight: 600;
}

:deep(.highlight) {
  color: #ffa700;
  font-weight: 600;
}

@media (max-width: 768px) {
  .movie-info {
    padding: 1rem;
  }

  .movie-title {
    font-size: 1.2rem;
  }

  .movie-detail {
    font-size: 0.8rem;
  }
}
</style>
