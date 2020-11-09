<template>
  <div class="home">
    <img class="home__spinner" src="../assets/loading.svg" v-if="isLoading" />
    <div class="home__movieList" v-else>
      <MovieList :list="movies" />
      <div class="home__movieList__navs">
        <div @click="loadPrev" class="navs__before" v-if="page > 1">
          <button class="button load-btn">
            &lArr; Prev
          </button>
        </div>
        <div @click="loadNext" class="navs__after">
          <button class="button load-btn">
            Succ &rArr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import MovieList from '../components/MovieList.vue';

export default {
  name: 'Home',
  components: {
    MovieList,
  },
  computed: {
    ...mapState('movies', [
      'movies',
      'isLoading',
      'page',
    ]),
  },
  methods: {
    ...mapActions('movies', [
      'getMovies',
      'loadMore',
    ]),
    loadPrev() {
      const { page } = this;
      const nextPage = page - 1;
      this.loadMore(nextPage);
    },
    loadNext() {
      const { page } = this;
      const prevPage = page + 1;
      this.loadMore(prevPage);
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>
