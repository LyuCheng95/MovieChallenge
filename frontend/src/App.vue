<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.content {
  width: 100vw;
  background-color: #121212;
  font-family: Arial, sans-serif;
  margin-top: -60px;
}
</style>
