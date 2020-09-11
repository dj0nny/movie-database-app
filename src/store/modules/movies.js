import api from '../../API';

export default {
  namespaced: true,
  state: {
    movies: [],
    isLoading: false,
  },
  actions: {
    async getMovies({ state }) {
      state.isLoading = true;
      const res = await api.get(`movie/popular?api_key=${process.env.VUE_APP_API_KEY}`);
      const { results } = res.data;
      state.movies = results;
      state.isLoading = false;
    },
  },
};
