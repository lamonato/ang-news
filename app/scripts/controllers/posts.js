'use strict';

app.controller('PostsCtrl', function ($scope, $firebaseArray, FIREBASE_URL) {

  var postsRef = new Firebase(FIREBASE_URL).child("posts");
  var posts = $firebaseArray(postsRef);

  $scope.posts = posts;
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function(item) {
    posts.$add(item);
    $scope.post = {url: 'http://', title: ''};
  }

  $scope.deletePost = function (item) {
    posts.$remove(item);
  }

});
