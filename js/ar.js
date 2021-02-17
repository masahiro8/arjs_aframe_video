window.onload = function () {
  AFRAME.registerComponent("videohandler", {
    init: function () {
      const marker = this.el;
      marker.addEventListener(
        "markerFound",
        function () {
          const vid = document.querySelector("#vid");
          vid.play();
        }.bind(this)
      );

      marker.addEventListener(
        "markerLost",
        function () {
          const vid = document.querySelector("#vid");
          vid.pause();
          vid.currentTime = 0;
        }.bind(this)
      );
    },
  });
};
