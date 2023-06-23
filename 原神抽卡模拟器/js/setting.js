// import Element from '../vue/element.vue';

// 获取选择角色元素和浮窗元素
var btn = document.getElementById('details');
var floatWindow = document.getElementById('float-window');

// 给选择角色添加点击事件
btn.onclick = function() {
  var audio = new Audio("src/img/button.mp3");
  audio.play();
  floatWindow.style.display = 'block'; // 显示浮窗
  // floatWindow.style.opacity = '1'; // 设置浮窗不透明，即显示出来
};

console.log("经过监测点3");
var confirmBtn = document.getElementById('confirm-btn');  // 获取角色提交按钮
var radioOptionEles = document.querySelectorAll('input[name="radio-option"]');  // 获取五星角色
var checkboxOptionEles = document.querySelectorAll('input[name="checkbox-option"]');  // 获取四星角色
console.log("经过监测点4");

// 初始化所选项的编号
var selectedItem5 = 1; // 定义一个空数组，用来记录所选项的编号
var selectedItems4 = [3,8,15]; // 定义一个空数组，用来记录所选项的编号
console.log(selectedItems4[0]);
console.log(selectedItems4[1]);
console.log(selectedItems4[2]);
console.log(selectedItem5);


confirmBtn.onclick = function() {
  var audio = new Audio("src/img/button.mp3");
  audio.play();
  console.log("经过监测点1");
  selectedItem5 = 0; // 定义一个空数组，用来记录所选项的编号
  selectedItems4.length = 0; // 定义一个空数组，用来记录所选项的编号

  // 处理多选
  var selectedCount = 0;
  if (checkboxOptionEles[16].checked || checkboxOptionEles[17].checked)
  {
    alert('虽然知道你想选，但是这个角色还没出呢！！！');
    selectedItems4.length = 0;
    return;
  }
  for (let i = 0; i < checkboxOptionEles.length; i++) {
    if (checkboxOptionEles[i].checked) {
      // 如果该多选选项被选中，则将其编号记录下来
      selectedItems4.push(checkboxOptionEles[i].value);
      selectedCount++; // 统计已经选中的选项个数
    }  
  }
  if (selectedCount != 3) {
    // 当已经选中3个选项时，退出循环
    alert('请选择三个角色！！！');
    selectedCount = 0;
    // for(let i = 0; i < selectedItems4.length; i++) {
    //   console.log(selectedItems4[i]);
    // }
    selectedItems4.length = 0;
    //console.log("经过监测点2.1");
    // for(let i = 0; i < selectedItems4.length; i++) {
    //   console.log(selectedItems4[i]);
    // }
    console.log("经过监测点2");
    return;
  }


  // 处理单选
  for (let i = 0; i < radioOptionEles.length; i++) {
    if (radioOptionEles[i].checked) {
      // 如果该单选选项被选中，则将其编号记录下来
      selectedItem5 = radioOptionEles[i].value;
      break; // 单选只能选择一个，因此找到一个选中的选项后就退出循环
    }
  }
  if (selectedItem5 == 0) {//虽然但是这里是走不到的
    alert('请选择一个角色！！！');
    return;
  }
  // 将所选项的编号显示在控制台
  console.log(selectedItems4[0]);
  console.log(selectedItems4[1]);
  console.log(selectedItems4[2]);
  console.log(selectedItem5);
  

  // 隐藏浮窗
  floatWindow.style.display = 'none';
  // floatWindow.style.opacity = '0';
};

// var confirmBtn = document.getElementById('confirm-btn');

// confirmBtn.onclick = function() {
//   var selectedItems = []; // 定义一个空数组，用来记录所选项的编号
//   var items = document.querySelectorAll('#float-window li'); // 获取所有选项元素

//   for (var i = 0; i < items.length; i++) {
//     if (items[i].classList.contains('selected')) {
//       // 如果该选项被选中，则将其编号记录下来
//       selectedItems.push(i + 1);
//     }
//   }

//   // 将所选项的编号显示在页面上
//   var resultEle = document.getElementById('result');
//   resultEle.innerHTML = '您选中了：' + selectedItems.join(',');
// };


// var items = document.querySelectorAll('#float-window li');

// for (var i = 0; i < items.length; i++) {
//   items[i].onclick = function() {
//     // 切换选中状态
//     if (this.classList.contains('selected')) {
//       this.classList.remove('selected');
//     } else {
//       this.classList.add('selected');
//     }
//   };
// }
