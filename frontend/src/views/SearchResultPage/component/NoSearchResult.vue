<template>
  <div class="no-result">
    <h2>No Search Result</h2>
    <p>Sorry, we didnt find any matched movies</p>
    <button @click="goToHome" class="home-button">Home</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToHome = () => {
  router.push("/");
};
</script>

<style scoped>
.no-result {
  text-align: center;
  padding: 2rem;
  background-color: #1e1e1e;
  border-radius: 10px;
  margin: 2rem auto;
  max-width: 600px;
}

h2 {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  color: #cccccc;
  margin-bottom: 1.5rem;
}

.home-button {
  background-color: #ffd700;
  color: #1e1e1e;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: #ffa700;
}
</style>
