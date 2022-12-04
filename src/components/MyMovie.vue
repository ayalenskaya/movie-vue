<script setup>
import { useMovieStore } from "@/stores/MovieStore";
import { useSearchStore } from "@/stores/SearchStore";
const movieStore = useMovieStore();
const searchStore = useSearchStore();

// eslint-disable-next-line
const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      :alt="movie.original_title"
      class="movie-img"
    />
    <div>
      <div class="movie-name">
        {{ movie.original_title }} ({{ movie.release_date }})
      </div>
      <span class="movie-overview">{{ movie.overview }}</span>
      <div class="movie-buttons" v-if="!isSearch">
        <button
          class="btn bg-success text-white m-1"
          @click="movieStore.toggleWatched(movie.id)"
        >
          <span v-if="!movie.isWatched">Не смотрел</span>
          <span v-else>Смотрел</span>
        </button>
        <button
          class="btn bg-danger text-white m-1"
          @click="movieStore.deleteMovie(movie.id)"
        >
          Удалить
        </button>
      </div>
      <div class="movie-buttons" v-else>
        <a
          class="btn bg-primary text-white"
          @click="searchStore.addToUserMovies(movie)"
        >
          В избранное
        </a>
        <router-link
          :to="`/MovieDetails/${movie.id}`"
          class="btn bg-primary text-white m-1"
          id="MovieDetails"
          >Подробнее</router-link
        >
      </div>
    </div>
  </div>
</template>
<style>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
  background-color: #d0d0d0;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}
</style>
