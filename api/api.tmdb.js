import axios from "axios";

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3/'
});

const API_KEY = 'e76fd28bc6d77e87ebae191d64a73110';

export const moviesAPI = {
  getMovies(currentPage) {
    return instance.get(`discover/movie?api_key=${API_KEY}&page=${currentPage}`);
  },

  getTodayTrendingMovies(currentPage) {
    return instance.get(`trending/movie/day?api_key=${API_KEY}&page=${currentPage}`);
  },

  findMovie(query) {
    return instance.get(`search/movie?api_key=${API_KEY}&query=${query}`);
  },

  getTopRatedMovies(currentPage) {
    return instance.get(`movie/top_rated?api_key=${API_KEY}&page=${currentPage}`);
  },

  getUpcomingMovies(currentPage) {
    return instance.get(`movie/upcoming?api_key=${API_KEY}&page=${currentPage}`);
  },

  getMovieDetails(movieId) {
    return instance.get(`movie/${movieId}?api_key=${API_KEY}`);
  },

  getRecommendations(movieId) {
    return instance.get(`movie/${movieId}/recommendations?api_key=${API_KEY}`);
  },

  getMovieImages(movieId) {
    return instance.get(`movie/${movieId}/images?api_key=${API_KEY}`);
  },

  getSimilarMovies(movieId) {
    return instance.get(`movie/${movieId}/similar?api_key=${API_KEY}`);
  },

  getMoviesKeywords(movieId) {
    return instance.get(`movie/${movieId}/keywords?api_key=${API_KEY}`);
  },

  getMoviesCast(movieId) {
    return instance.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
  },

  getMovieVideos(tvId) {
    return instance.get(`movie/${tvId}/videos?api_key=${API_KEY}`);
  },

  getGenres() {
    return instance.get(`genre/movie/list?api_key=${API_KEY}`);
  },

  getMoviesByGenre(currentPage, genre) {
    return instance.get(`discover/movie?api_key=${API_KEY}&page=${currentPage}&with_genres=${genre}`);
  },

  getTopWeekMovies(currentPage) {
    return instance.get(`trending/movie/week?api_key=${API_KEY}&page=${currentPage}`);
  },

  getLatestMovies() {
    return instance.get(`movie/latest?api_key=${API_KEY}`);
  }
};

export const personsAPI = {
  getPopularPersons(currentPage) {
    return instance.get(`person/popular?api_key=${API_KEY}&page=${currentPage}`);
  },

  findPerson(query) {
    return instance.get(`search/person?api_key=${API_KEY}&query=${query}`);
  },

  getPersonDetails(personId) {
    return instance.get(`person/${personId}?api_key=${API_KEY}`);
  },

  getPersonMovieCredits(personId) {
    return instance.get(`person/${personId}/movie_credits?api_key=${API_KEY}`);
  },

  getPersonTVCredits(personId) {
    return instance.get(`person/${personId}/tv_credits?api_key=${API_KEY}`);
  },

  getTodayBestActors(currentPage) {
    return instance.get(`trending/person/day?api_key=${API_KEY}&page=${currentPage}`);
  }
};

export const tvAPI = {
  getTV(currentPage) {
    return instance.get(`discover/tv?api_key=${API_KEY}&page=${currentPage}`);
  },

  findTV(query) {
    return instance.get(`search/tv?api_key=${API_KEY}&query=${query}`);
  },

  getTodayTrendingTV(currentPage) {
    return instance.get(`trending/tv/day?api_key=${API_KEY}&page=${currentPage}`);
  },

  getTVDetails(tvId) {
    return instance.get(`tv/${tvId}?api_key=${API_KEY}`);
  },

  getTVKeywords(tvId) {
    return instance.get(`tv/${tvId}/keywords?api_key=${API_KEY}`);
  },

  getTVCast(tvId) {
    return instance.get(`tv/${tvId}/credits?api_key=${API_KEY}`);
  },

  getTVRecommendations(tvId) {
    return instance.get(`tv/${tvId}/recommendations?api_key=${API_KEY}`);
  },

  getSimilarTV(movieId) {
    return instance.get(`tv/${movieId}/similar?api_key=${API_KEY}`);
  },

  getTVImages(tvId) {
    return instance.get(`tv/${tvId}/images?api_key=${API_KEY}`);
  },

  getTVVideos(tvId) {
    return instance.get(`tv/${tvId}/videos?api_key=${API_KEY}`);
  },

  getGenres() {
    return instance.get(`genre/tv/list?api_key=${API_KEY}`);
  },

  getTVByGenre(currentPage, genre) {
    return instance.get(`discover/tv?api_key=${API_KEY}&page=${currentPage}&with_genres=${genre}`);
  },

  getTopRatedTV(currentPage) {
    return instance.get(`tv/top_rated?api_key=${API_KEY}&page=${currentPage}`);
  },

  getTopWeekSerials(currentPage) {
    return instance.get(`trending/tv/week?api_key=${API_KEY}&page=${currentPage}`);
  }
};