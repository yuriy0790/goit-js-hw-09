import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const throttle = require('lodash.throttle');

function getTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.on('timeupdate', throttle(getTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

// player.off('timeupdate');
