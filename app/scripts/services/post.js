'use strict'

app.factory('Post', function ($firebaseArray, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL).child('posts');
  var posts = $firebaseArray(ref);

  var Post = {
    all: posts,
    create: function (post) {
      return posts.$add(post);
    },
    get: function (postId) {
      return posts.$getRecord(postId);
    },
    delete: function (post) {
      return posts.$remove(post);
    }
  };

  return Post;

});
