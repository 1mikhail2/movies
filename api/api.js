import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3500/api/'
});

export const authAPI = {
  login(email, password) {
    return instance.post('auth/signin', { email, password });
  },

  signup(name, email, password) {
    return instance.post('auth/signup', { name, email, password })
  },

  authMe(token) {
    return instance.get(`auth-me?token=${token}`)
  }
};

export const usersAPI = {
  getAllUsers() {
    return instance.get('users');
  },

  getUserById(id) {
    return instance.get(`user/${id}`);
  },

  getUserByEmail(email) {
    return instance.get(`user?email=${email}`);
  },

  getUserData(id) {
    return instance.get(`user-data?id=${id}`);
  },

  getPostsById(id) {
    return instance.get(`user/${id}/posts`);
  },

  addPost(id, post) {
    return instance.post(`user/${id}/add-post`, { id, post });
  },

  addReport(id, report, name) {
    return instance.post(`user/add-report?id=${id}`, { report, name });
  },

  getAllReports() {
    return instance.get('get-reports');
  },

  addAdditionalUserData(id, bio, gender, nickname, phone, website) {
    return instance.post(`update-user?userId=${id}`, { bio, gender, nickname, phone, website });
  },

  getAdditionalUserData(id) {
    return instance.get(`get-additional-user-data?userId=${id}`);
  },

  deleteUser(token) {
    return instance.delete(`delete-user?token=${token}`);
  },

  applyUserVerification(token, category, country, general, wikiArticle, website, socialNetworks) {
    return instance.post(`apply-user-verification?token=${token}`, { category, country, general, wikiArticle, website, socialNetworks });
  },

  addAdminRules(token, userId) {
    return instance.get(`add-admin-rules?token=${token}&userId=${userId}`);
  },

  addWarn(token, userId) {
    return instance.get(`add-warn?token=${token}&userId=${userId}`);
  },

  declineReport(token, id) {
    return instance.delete(`decline-report?token=${token}&id=${id}`);
  },

  sendProfileAvatar(id, data) {
    return instance.post(`${id}/upload`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};

export const verificationAPI = {
  getAllUsersVerificationApplications() {
    return instance.get('get-user-verification-applications');
  },

  deleteUserVerificationApplication(id) {
    return instance.delete(`delete-user-verification-application?id=${id}`);
  },

  addProAccount(id) {
    return instance.get(`add-pro-account?userId=${id}`);
  }
};

export const coinsAPI = {
  addCoins(token) {
    return instance.post(`add-coins?token=${token}`);
  },

  spendCoins(token, coins) {
    return instance.post(`spend-coins?token=${token}`, { coins });
  }
};

export const productsAPI = {
  addRainbowNickname(token) {
    return instance.post(`add-rainbow-nickname?token=${token}`);
  },

  addSponsorship(token) {
    return instance.post(`add-sponsorship?token=${token}`);
  },

  removeWarn(token) {
    return instance.get(`remove-warn?token=${token}`);
  }
};

export const communityAPI = {
  getAllCommunities() {
    return instance.get('get-all-communities');
  },

  createCommunity(token, name, category, website) {
    return instance.post(`create-community?token=${token}`, { name, category, website });
  },

  getCommunityById(id) {
    return instance.get(`get-community/${id}`);
  },

  followCommunity(communityId, token) {
    return instance.post(`follow-community?communityId=${communityId}&token=${token}`);
  },

  getFollowers(communityId) {
    return instance.get(`community-followers?communityId=${communityId}`);
  },

  getFollowerById(id, userId) {
    return instance.get(`community-follower?communityId=${id}&userId=${userId}`);
  },

  unfollowCommunity(token, communityId) {
    return instance.delete(`unfollow-community?token=${token}&communityId=${communityId}`);
  },

  sendCommunityAvatar(id, data) {
    return instance.post(`${id}/upload/community`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  sendCommunityCover(id, data) {
    return instance.post(`${id}/upload/cover/community`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  addAdditionalCommunityData(communityId, name, description) {
    return instance.post(`add-additional-community-data?communityId=${communityId}`, { name, description });
  },

  getAdditionalCommunityData(id) {
    return instance.get(`get-additional-community-data?communityId=${id}`);
  },

  getAllManagedCommunities(token) {
    return instance.get(`get-all-managed-communities?token=${token}`);
  },

  getAllFollowingCommunities(token) {
    return instance.get(`get-all-following-communities?token=${token}`);
  },

  addCommunityPost(communityId, post) {
    return instance.post(`add-community-post?communityId=${communityId}`, { post });
  },

  getCommunityPosts(communityId) {
    return instance.get(`get-community-posts?communityId=${communityId}`);
  }
};

export const feedbackAPI = {
  sendFeedback(name, email, comments, feedbackType) {
    return instance.post('add-feedback', { name, email, comments, feedbackType });
  },

  getFeedbacks() {
    return instance.get('get-feedback');
  }
};

export const supportAPI = {
  sendSupport(name, problem, details) {
    return instance.post('add-support', { name, problem, details });
  },

  getSupports() {
    return instance.get('get-supports');
  }
};

export const contentAPI = {
  sendWatchLaterMovie(id, movieId, original_title, poster_path, original_language, overview, release_date) {
    return instance.post(`${id}/add-watch-later`, { movieId, original_title, poster_path, original_language, overview, release_date });
  },

  getWatchLaterMovies(id) {
    return instance.get(`${id}/get-watch-later`);
  },

  sendWatchLaterTV(id, tvId, name, poster_path, overview, first_air_date) {
    return instance.post(`${id}/add-watch-later-tv`, { tvId, name, poster_path, overview, first_air_date });
  },

  getWatchLaterTV(id) {
    return instance.get(`${id}/get-watch-later-tv`);
  },

  sendFavoritePerson(id, personId, name, profile_path) {
    return instance.post(`${id}/add-favorite-person`, { personId, name, profile_path });
  },

  getFavoritePerson(id) {
    return instance.get(`${id}/get-favorite-person`);
  },

  sendFavoriteMovie(id, movieId, original_title, backdrop_path) {
    return instance.post(`${id}/add-favorite-movie`, { movieId, original_title, backdrop_path });
  },

  getFavoriteMovie(id) {
    return instance.get(`${id}/get-favorite-movie`);
  },

  sendFavoriteSerial(id, tvId, name, backdrop_path) {
    return instance.post(`${id}/add-favorite-serial`, { tvId, name, backdrop_path });
  },

  getFavoriteSerial(id) {
    return instance.get(`${id}/get-favorite-serial`);
  },

  getMovieDetailsByUserId(userId, movieId) {
    return instance.get(`movie-details?userId=${userId}&movieId=${movieId}`);
  },

  deleteFavoriteMovieByUserId(userId, movieId) {
    return instance.delete(`delete-favorite-movie?userId=${userId}&movieId=${movieId}`);
  },

  getTVDetailsByUserId(userId, tvId) {
    return instance.get(`tv-details?userId=${userId}&tvId=${tvId}`);
  },

  deleteFavoriteTVByUserId(userId, tvId) {
    return instance.delete(`delete-favorite-tv?userId=${userId}&tvId=${tvId}`);
  },

  getPersonDetailsByUserId(userId, personId) {
    return instance.get(`person-details?userId=${userId}&personId=${personId}`);
  },

  deleteFavoritePersonByUserId(userId, personId) {
    return instance.delete(`delete-favorite-person?userId=${userId}&personId=${personId}`);
  }
};

export const messagesAPI = {
  sendMessage(senderEmail, receiverEmail, message) {
    return instance.post(``, { senderEmail, receiverEmail, message });
  },

  getMessages(senderEmail, receiverEmail) {
    return instance.post(`get-messages`, { senderEmail, receiverEmail });
  }
};

export const commentsAPI = {
  sendMovieComment(movieId, comment, token) {
    return instance.post(`add-movie-comment?token=${token}`, { movieId, comment });
  },

  getMovieComments(id) {
    return instance.get(`${id}/get-movie-comments`);
  }
};