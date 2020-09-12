import API from '../../API';

export default {
  namespaced: true,
  state: {
    movies: [],
    movie: [],
    isLoading: false,
  },
  actions: {
    async getMovies({ state }) {
      state.isLoading = true;
      const res = await API.get(`movie/popular?api_key=${process.env.VUE_APP_API_KEY}`);
      const { results } = res.data;
      state.movies = results;
      state.isLoading = false;
    },
    async getMovieDetails({ state }, movieId) {
      state.isLoading = true;
      const res = await API.get(`movie/${movieId}?api_key=${process.env.VUE_APP_API_KEY}`);
      console.log(res.data);
      state.isLoading = false;
    },
  },
};
