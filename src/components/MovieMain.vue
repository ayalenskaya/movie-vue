<script setup>
import Movie from "@/components/MyMovie.vue";
import { useMovieStore } from "@/stores/MovieStore";
import MySearch from "@/components/MySearch";
const setTab = (id) => {
  movieStore.setActiveTab(id);
};
const movieStore = useMovieStore();
</script>
<template>
  <main>
    <header class="header"></header>
    <div class="tabs">
      <button
        class="text-white"
        :class="['btn', { btn_primary: movieStore.activeTab === 1 }]"
        @click="setTab(1)"
      >
        Избранное
      </button>
      <button
        class="text-white"
        :class="['btn', { btn_primary: movieStore.activeTab === 2 }]"
        @click="setTab(2)"
      >
        Поиск
      </button>
    </div>
    <div v-if="movieStore.activeTab === 1" class="movies">
      <div>
        <h3 class="text-white">Просмотрено</h3>
        <Movie
          v-for="movie of movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <div>
        <h3 class="text-white">
          Все фильмы(всего: {{ movieStore.totalCountMovies }})
        </h3>
        <Movie
          v-for="movie of movieStore.movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
    <div v-else class="search"><MySearch /></div>
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: auto;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  width: 105px;
  height: 40px;
  border: none;
  margin: 0 10px;
  background: #4a4949;
}
.btn:hover {
  opacity: 0.7;
}
.btn_primary {
  background: #007bff;
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
