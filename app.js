/**
 * Created by jzander on 6/5/17.
 */
console.log("testing");

angular.module('brandonDermer', [])
  .controller('brandonController', ["$scope", "PROJECTS",
    function ($scope, PROJECTS) {
      console.log(PROJECTS, "are the projects");
    }
  ]).constant("PROJECTS", {
  "projects": [
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      link: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    },
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      link: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    },
    {
      artist: "Panic At The Disco",
      title: "Victorious",
      link: "https://youtu.be/AUChk0lxF44",
      role: "Director/Writer",
      img: "panic at the disco.png"
    }
  ]
});