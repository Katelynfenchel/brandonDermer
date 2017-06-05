/**
 * Created by jzander on 6/5/17.
 */
console.log("testing");

angular.module('brandonDermer', [])
  .controller('brandonController', ["$scope", "PROJECTS",
    function ($scope, PROJECTS) {
      console.log(PROJECTS, "are the projects");

      $scope.musicVideos = PROJECTS.musicVideos;
      $scope.commercials = PROJECTS.commercials;
      $scope.shorts = PROJECTS.shorts;

      console.log("music videos: ", $scope.musicVideos, "commercials: ",  $scope.commercials, "shorts: ", $scope.shorts);
    }
  ]).constant("PROJECTS", {
  "musicVideos": [
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      href: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    },
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      href: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    },
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      href: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    }
  ],
  "shorts": [
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      href: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    },
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      href: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    },
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      href: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    }
  ],
  "commercials": [
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      href: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    },
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      href: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    },
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      href: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    }
  ]
});