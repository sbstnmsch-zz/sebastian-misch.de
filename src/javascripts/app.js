(() => {
  let
    hours = (new Date()).getHours(),
    night = !(8 < hours === hours < 18);

  if (night) {
    window.document.body.classList.add('u-night');
  }

})();
