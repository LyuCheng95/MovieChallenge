<template>
  <div class="movie-card" @click="navigateToDetails">
    <div
      class="card-content"
      :style="{ backgroundImage: `url(${movie.image})` }"
    >
      <div class="movie-info">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.year }}</p>
        <p>{{ movie.director }}</p>
      </div>
    </div>
    <div class="movie-title">
      <h3>{{ movie.title }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  movie: {
    id: number;
    title: string;
    year: number;
    director: string;
    image: string;
  };
}>();

const router = useRouter();

const navigateToDetails = () => {
  router.push(`/movie/${props.movie.id}`);
};
</script>

<style scoped>
.movie-card {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  position: relative;
}

.movie-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  transform: translateY(100%);
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  opacity: 0;
}

.movie-card:hover .movie-info {
  transform: translateY(0);
  opacity: 1;
}

.movie-title {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 15px;
  text-align: center;
}

.movie-title h3 {
  margin: 0;
  font-size: 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie-card:hover {
  transform: scale(1.2);
}
</style>
