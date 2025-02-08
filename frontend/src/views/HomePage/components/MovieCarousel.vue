<template>
  <Carousel
    class="carousel-light"
    :navigationArrowStyle="'round'"
    :paginationStyle="'circle'"
    :wrap-around="true"
    :autoplay="3000"
    :pauseAutoplayOnHover="true"
    :itemsToShow="1.5"
  >
    <Slide v-for="slide in slides" :key="slide.id">
      <div
        class="carousel-slide"
        @mousedown="startClick"
        @mouseup="endClick(slide.id)"
        @mousemove="cancelClick"
        @touchstart="startClick"
        @touchend="endClick(slide.id)"
        @touchmove="cancelClick"
      >
        <img :src="slide.image" :alt="slide.alt" />
        <div class="slide-info">
          <h3 class="movie-title">{{ slide.title }}</h3>
          <p class="movie-director">DIRECTOR: {{ slide.director }}</p>
          <p class="movie-actors">MAIN ACTORS: {{ slide.actors }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useRouter } from "vue-router";

const router = useRouter();

const slides = [
  {
    id: 1,
    image:
      "https://filmartgallery.com/cdn/shop/products/Once-Upon-a-Time-in-America-Vintage-Movie-Poster-Original-German-A0-33x46.jpg",
    alt: "Once Upon a Time in America",
    title: "Once Upon a Time in America",
    director: "Sergio Leone",
    actors: "Robert De Niro, James Woods, Elizabeth McGovern",
  },
  {
    id: 2,
    image:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D2AF0F20D40CAAA249BEF5BDFF63C1BF3F6BDB67C74092DB843AEAEB423F79D2/scale?width=1200&aspectRatio=1.78&format=webp",
    alt: "Alice in Wonderland",
    title: "Alice in Wonderland",
    director: "Tim Burton",
    actors: "Johnny Depp, Mia Wasikowska, Helena Bonham Carter",
  },
  {
    id: 3,
    image:
      "https://static.digit.in/OTT/v2/images/the-godfather-part-ii-1307643.jpg?tr=w-500%20480w,https://static.digit.in/OTT/v2/images/the-godfather-part-ii-1307643.jpg",
    alt: "The Godfather: Part II",
    title: "The Godfather: Part II",
    director: "Francis Ford Coppola",
    actors: "Al Pacino, Robert De Niro, Robert Duvall",
  },
];

const isClick = ref(true);

const startClick = () => {
  isClick.value = true;
};

const cancelClick = () => {
  isClick.value = false;
};

const endClick = (id: number) => {
  if (isClick.value) {
    navigateToDetails(id);
  }
};

const navigateToDetails = (id: number) => {
  router.push(`/movie/${id}`);
};
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 80vh;
}

.carousel-slide {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.carousel-slide img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
  text-align: left;
}

.movie-title {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.movie-director,
.movie-actors {
  font-size: 0.9rem;
  margin: 2px 0;
}

.carousel__slide {
  padding: 0;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  color: white;
}

.carousel__pagination-button::after {
  background-color: white !important;
}
</style>
