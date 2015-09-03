'use strict';

app.controller('PostsCtrl', function ($scope, $firebaseArray, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL + "/posts");
  var posts = $firebaseArray(ref);

  console.log(posts);

  $scope.posts = posts;
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function() {
    posts.$add($scope.post);
  }

  $scope.deletePost = function (item) {
    posts.$remove(item);
  }

});
