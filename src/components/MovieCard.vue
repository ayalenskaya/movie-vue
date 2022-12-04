<script setup>
// eslint-disable-next-line
const props = defineProps({
  movie: {
    type: Object,
    default: () => {},
    requared: true,
  },
  id: String,
  index: String,
  title: String,
  vote_average: String,
  overview: String,
  poster_path: String,
});

const preUrl = "https://image.tmdb.org/t/p/original/";
</script>

<template>
  <div class="bg-secondary bg-gradient">
    <p class="index fw-bold text-white text-start"></p>
    <img v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
    <div class="card-body bg-secondary bg-gradient">
      <p class="card-title notemoy text-white">
        <b>Название:</b> {{ movie.title }}
      </p>
      <p class="notemoy text-white"><b>Рейтинг:</b> {{ movie.vote_average }}</p>

      <p class="card-text resum text-white">
        <b>Описание:</b> {{ movie.overview.substring(1, 150) + "..." }}
      </p>
      <router-link
        :to="`/MovieDetails/${movie.id}`"
        class="btn bg-primary text-white"
        id="MovieDetails"
        >Подробнее</router-link
      >
    </div>
  </div>
</template>

<style scoped></style>
