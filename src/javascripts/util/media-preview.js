class MediaPreview {

  constructor(_window = {}) {
    let
      i,
      itemEl = _window.document.querySelectorAll('.app-vitae-list-item'),
      previewEl = _window.document.querySelectorAll('.app-vitae-list-item-media');

    for (i = 0; i < previewEl.length; ++i) {
      let el = previewEl[i];
      el.title = 'Click or touch to toggle media';

      el.onclick = (c) => {
        window.requestAnimationFrame(() => {
          for (i = 0; i < itemEl.length; ++i) {
            let el = itemEl[i];

            if (el === c.target.parentElement) {
              c.target.parentElement.classList.toggle('app-vitae-list-item--preview');
            } else {
              el.classList.remove('app-vitae-list-item--preview');
            }
          };
        });
      };
    };
  }

}

export default MediaPreview;
