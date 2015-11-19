class NightWatch {

  constructor(_window = {}, hours = (new Date()).getHours()) {

    if (!(7 < hours === hours < 18)) {
      _window.document.body.classList.add('u-night');
    }
  }
}

export default NightWatch;
