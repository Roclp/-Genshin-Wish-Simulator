const button = document.querySelector('.type3');
button.addEventListener('mousedown', zoomIn);
button.addEventListener('mouseup', zoomOut);
function zoomIn() {
    button.style.animation = 'zoom-in 0.4s forwards';
    // console.log("欢迎OP们来到我的网站！");
    // count5++;
    // console.log("count5 = ", count5);
}
function zoomOut() {
    button.style.animation = 'zoom-out 0.4s forwards';
}

new Vue({
    el: "#type01", 
    data:{
       
    },
    methods: {
        handle1: function(){
            var audio = new Audio("src/img/button.mp3");
            audio.play();
            alert("软件简介：\n这个软件是为了给原P们，啊不，帅哥美女们一个测试自己欧气的机会。\n祈愿一次和祈愿十次中五星的概率和官方一致，均为0.06%。四星出货概率为5.20%，较官方多了0.10%。（别问为什么不一致问就是懒）\n同时较上一个版本将出货概率优化了，五星概率从第77抽开始增加，四星概率从第7抽开始增加。\n当然，如果你点击进入了原P 模式的话……那你就自己尝试一下啦！！！\n为了保障程序不会卡崩，原P 模式为一次性90抽。");
            console.log("1111");
        },
        handle2: function(){
            var audio = new Audio("src/img/button.mp3");
            audio.play();
            alert("历史记录：\n两个小时以内的查不到啊（bushi）\n总计："+num+"抽\n已累计"+count5+"抽未出5星\n当前状态："+(greatcount5==1?"大保底":"小保底")+"\n五星： "+num5+"\n四星： "+num4+"\n三星： "+num3+"\n五星平均出货概率为： "+(num5 / num * 100).toFixed(2)+"%");
            // 我始终想不通这里的count5为什么会多1.。。
            console.log("2222");
        }
    }
})