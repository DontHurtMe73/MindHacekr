let flag = true;
const soundImg = document.querySelector('.sound__img');
const sound = new Howl({
  src: ['../media/music.mp3'],
  volume: 0.5,
  loop: true,
});

function changeSound() {
  if (flag) {
    soundImg.src = 'fonts/mute.svg';
    sound.stop();
  } else {
    soundImg.src = 'fonts/volume.svg';
    sound.play();
  }

  flag = !flag;
}
