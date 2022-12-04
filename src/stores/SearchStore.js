import { ref } from "vue";
import { defineStore } from "pinia";
import { useMovieStore } from "@/stores/MovieStore";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=b22dc0726a9a08cf8017c57b02f109e7&language=ru-RU&page=1&region=Ru&query=";
export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]); //state

  const getMovies = async (search) => {
    loader.value = true;
    const res = await fetch(`${url}${search}`);
    const data = await res.json();
    movies.value = data.results;
    loader.value = false;
  }; //actions

  const addToUserMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
    movieStore.activeTab = 1;
  }; //actions

  return { loader, movies, getMovies, addToUserMovies };
});
