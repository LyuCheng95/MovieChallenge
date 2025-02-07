<template>
  <section class="hot-movies">
    <h2>Hot Movies</h2>
    <div class="movie-list">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import MovieCard from "../../../components/MovieCard.vue";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
  },
  {
    id: 4,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
  },
  {
    id: 5,
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
  },
  {
    id: 6,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
  },
  {
    id: 7,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg",
  },
];
</script>

<style scoped>
.hot-movies {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
</style>
