const dotElement = document.querySelector('.dot');

setInterval(() => {
  dotElement.classList.toggle('online');
  dotElement.classList.toggle('offline');
}, 1000);