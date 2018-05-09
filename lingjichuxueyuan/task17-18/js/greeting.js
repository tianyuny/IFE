!function() {
   var say = document.createElement('h2'),
       item = document.querySelector('.item'),
       time = new Date().getHours(),
       text;
   if(time > -1 && time < 2) text = '别熬夜哦';
   else if(time > 1 && time < 5) text = '喂！身体是革命的本钱，都几点啦！';
   else if(time > 4 && time < 7) text = '哦，您真早';
   else if(time > 6 && time < 11) text = '早上好';
   else if(time > 10 && time < 14) text = '中午好，吃午饭了吗';
   else if(time > 13 && time < 18) text = '下午好';
   else if(time > 17 && time < 20) text = '有吃晚餐吗';
   else text = '晚上好';
   say.textContent = text;
   item.parentNode.insertBefore(say, item);
}();