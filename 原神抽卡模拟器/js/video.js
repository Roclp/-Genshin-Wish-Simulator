//第一个视频
function playVideo(sid, nid) {
    var audio = new Audio("src/img/button.mp3");
    audio.play();
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    // myVideo.src = "src/img/img/"+sid+".mp4";
    switch (sid) {
        case 1:
            myVideo.src = "src/img/img/tenth_5.mp4";
            break;
        case 2:
            myVideo.src = "src/img/img/tenth_4.mp4";
            break;
        case 3:
            myVideo.src = "src/img/img/once_3.mp4";
            break;
        case 41:
        case 42:
            myVideo.src = "src/img/img/once_4.mp4";
            break;
        case 51:
        case 52:
            myVideo.src = "src/img/img/once_5.mp4";
            break;
        default:
            alert("视频出错了");
            break;
    }
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        if (isFinite(myVideo.duration)) {
            myVideo.currentTime = myVideo.duration;
        }
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";
        switch (sid) {
            case 1:
            case 2:
                playVideo1(videoid[0]);
                break;
            case 3:
                playVideo_3(nid);
                break;
            case 41:
                playVideo_hero4(nid);
                break;
            case 42:
                playVideo_weapon4(nid);
                break;
            case 52:
                playVideo_5(nid);
                break;
            case 51:
                playVideo_up5(nid);
                break;
            default:
                alert("视频出错了");
                break;

        }
        //myVideo.pause();
        isEnded = true;

    };
   // 定义一个变量，用来存储函数是否已经执行过
var isEnded = false;

myVideo.addEventListener("ended", function() {
  // 先检查函数是否已经执行过了
  if (isEnded) {
    return;
  }
  
  if (isFinite(this.duration)) {
    this.currentTime = this.duration;
}
  switch (sid) {
    case 1:
    case 2:
      playVideo1(videoid[0]);
      break;
    case 3:
      playVideo_3(nid);
      break;
    case 41:
      playVideo_hero4(nid);
      break;
    case 42:
      playVideo_weapon4(nid);
      break;
    case 52:
      playVideo_5(nid);
      break;
    case 51:
      playVideo_up5(nid);
      break;
    default:
      alert("视频出错了");
      break;
  }
  // 将变量标记为已经执行过了
  isEnded = true;
//   myVideo.pause();
});

    myVideo.controls = false;
    myVideo.play();
    // setLooping(false);
};












// 这个是第二个视频的函数 
// 5星up角色视频
function playVideo_up5(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/heroup5_"+nid+".mp4";
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        this.currentTime = this.duration;
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";
    };


    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};

// 歪了的视频
function playVideo_5(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/hero5_"+nid+".mp4";
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};
// 4星角色的视频
function playVideo_hero4(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/hero4_"+nid+".mp4";
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};
// 4星武器的视频
function playVideo_weapon4(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/weapon4_"+nid+".mp4";
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};
// 3星的视频
function playVideo_3(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/weapon3_"+nid+".mp4";
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        if (isFinite(myVideo.duration)) {
            myVideo.currentTime = myVideo.duration;
        }
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    if (isFinite(this.duration)) {
        this.currentTime = this.duration;
    }
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};
//十连抽第1个视频
function playVideo1(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    console.log("videoid[1] = ", videoid[1]);
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        playVideo2(videoid[1]);

    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    // this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};
//十连抽第2个视频
function playVideo2(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";


        //nid++;
        //playVideo3(nid);
        playVideo3(videoid[2]);
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};//十连抽第3个视频
function playVideo3(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        // nid++;
        // playVideo4(nid);
        playVideo4(videoid[3]);
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};//十连抽第4个视频
function playVideo4(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        playVideo5(videoid[4]);
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};//十连抽第5个视频
function playVideo5(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        playVideo6(videoid[5]);
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};//十连抽第6个视频
function playVideo6(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        playVideo7(videoid[6]);
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};//十连抽第7个视频
function playVideo7(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        playVideo8(videoid[7]);
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};//十连抽第8个视频
function playVideo8(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        playVideo9(videoid[8]);
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};//十连抽第9个视频
function playVideo9(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        playVideo10(videoid[9]);
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};//十连抽第10个视频
function playVideo10(nid) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        // playVideo10(videoid[9]);
        videoid.length = 0;
    };
    var isEnded = false;
    myVideo.addEventListener("ended", function() {
    if (isEnded) {
        return;
    }
    this.currentTime = this.duration;
    isEnded = true;
    });
        myVideo.controls = false;
        myVideo.play();
};





















// OP视频的函数
function playOPVideo(id) {
    var audio = new Audio("src/img/button.mp3");
    audio.play();
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/tenth_5.mp4";
    
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");  
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";
        OPvideo1(opvideoid[0], id);
    };
   // 定义一个变量，用来存储函数是否已经执行过
    var isEnded = false;

    myVideo.addEventListener("ended", function() {
    // 先检查函数是否已经执行过了
        if (isEnded) {
            return;
        }
        
        // 将视频播放进度调整到最后一帧
        this.currentTime = this.duration;
        //   alert("视频播放结束");
        // 停止执行代码
        // this.pause();
        OPvideo1(opvideoid[0], id);
        // 将变量标记为已经执行过了
        isEnded = true;
        //myVideo.pause();
    });

    myVideo.controls = false;
    myVideo.play();
    // setLooping(false);
};



function OPvideo1(nid, id) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        // OPvideo(opvideoid[++nid]);
        if(id == 88){
            opvideoid.length = 0;
        }
        else{
            // alert("nid = "+nid+";id ="+id+"  检测点1");
            OPvideo2(opvideoid[++id], id);
        }
        
    };
    myVideo.addEventListener("ended", function() {
        // 将视频播放进度调整到最后一帧
        this.currentTime = this.duration;
      
        // 停止执行代码
        this.pause();
      });
    myVideo.controls = false;
    myVideo.play();
};

function OPvideo2(nid, id) {
    var videoContainer = document.getElementById("videoContainer");
    var myVideo = document.getElementById("myVideo");
    var videoMask = document.getElementById("videoMask");
    myVideo.src = "src/img/img/"+nid;
    myVideo.style.display = "block";
    videoContainer.appendChild(myVideo);
    videoContainer.style.display = "block";
    videoMask.style.display = "block";
    videoMask.onclick = function() {
        console.log("点击了视频遮罩");
        myVideo.pause();
        myVideo.style.display = "none";
        videoMask.style.display = "none";
        videoContainer.style.display = "none";

        // OPvideo(opvideoid[++nid]);
        if(id == 88){
            opvideoid.length = 0;
        }
        else{
            // alert("nid = "+nid+"  检测点2");

            OPvideo1(opvideoid[++id], id);
        }
        
    };
    myVideo.addEventListener("ended", function() {
        // 将视频播放进度调整到最后一帧
        this.currentTime = this.duration;
      
        // 停止执行代码
        this.pause();
      });
    myVideo.controls = false;
    myVideo.play();
};


