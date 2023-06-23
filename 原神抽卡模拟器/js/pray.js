var videoid = [];
var starvideoid = 0;//10-5=1;10-4=2;1-5=5;1-4=4;1-3=3;
var opvideoid = [];


new Vue({
    el: ".type2",
    data:{

    },
    methods: {
        handle3_once: function(){
            var n1 = Math.floor(Math.random() * 1000) + 1;  // 可以改进成真随机数
            console.log("n1 = ", n1);  // test
            var s5 = Math.max(600, ((count5-76) * 71) + 6);  // 5星概率
            var s4 = Math.max(52, ((count4-6) * 237) + 52);  // 4星概率
            console.log("这是单抽");
            num++;
            
            if (n1 <= s5)  // 5星概率
            {
                console.log("单抽5星");
                num5++;
                count5 = 0;
                var getstar = 5;
                // 五星流星视频
                //playVideo("once_5");
                // starvideoid = 5;
                return getstar;
            }
            else if (s5 < n1 && n1 <= s4 + s5)  // 4星概率
            {
                console.log("单抽4星");
                num4++;
                count5++;
                count4 = 0;
                var getstar = 4; 
                // 四星流星视频
                //playVideo("once_4");
                // starvideoid = 4;
                return getstar;
                
            }
            else
            {
                console.log("单抽3星");
                num3++;
                count5++;
                count4++;
                var getstar = 3;

                // 三星流星视频
                //playVideo("once_3");
                // starvideoid = 3;

                return getstar;
               
            }
        },
        handle3_tenth: function(){
            console.log("这是十连抽");
            var getstar = [];
            var setstar = 4;
            for (let i = 0; i < 10; i++)
            {
                var n1 = Math.floor(Math.random() * 1000) + 1;  // 可以改进成真随机数
                console.log("n1 = ", n1);  // test
                var s5 = Math.max(600, ((count5-76) * 71) + 6);  // 5星概率
                var s4 = Math.max(52, ((count4-6) * 237) + 52);  // 4星概率

                num++;
                if (n1 <= s5)  // 5星概率
                {
                    num5++;
                    count5 = 0;
                    getstar.push(5);
                    setstar = 5;
                    console.log("十连抽第"+(i+1)+"次5星");
                }
                else if (s5 < n1 && n1 <= s4 + s5)  // 4星概率
                {
                    num4++;
                    count5++;
                    count4 = 0;
                    getstar.push(4);
                    console.log("十连抽第"+(i+1)+"次4星");
                    
                }
                else
                {
                    num3++;
                    count5++;
                    count4++;
                    getstar.push(3);
                    console.log("十连抽第"+(i+1)+"次3星");
                    
                }
            }
            if (setstar == 5)
            {
                // 五星流星视频
               //playVideo("tenth_5");
               starvideoid = 1;

            }
            else{
                // 四星流星视频
               //playVideo("tenth_4");
                starvideoid = 2;

            }
            return getstar;

        },
        handle3: function(){    
            // var audio = new Audio("src/img/button.mp3");
            // audio.play();
            // 加流星动画
            var getstar = this.handle3_once();
            console.log("验证：这是单抽");
            //num++;
            if (getstar == 5)  // 5星概率
            {             
                console.log("验证：单抽5星");
                //num5++;
                //count5 = 0;
                let n2 = Math.random();
                //console.log("n2 = ", n2);  // test
                if (n2 < 0.5 || greatcount5 == 1)
                {
                    starvideoid = 51;
                    console.log("抽中up角色");
                    // code start here
                    //playVideo_up5(selectedItem5);
                    playVideo(51, selectedItem5);
                    greatcount5 = 0;
                }
                else
                {
                    starvideoid = 52;
                    console.log("小保底歪咯");
                    let n3 = Math.floor(Math.random() * 4) + 1;
                    //console.log("n3 = ", n3);  // test
                    // code start here
                    //playVideo_5(n3);
                    playVideo(52, n3);
                    greatcount5 = 1;
                }
            }
            else if (getstar == 4)  // 4星概率
            {
                
                console.log("验证：单抽4星");  // test
                // num4++;
                // count5++;
                // count4 = 0;
                let n2 = Math.random();
                //console.log("n2 = ", n2);  // test
                if (n2 < 0.5)
                {
                    starvideoid = 41;
                    //console.log("抽中up角色");  // test
                    num4_1++;
                    let n3 = Math.floor(Math.random() * 3) + 1;  // 三个up四星之一
                    
                    // code start here
                    let n33;
                    switch (n3){
                        case 1:
                            n33 = selectedItems4[0];
                            break;
                        case 2:
                            n33 = selectedItems4[1];
                            break;
                        case 3:
                            n33 = selectedItems4[2];
                            break;
                        default:
                            alert("程序出错了！！！");
                    }
                    //playVideo_hero4(n33);
                    playVideo(41, n33);
                }
                else
                {
                    
                    //console.log("其他4星");  // test
                    let n3 = Math.floor(Math.random() * 28) + 1;  // 这个数与素材中的四星数量有关
                    //console.log("n3 = ", n3);  // test
                    if (n3 <= 16)
                    {
                        starvideoid = 41;
                        num4_1++;
                        //console.log("4星角色");  // test
                        // code start here
                        // playVideo_hero4(n3);
                        playVideo(41, n3);

                    }
                    else
                    {
                        starvideoid = 42;
                        num4_2++;
                        //console.log("4星武器");  // test
                        let n4 = n3 - 16;
                        // code start here
                        // playVideo_weapon4(n4);
                        playVideo(42, n4);

                    }
                }
            }
            else if (getstar == 3)
            {
                starvideoid = 3;
                console.log("验证：单抽3星");  // test
                let n3 = Math.floor(Math.random() * 13) + 1;  // 这个数与素材中的三星数量有关
                // num3++;
                // count5++;
                // count4++;
                // code start here
                // playVideo_3(n3);
                playVideo(3, n3);
            }
            else
            {
                alert("程序出错了！！！")
            }
            
        
        },
        handle4: function(){
            // var audio = new Audio("src/img/button.mp3");
            // audio.play();
            // 加流星动画
            var getstar = this.handle3_tenth();
            
            //num++;
            for (let i = 0; i < 10; i++)
            {
                if (getstar[i] == 5)  // 5星概率
                {

                    console.log("5星");  // test
                    //num5++;
                    //count5 = 0;
                    let n2 = Math.random();
                    console.log("n2 = ", n2);  // test
                    if (n2 < 0.5 || greatcount5 == 1)
                    {
                        console.log("抽中up角色");
                        // code start here
                        //count5=89;
                        //playVideo_up5(selectedItem5);
                        videoid.push("heroup5_"+selectedItem5+".mp4");
                        //console.log("video id = ", videoid[0]);
                        greatcount5 = 0;
                    }
                    else
                    {
                        console.log("小保底歪咯");
                        let n3 = Math.floor(Math.random() * 4) + 1;
                        console.log("n3 = ", n3);  // test
                        // code start here
                        // playVideo_5(n3);
                        videoid.push("hero5_"+n3+".mp4");
                        greatcount5 = 1;
                    }
                }
                else if (getstar[i] == 4)  // 4星概率
                {
                    console.log("4星");  // test
                    // num4++;
                    // count5++;
                    // count4 = 0;
                    let n2 = Math.random();
                    console.log("n2 = ", n2);  // test
                    if (n2 < 0.5 || greatcount5 == 1)
                    {
                        console.log("抽中up角色");  // test
                        num4_1++;
                        let n3 = Math.floor(Math.random() * 3) + 1;  // 三个up四星之一
                        // code start here
                        let n33;
                        switch (n3){
                            case 1:
                                n33 = selectedItems4[0];
                                break;
                            case 2:
                                n33 = selectedItems4[1];
                                break;
                            case 3:
                                n33 = selectedItems4[2];
                                break;
                            default:
                                alert("程序出错了！！！");
                        }
                        //playVideo_hero4(n33);
                        videoid.push("hero4_"+n33+".mp4");
                    }
                    else
                    {
                        console.log("其他4星");  // test
                        let n3 = Math.floor(Math.random() * 28) + 1;  // 这个数与素材中的四星数量有关
                        console.log("n3 = ", n3);  // test
                        if (n3 <= 16)
                        {
                            num4_1++;
                            console.log("4星角色");  // test
                            // code start here
                            //playVideo_hero4(n3);
                            videoid.push("hero4_"+n3+".mp4");

                        }
                        else
                        {
                            num4_2++;
                            console.log("4星武器");  // test
                            let n4 = n3 - 16;
                            // code start here
                            //playVideo_weapon4(n4);
                            videoid.push("weapon4_"+n4+".mp4");

                        }
                    }
                }
                else if (getstar[i] == 3)
                {
                    console.log("3星");  // test
                    let n3 = Math.floor(Math.random() * 13) + 1;  // 这个数与素材中的三星数量有关
                    // num3++;
                    // count5++;
                    // count4++;
                    // code start here
                    //playVideo_3(n3);
                    videoid.push("weapon3_"+n3+".mp4");

                }
                else
                {
                    alert("程序出错了！！！")
                }
            }
            playVideo(starvideoid, 0);
            // playVideo1(videoid[0]);
            // playVideo2(videoid[1]);
            // playVideo3(videoid[2]);
            // playVideo4(videoid[3]);
            // playVideo5(videoid[4]);
            // playVideo6(videoid[5]);
            // playVideo7(videoid[6]);
            // playVideo8(videoid[7]);
            // playVideo9(videoid[8]);
            // playVideo10(videoid[9]);
            //

        }

    }
})

new Vue({
    el: ".type3",
    data:{

    },
    methods: {
        handle5: function(){
            // var audio = new Audio("src/img/button.mp3");
            // audio.play();
            // 十连抽五星动画
            console.log("op模式启动！！！");
            for (let times = 0; times < 90; times++)
            {
                //展示角色视频
                let n = Math.floor(Math.random() * 10) + 1;
                opvideoid.push("heroup5_"+n+".mp4");
            }
        var yy = 0;
        // OPvideo1(opvideoid[0], yy);

            playOPVideo(yy);
        }

    }
})

