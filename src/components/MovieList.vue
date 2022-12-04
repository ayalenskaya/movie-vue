<script setup>
import MovieCard from "@/components/MovieCard";

// eslint-disable-next-line
const props = defineProps({
  movies: {
    type: Object,
    default: () => {},
    requared: true,
  },
});
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="movie in movies" :key="movie.id" class="card p-1 my-3">
        <MovieCard :movie="movie" />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
