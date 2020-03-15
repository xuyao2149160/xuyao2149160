console.log('执行demo0006.js');
//获取当前的时间
//var 变量名=变量值 new date （）就是当前的日期时间
var now = new Date();
console.log(now);
//获取时间的某一个部分
//小时,分钟，秒
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
console.log('小时：', hour);
console.log('分钟:', minute);
console.log('秒：', second);
//年月日,月份是0到11，表示1到12月
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
console.log(year, month, day);

document.getElementById('spTime').innerHTML =
  hour + ':' + minute + ':' + second;

//这是反复间隔时间执行代码
//第一个参数是要执行的代码，第二个参数是间隔的毫秒值，1000就是一秒（每隔一秒钟执行代码）
setInterval(function() {
 // console.log(new Date());
 now =new Date();
 hour=now.getHours();
 minute=now.getMinutes();
 second=now.getSeconds();
 //补零的现在还没学
 second= second<10?'0' + second:''+second;
 document.getElementById('spTime').innerHTML=
 hour+':'+minute+':'+second;
}, 1000);
//作业：将时间显示成xxxx年xx日xx  xx时xx分xx秒，思考：不显示秒，但是一分钟更新



















