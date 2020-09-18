<template>
  <div class="home">
    <MovieList :list="movies" />
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
