(() => {
  let
    night = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].indexOf((new Date()).getHours()) === -1;

  if (night) {
    window.document.body.classList.add('u-night');
  }

})();
