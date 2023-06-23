let skipCount = 0; // 记录用户点击“跳过”按钮的次数

function playVideo(videoPath) {
  const videoLink = '.' + '/' + videoPath;
  // 创建视频元素
  const video = document.createElement('video');
  video.src = videoLink;
  video.autoplay = true;
  video.controls = false;
  video.style.width = '100%';
  video.style.height = '100%';
  video.style.objectFit = 'cover';
  // 设置 body 和 html 的高度为 100%
  document.documentElement.style.height = '100%'; 
  document.body.style.height = '100%'; 
  // 清空页面内容，并将视频添加到页面中
  document.body.innerHTML = '';
  document.body.appendChild(video);

  // 显示“跳过”按钮
  const skipButton = document.createElement('button');
  skipButton.innerText = '跳过';
  skipButton.style.position = 'absolute';
  skipButton.style.top = '10px';
  skipButton.style.right = '10px';
  skipButton.style.fontSize = '16px';
  skipButton.style.zIndex = '999';
  skipButton.addEventListener('click', function() {
    skipCount++;
    if (skipCount === 1) {
      // 停止当前视频的播放并播放下一个视频
      video.pause();
      const nextVideoPath = 'src/img/star/prayvideo2.mp4'; // 播放下一个视频
      playVideo(nextVideoPath);
    } else if (skipCount === 2) {
      // 停止当前视频的播放并播放下一个视频
      video.pause();
      const nextVideoPath = 'src/img/star/prayvideo3.mp4'; // 播放下一个视频
      playVideo(nextVideoPath);
    } else if (skipCount === 3) {
      // 跳转到主页
      location.href = './index.html';
    }
  });
  document.body.appendChild(skipButton);

  // 循环播放当前视频
  video.addEventListener('ended', function() {
    // 如果当前视频是第二个视频
    if (videoPath === 'src/img/star/prayvideo2.mp4') {
      skipCount++; // 自动跳转到第三个视频
      const nextVideoPath = 'src/img/star/prayvideo3.mp4'; // 播放下一个视频
      playVideo(nextVideoPath);
    } else {
      // 重新播放当前视频
      video.currentTime = 0;
      video.play();
    }
  });
}





// 为图片按钮添加类名和悬停事件
const buttonOnce = document.querySelector('.pray_once');
buttonOnce.classList.add('type2-button');
buttonOnce.addEventListener('mouseover', () => {
  buttonOnce.style.transform = 'translateY(-3px)';
});
buttonOnce.addEventListener('mouseout', () => {
  buttonOnce.style.transform = '';
});

const buttonTenth = document.querySelector('.pray_tenth');
buttonTenth.classList.add('type2-button');
buttonTenth.addEventListener('mouseover', () => {
  buttonTenth.style.transform = 'translateY(-3px)';
});
buttonTenth.addEventListener('mouseout', () => {
  buttonTenth.style.transform = '';
});
