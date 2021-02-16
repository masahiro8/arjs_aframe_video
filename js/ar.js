window.onload = function () {
  AFRAME.registerComponent("videohandler", {
    init: function () {
      const vid = document.querySelector("#vid");
      const marker = this.el;

      marker.addEventListener(
        "markerFound",
        function () {
          vid.play();
        }.bind(this)
      );

      marker.addEventListener(
        "markerLost",
        function () {
          vid.pause();
          vid.currentTime = 0;
        }.bind(this)
      );
    },
  });
};
