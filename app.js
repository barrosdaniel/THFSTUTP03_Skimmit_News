const posts = [{
    title: 'Amazing new framework!!!',
    summary: 'Why you must start using Explode.js IMMEDIATELY!',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/any'
  },
  {
    title: 'Understanding the Event Loop',
    summary: 'This post will change your life.',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/nature'
  },
  {
    title: 'No seriously, what is a $%*# is a promise?',
    summary: 'Understanding callback heck and why you must avoid it.',
    votes: 0,
    thumbnail: 'https://placeimg.com/75/75/tech'
  },
];

new Vue({
  el: '#app',
  data: {
    posts: posts,
  },
  methods: {
    increment: function (index) {
      posts[index].votes += 1;
    },
    decrement: function (index) {
      if (posts[index].votes > 0) {
        posts[index].votes -= 1;
      }
    }
  }
});