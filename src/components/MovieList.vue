<script>
import MovieCard from "@/components/MovieCard";
export default {
  name: "MovieList",
  components: { MovieCard },
  props: ["movies"],
};
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
