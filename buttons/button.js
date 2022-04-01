const button1 = document.querySelector("#button-one");
const button2 = document.querySelector("#button-two");
const clickAudio = document.querySelector("#click-audio");

// BUTTON 1

button1.addEventListener("mousedown", (e) => {
  const clone = clickAudio.cloneNode();
  clone.play();
  fadeAudio(clone, clickAudio.duration);
  button1.classList.add("clicked");
});
button1.addEventListener("mouseup", (e) => {
  button1.classList.remove("clicked");
});

// HELPER FUNCTIONS

function fadeAudio(audioNode, audioDuration) {
  let dur = audioDuration.toFixed(1) * 1000;
  changeAudio(audioNode, 0.8, Math.floor((dur * 1) / 4));
  changeAudio(audioNode, 0.6, Math.floor((dur * 2) / 4));
  changeAudio(audioNode, 0.4, Math.floor((dur * 3) / 4));
  changeAudio(audioNode, 0.2, Math.floor((dur * 4) / 4));
}

function changeAudio(node, vol, dur) {
  setTimeout((node.volumne = vol), dur);
}
