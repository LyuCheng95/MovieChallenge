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
      <div class="carousel-slide">
        <img :src="slide.image" :alt="slide.alt" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const slides = [
  {
    id: 1,
    image:
      "https://filmartgallery.com/cdn/shop/products/Once-Upon-a-Time-in-America-Vintage-Movie-Poster-Original-German-A0-33x46.jpg",
    alt: "Once Upon a Time in America",
  },
  {
    id: 2,
    image:
      "https://i0.wp.com/literariness.org/wp-content/uploads/2021/02/wp4119629.jpg",
    alt: "The Lord of the Rings: The Return of the King",
  },
  {
    id: 3,
    image:
      "https://static.digit.in/OTT/v2/images/the-godfather-part-ii-1307643.jpg?tr=w-500%20480w,https://static.digit.in/OTT/v2/images/the-godfather-part-ii-1307643.jpg",
    alt: "The Godfather: Part II",
  },
];
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
}

.carousel-slide img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
