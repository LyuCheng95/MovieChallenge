<script setup lang="ts">
import Header from './components/Header.vue'; 
</script>

<template>
  <Header />
  <div class="body">
    <router-view></router-view>
  </div>
</template>


<style scoped>
.body {
  padding-top: 60px;
  width: 100%;
  background-color: #121212;
  font-family: Arial, sans-serif;
}
</style>