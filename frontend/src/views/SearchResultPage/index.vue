<template>
  <div class="search-results">
    <div v-if="movieStore.searchResults.length > 0">
      <div class="search-results-container">
        <div class="search-result-list">
          <div class="tool-bar">
            <GenreFilter />
            <YearSort />
          </div>
          <SearchResultCard
            v-for="movie in movieStore.searchResults"
            :key="movie.id"
            :movie="movie"
            :keyword="keyword"
          />
        </div>
      </div>
    </div>
    <NoSearchResult v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "../../stores/movieStore";
import SearchResultCard from "./component/SearchResultCard.vue";
import NoSearchResult from "./component/NoSearchResult.vue";
import GenreFilter from "./component/ToolBar/GenreFilter.vue";
import YearSort from "./component/ToolBar/YearSort.vue";

const route = useRoute();
const movieStore = useMovieStore();
const keyword = ref("");
const performSearch = async () => {
  keyword.value = route.query.keyword as string;
  await movieStore.searchMovies(keyword.value);
  await nextTick(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

onMounted(performSearch);
watch(() => route.query.keyword, performSearch);
</script>

<style scoped>
.search-results {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
}
.search-result-list {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.search-results-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
.tool-bar {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  width: 100%;
  position: sticky;
  top: 60px;
  padding: 1rem 0;
  z-index: 100;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #121212;
}
</style>
