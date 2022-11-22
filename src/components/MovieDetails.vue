<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=b22dc0726a9a08cf8017c57b02f109e7&language=Ru`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;
        });
    });

    return {
      movie,
    };
  },
};
</script>
<template>
  <div class="row">
    <div class="container-fluid mb-4">
      <div class="text-white">
        <div class="col-lg-6 col-md-12 col-sm-12 m-auto image">
          <img
            v-if="movie.poster_path !== null"
            :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
            alt="moviePoster"
            id="MoviePoster"
          />
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 m-auto description">
          <br />
          <h2 class="title text-center text-uppercase mt-2">
            <b>{{ movie.title }}</b>
          </h2>
          <h5 class="fst-italic mb-3" v-if="movie.tagline != ''">
            {{ movie.tagline }}
          </h5>
          <p class="text-lg-start text-md-center fs-6 py-1">
            <b>Жанр: </b
            ><span
              v-for="(genresN, index) in movie.genres"
              v-bind:key="genresN.id"
            >
              {{ genresN.name
              }}<span v-if="index < movie.genres.length - 1">,</span
              >&nbsp;</span
            >
          </p>
          <p class="text-lg-start text-md-center fs-6 py-1">
            <b>Продолжительность:</b> {{ movie.runtime }} минут
          </p>
          <p class="text-lg-start text-md-center fs-6 py-1">
            <b>Оценка :</b> {{ movie.vote_average }}/10
          </p>
          <p class="text-lg-start text-md-center fs-6 py-1">
            <b>Название :</b> {{ movie.original_title }}
          </p>
          <p class="text-lg-start text-md-center fs-6 py-1">
            <b>Описание :</b><br />{{ movie.overview }}
          </p>
          <div class="text-start mt-2">
            <router-link :to="`/`">
              <button class="btn bg-primary text-white m-1" href="">
                Вернуться к списку фильмов
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.btn:hover {
  color: black;
  border: none;
}
#MoviePoster {
  height: 800px;
  width: 600px;
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  #MoviePoster {
    height: 600px;
    width: 400px;
  }
}

@media screen and (max-width: 767px) {
  #MoviePoster {
    height: 400px;
    width: 300px;
  }

  p {
    text-align: center;
  }
}
</style>
