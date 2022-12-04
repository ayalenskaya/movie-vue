<script setup>
import { onBeforeMount, ref } from "vue";
import MovieList from "@/components/MovieList";
import MovieSort from "@/components/MovieSort";

const movies = ref([]);
onBeforeMount(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=b22dc0726a9a08cf8017c57b02f109e7&language=ru-RU&page=1&region=Ru`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      movies.value = data.results;
    });
});
</script>

<template>
  <div id="app">
    <MovieSort :movies="movies" />
    <MovieList :movies="movies" />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #6c757d;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

a {
  text-decoration: none;
}

.card-body {
  text-align: center;
  width: 18rem;
}

.card-text {
  height: 200px;
}

.card-title {
  height: 50px;
}

img {
  height: 400px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
