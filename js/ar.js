window.onload = function () {
  AFRAME.registerComponent("videohandler", {
    init: function () {
      const vid = document.querySelector("#vid");
      const message = document.querySelector("#message");
      const marker = this.el;

      marker.addEventListener("markerFound", function () {
        message.innerHTML = "<p>Found</p>";
        vid.play();
      });

      marker.addEventListener("markerLost", function () {
        message.innerHTML = "<p>Lost</p>";
        vid.pause();
        vid.currentTime = 0;
      });
    },
  });
};
