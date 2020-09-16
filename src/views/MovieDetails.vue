<template>
  <div class="movieDetails" v-if="!isLoading">
    <div class="movieDetails__poster" v-if="movie.poster_path">
      <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" />
    </div>
    <div class="movieDetails__info">
      <h2>Details</h2>
      <div class="detail">
        <span>Title:</span> {{movie.original_title}}
      </div>
      <div class="detail">
        <span>Original language:</span> {{movie.original_language}}
      </div>
      <div class="detail">
        <span>Overview:</span> {{movie.overview}}
      </div>
      <div class="detail">
        <span>Genres:</span>
        <div class="genres">
          <span v-for="genre in movie.genres" :key="genre.id">{{genre.name}} </span>
        </div>
      </div>
      <!-- {{movie}} -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MovieDetails',
  computed: {
    ...mapState('movies', [
      'movie',
      'isLoading',
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
