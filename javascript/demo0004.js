console.log('进入demo0004.js');

document.getElementById('sp01').addEventListener('click',function(){
//js修改元素的属性值
//元素，setAttribute('属性的名称'，'属性的值')自己加：setattribute是设置属性意思,就是修改属性
//下面的代码表示将id是main的元素的class属性修改成style01
document.getElementById('main').setAttribute('class','style01');
//<开始标记 属性名称="属性的值" 属性值="1">标记的内容</结束标记>
//<input type="password" placeholder="请输入密码">
});
//元素.addEventListener('click',function(){};click是点击要执行的动作)
document.getElementById('sp02').addEventListener('click',function(){
  document.getElementById('main').setAttribute('class','style02');
});





















