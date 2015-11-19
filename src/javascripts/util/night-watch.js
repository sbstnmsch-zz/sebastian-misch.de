class NightWatch {

  constructor(_window = {}) {
    let
      hours = (new Date()).getHours();

    if (!(8 < hours === hours < 18)) {
      _window.document.body.classList.add('u-night');
    }
  }
}

export default NightWatch;
