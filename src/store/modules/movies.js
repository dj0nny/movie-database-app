import API from '../../API';

export default {
  namespaced: true,
  state: {
    movies: [],
    movie: [],
    isLoading: false,
    page: 1,
  },
  actions: {
    async getMovies({ state }) {
      state.isLoading = true;
      const res = await API.get(`movie/popular?api_key=${process.env.VUE_APP_API_KEY}&page=${state.page}`);
      const { results } = res.data;
      state.movies = results;
      state.isLoading = false;
    },
    async getMovieDetails({ state }, movieId) {
      state.isLoading = true;
      const res = await API.get(`movie/${movieId}?api_key=${process.env.VUE_APP_API_KEY}`);
      state.movie = res.data;
      state.isLoading = false;
    },
    async loadMore({ state }, page) {
      state.isLoading = true;
      state.page = page;
      const res = await API.get(`movie/popular?api_key=${process.env.VUE_APP_API_KEY}&page=${page}`);
      const { results } = res.data;
      state.movies = results;
      state.isLoading = false;
    },
  },
};
