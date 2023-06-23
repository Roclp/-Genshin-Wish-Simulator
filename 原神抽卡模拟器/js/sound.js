// // 创建一个 AudioContext 对象
// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// // 播放音效
// function playSound(soundFile) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', soundFile, true);
//   xhr.responseType = 'arraybuffer';

//   xhr.onload = function() {
//     audioCtx.decodeAudioData(xhr.response, function(buffer) {
//       var source = audioCtx.createBufferSource();
//       source.buffer = buffer;
//       source.connect(audioCtx.destination);
//       source.start(0);
//     });
//   }

//   xhr.send();
// }
function playSound() {
    var audio = document.getElementById("audio");
    audio.play();
  }
  