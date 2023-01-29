import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeElem = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);
