<template>
  <div class="poster-container">
    <img
      :src="posterUrl"
      :alt="title"
      class="movie-poster"
      @error="handleImageError"
    />
  </div>
</template>

<script setup lang="ts">
import ImagePlaceholder from "../../../assets/poster-placeholder.webp";

defineProps<{
  posterUrl: string;
  title: string;
}>();

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = ImagePlaceholder;
};
</script>

<style scoped>
.poster-container {
  min-width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.movie-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

@media (max-width: 768px) {
  .poster-container {
    width: 100%;
    height: 300px;
  }
}
</style>
