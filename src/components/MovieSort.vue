<script>
import { toRefs, ref } from "vue";
export default {
  name: "MovieSort",
  props: {
    movies: String,
  },

  setup(props) {
    const { movies } = toRefs(props);
    const sortNoteDESCe = ref(false);
    function sortByNote() {
      if (sortNoteDESCe.value == false) {
        movies.value.sort(function sortArray(movie1, movie2) {
          if (movie1.vote_average < movie2.vote_average) {
            return -1;
          }
          if (movie1.vote_average > movie2.vote_average) {
            return 1;
          }
          return 0;
        });
        return (sortNoteDESCe.value = true);
      }

      if (sortNoteDESCe.value == true) {
        movies.value.sort(function sortArray(movie1, movie2) {
          if (movie1.vote_average > movie2.vote_average) {
            return -1;
          }
          if (movie1.vote_average < movie2.vote_average) {
            return 1;
          }
          return 0;
        });
        return (sortNoteDESCe.value = false);
      }
    }

    const sortDateDESC = ref(false);
    function sortByDate() {
      if (sortDateDESC.value == false) {
        movies.value.sort(function sortArray(movie1, movie2) {
          if (movie1.release_date < movie2.release_date) {
            return -1;
          }
          if (movie1.release_date > movie2.release_date) {
            return 1;
          }
          return 0;
        });
        return (sortDateDESC.value = true);
      }

      if (sortDateDESC.value == true) {
        movies.value.sort(function sortArray(movie1, movie2) {
          if (movie1.release_date > movie2.release_date) {
            return -1;
          }
          if (movie1.release_date < movie2.release_date) {
            return 1;
          }
          return 0;
        });
        return (sortDateDESC.value = false);
      }
    }

    const sortTitleDESC = ref(false);
    function sortByTitle() {
      if (sortTitleDESC.value == false) {
        movies.value.sort(function sortArray(movie1, movie2) {
          if (movie1.title < movie2.title) {
            return -1;
          }
          if (movie1.title > movie2.title) {
            return 1;
          }
          return 0;
        });
        return (sortTitleDESC.value = true);
      }

      if (sortTitleDESC.value == true) {
        movies.value.sort(function sortArray(movie1, movie2) {
          if (movie1.title > movie2.title) {
            return -1;
          }
          if (movie1.title < movie2.title) {
            return 1;
          }
          return 0;
        });
        return (sortTitleDESC.value = false);
      }
    }

    return {
      sortNoteDESC: false,
      sortDateDESC: false,
      sortTitleDESC: false,
      sortByNote,
      sortByDate,
      sortByTitle,
    };
  },
};
</script>
<template>
  <div class="sort">
    <button class="btn bg-primary text-white m-1" @click="sortByNote">
      Сортировать по рейтингу
    </button>
    <button class="btn bg-primary text-white m-1" @click="sortByDate">
      Сортировать по дате
    </button>
    <button class="btn bg-primary text-white m-1" @click="sortByTitle">
      Сортировать по названию
    </button>
  </div>
</template>

<style scoped></style>
