<template>
  <div class="movieDetails">

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MovieDetails',
  computed: {
    ...mapState('movies', [
      'movie',
    ]),
  },
  methods: {
    ...mapActions('movies', [
      'getMovieDetails',
    ]),
  },
  async mounted() {
    const { id } = this.$route.params;
    this.getMovieDetails(id);
  },
};
</script>
