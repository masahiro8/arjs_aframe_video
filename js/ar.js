window.onload = function () {
  AFRAME.registerComponent("videohandler", {
    init: function () {
      const vid = document.querySelector("#vid");
      const marker = this.el;

      marker.addEventListener(
        "markerFound",
        function () {
          vid.play();
          vid.muted = false;
        }.bind(this)
      );

      marker.addEventListener(
        "markerLost",
        function () {
          vid.pause();
          vid.muted = true;
          vid.currentTime = 0;
        }.bind(this)
      );
    },
  });
};
