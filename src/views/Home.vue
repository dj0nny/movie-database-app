<template>
  <div class="home">
    hello world
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState('movies', [
      'movies',
    ]),
  },
  methods: {
    ...mapActions('movies', [
      'getMovies',
    ]),
  },
  mounted() {
    this.getMovies();
  },
};
</script>
