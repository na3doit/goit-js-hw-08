import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

const currentTime = localStorage.getItem(STORAGE_KEY)
  ? localStorage.getItem(STORAGE_KEY)
  : 0;

player.setCurrentTime(currentTime);
