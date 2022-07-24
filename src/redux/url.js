export default {
  url: 'https://api.github.com/users/', // URL + user = user information/ URL + user + followers
  followers: '/followers?page=1&per_page=100',
  following: '/following?page=1&per_page=100',
};
