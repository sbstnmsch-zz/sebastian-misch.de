const
  NightWatch = (_window = {}, hours = (new Date()).getHours()) => {
    if (!(hours > 7 === hours < 18)) {
      _window.document.body.classList.add('u-night');
    }
  };

export default NightWatch;
