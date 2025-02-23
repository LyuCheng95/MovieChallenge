<template>
  <div class="movie-card" @click="goToDetails">
    <div class="card-content">
      <img
        :src="posterUrl"
        :alt="movie.title"
        @error="handleImageError"
        class="movie-poster"
      />
      <div class="movie-info">
        <h3>{{ movie.title }}</h3>
        <div class="additional-info">
          <p>{{ movie.year }}</p>
          <p>{{ movie.director }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import placeholderImage from "../assets/poster-placeholder.webp";

// types
import type { Movie } from "@lyuch000/movie-types";

const router = useRouter();

const props = defineProps<{
  movie: Movie;
}>();

const goToDetails = () => {
  router.push({
    name: "MovieDetails",
    params: { id: props.movie.id },
  });
};

const isImageError = ref(false);

const handleImageError = () => {
  isImageError.value = true;
};

const posterUrl = computed(() => {
  return isImageError.value ? placeholderImage : props.movie.posterUrl;
});
</script>

<style scoped>
.movie-card {
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-content {
  height: 300px;
  position: relative;
}

.movie-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.movie-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  transition: all 0.3s ease;
}

.movie-info h3 {
  margin: 0;
  font-size: 1.2em;
  text-align: center;
}

.additional-info {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.additional-info p {
  margin: 5px 0 0;
  font-size: 0.9em;
  text-align: center;
}

.movie-card:hover {
  transform: scale(1.2);
  z-index: 1;
}

.movie-card:hover .movie-info {
  background: rgba(0, 0, 0, 0.9);
}

.movie-card:hover .additional-info {
  max-height: 100px;
}
</style>
