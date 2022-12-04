<script setup>
import { ref } from "vue";
import { useSearchStore } from "@/stores/SearchStore";
import MyLoader from "@/components/MyLoader";
import MyMovie from "@/components/MyMovie";
const searchMovie = ref("");
const searchStore = useSearchStore();
</script>
<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input
      class="search-input"
      placeholder="Введите фильм"
      type="text"
      v-model="searchMovie"
    />
    <MyLoader v-if="searchStore.loader" />
    <div v-else>
      <MyMovie
        v-for="movie of searchStore.movies"
        :key="movie.id"
        :movie="movie"
        :isSearch="true"
      />
    </div>
  </form>
</template>
<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
