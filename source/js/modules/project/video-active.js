const videoEnabled = () => {
  const video = document.querySelector('.video');

  function createIframe() {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
    iframe.classList.add('video__media');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');

    return iframe;
  }

  if (video) {
    const link = document.querySelector('.video__link');
    const button = document.querySelector('.video__button');

    link.removeAttribute('href');
    video.classList.add('video--enabled');

    video.addEventListener('click', () => {
      const iframe = createIframe();

      link.remove();
      button.remove();
      video.append(iframe);
    });
  }
};

export {videoEnabled};
