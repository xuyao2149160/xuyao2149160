//alert('弹出确定框！');

//新知识，变量，就是用来记录东西的
//var 变量的名称 =初始值；
var count = 0;
//将spCount的内容设置成0
document.getElementById('spCount').innerHTML = count;
//计数按钮的动作
document.getElementById('btnCount').addEventListener('click', function() {
  //变量名称=等于新值；来修改量的内容
  count = count + 1;
  document.getElementById('spCount').innerHTML = count;
});
