<template>
  <div class="movieList">
    <div class="movieList__item" v-for="movie in list" :key="movie.id">
      <router-link :to="{ name: 'MovieDetails', params: { id: movie.id }}">
        <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" alt="movie-poster">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    list: Array,
  },
};
</script>
