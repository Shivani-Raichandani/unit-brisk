function Circlle(el) {
  $(el)
    .circleProgress({ fill: { color: "#00c7ff" } })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .text(String(stepValue.toFixed(0)).substr(0) + "00%");
    });
}

Circlle(".round");
