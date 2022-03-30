import mp3 from './beng2.mp3';

export function sound() {

  const audio = new Audio(mp3);
  audio.autoplay = true
}