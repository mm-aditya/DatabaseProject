var $slider = $("#slider");
if ($slider.length > 0) {
  $slider.slider({
    min: 1,
    max: 5,
    value: 3,
    orientation: "horizontal",
    range: "min"
  }).addSliderSegments($slider.slider("option").max);
}