<template>
  <div class="filter-component year-sort">
    <label for="year-sort">Sort By Year：</label>
    <select id="year-sort" v-model="sortOrder" @change="sortByYear">
      <option value="">default</option>
      <option value="asc">asc</option>
      <option value="desc">desc</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMovieStore } from "../../../../stores/movieStore";
import type { Ref } from "vue";
import type { SortOrder } from "../../../../types/SortOrder";

const movieStore = useMovieStore();
const sortOrder: Ref<SortOrder> = ref("");

const sortByYear = () => {
  movieStore.sortSearchResultByYear(sortOrder.value);
};
</script>

<style scoped>
.filter-component {
  margin-bottom: 1rem;
}

label {
  color: #ffd700;
  margin-right: 0.5rem;
  font-weight: 600;
}

select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #444;
  background-color: #2c2c2c;
  color: #fff;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

select:hover,
select:focus {
  border-color: #ffd700;
  outline: none;
}
</style>
