<template>
  <header>
    <div class="header-content">
      <router-link to="/" class="logo">MovieChallenge</router-link>
      <div class="search-container">
        <div class="search-input-wrapper" v-click-outside="hideSuggestions">
          <input
            type="text"
            placeholder="Search for movies..."
            v-model="movieStore.searchQuery"
            @input="debouncedAutofill"
            @keyup.enter="performSearch"
            @keyup.esc="hideSuggestions"
          />
          <ul v-if="movieStore.suggestions.length > 0" class="suggestions-list">
            <li
              v-for="(suggestion, index) in movieStore.suggestions"
              :key="index"
              @click="selectSuggestion(suggestion)"
            >
              {{ suggestion }}
            </li>
          </ul>
        </div>
        <button @click="performSearch" class="search-button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import debounce from "lodash/debounce";
import { useMovieStore } from "../stores/movieStore";

const router = useRouter();
const movieStore = useMovieStore();

const performSearch = () => {
  if (movieStore.searchQuery.trim()) {
    router.push({
      name: "SearchResults",
      query: { keyword: movieStore.searchQuery },
    });
    movieStore.clearSuggestions();
  }
};

const hideSuggestions = () => {
  movieStore.clearSuggestions();
};

const debouncedAutofill = debounce(() => {
  movieStore.fetchSuggestions(movieStore.searchQuery);
}, 300);

const selectSuggestion = (suggestion: string) => {
  movieStore.searchQuery = suggestion;
  movieStore.clearSuggestions();
  performSearch();
};

const vClickOutside = {
  mounted(el: HTMLElement, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el: HTMLElement) {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideSuggestions();
    }
  });
});

onUnmounted(() => {
  debouncedAutofill.cancel();
  document.removeEventListener("keydown", hideSuggestions);
});
</script>

<style scoped>
header {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #ffd700;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.search-container {
  display: flex;
  align-items: center;
}

input {
  padding: 10px 15px;
  border: none;
  border-radius: 20px 0 0 20px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  width: 250px;
  transition: all 0.3s ease;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

input:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.3);
}

.search-button {
  background-color: #ffd700;
  border: none;
  border-radius: 0 20px 20px 0;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button i {
  color: white;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
  }

  .logo {
    margin-bottom: 10px;
    text-align: center;
  }

  .search-container {
    width: 100%;
  }

  input {
    width: calc(100% - 50px);
  }
}

.search-input-wrapper {
  position: relative;
}

.suggestions-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #444;
  border-top: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.suggestions-list li {
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
  transition: background-color 0.2s ease;
}

.suggestions-list li:hover {
  background-color: rgba(255, 215, 0, 0.2);
}

.suggestions-list::-webkit-scrollbar {
  width: 8px;
}

.suggestions-list::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

.suggestions-list::-webkit-scrollbar-thumb {
  background-color: rgba(255, 215, 0, 0.5);
  border-radius: 4px;
}

.suggestions-list li:hover {
  background-color: #f0f0f0;
}
</style>
