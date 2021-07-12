var theme = document.getElementById("theme");
var icon = document.getElementById("icon");

icon.onclick = function () {
  /* theme.play(); */

  if (theme.paused) {
    theme.play();
    icon.src = "media/pause.png";
  } else {
    theme.pause();
    icon.src = "media/play-button.png";
  }
};
