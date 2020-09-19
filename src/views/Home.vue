<template>
  <div class="home">
    <img class="home__spinner" src="../assets/loading.svg" v-if="isLoading" />
    <MovieList :list="movies" v-else />
    <button @click="loadMore" class="load-btn">Load more</button>
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
    ]),
  },
  methods: {
    ...mapActions('movies', [
      'getMovies',
      'loadMore',
    ]),
  },
  mounted() {
    this.getMovies();
  },
};
</script>
