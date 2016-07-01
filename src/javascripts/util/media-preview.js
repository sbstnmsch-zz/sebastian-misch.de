const
  mediaPreview = (_window = {}) => {
    const
      itemEl = _window.document.querySelectorAll('.app-vitae-list-item'),
      previewEl = _window.document.querySelectorAll('.app-vitae-list-item-media');
    let
      i,
      el;

    for (i = 0; i < previewEl.length; ++i) {
      el = previewEl[i];
      el.title = 'Click or touch to toggle media';

      /* eslint-disable no-loop-func */
      el.onclick = (c) => {
        _window.requestAnimationFrame(() => {
          for (i = 0; i < itemEl.length; ++i) {
            el = itemEl[i];

            if (el === c.target.parentElement) {
              c.target.parentElement.classList.toggle('app-vitae-list-item--preview');
            } else {
              el.classList.remove('app-vitae-list-item--preview');
            }
          }
        });
      };
      /* eslint-disable */
    }
  };

export default mediaPreview;
