
$(document).ready(function() {

    $('.header-itm').mousemove(function() {
        $(this).find('.son').slideDown();
    });
    $('.header-itm').mouseleave(function() {
        $(this).find('.son').slideUp("fast");
    });



    $('#ne-three').mousemove(function() {
        $(this).find('.ne-fllter').slideDown();
    });
    $('#ne-three').mouseleave(function() {
        $(this).find('.ne-fllter').slideUp("fast");
    });
    $('#ne-teacher').mousemove(function() {
        $(this).find('.ne-main').slideDown();
    });
    $('#ne-teacher').mouseleave(function() {
        $(this).find('.ne-main').slideUp("fast");
    });

    $('#son-yanjiu').mousemove(function() {
        $(this).find('.ne-yanjiu').slideDown();
    });
    $('#son-yanjiu').mouseleave(function() {
        $(this).find('.ne-yanjiu').slideUp("fast");
    });
    $('#son-bisai').mousemove(function() {
        $(this).find('.ne-bisai').slideDown();
    });
    $('#son-bisai').mouseleave(function() {
        $(this).find('.ne-bisai').slideUp("fast");
    });
    // ne-three
});
// $("#ne-three").on("click",function(){
// 	$(".ne-fllter").css("display","block");
// })
// $('#ne-three').mousemove(function() {
//         $(this).find('.ne-fllter').slideDown();
//     });
//     $('#ne-three').mouseleave(function() {
//         $(this).find('.ne-fllter').slideUp("fast");
//     });

var wrap = document.querySelector(".pu-img");
var next = document.querySelector(".pu-btn-r");
var prev = document.querySelector(".pu-btn-l");

var index = 1;
next.onclick = function () {
	next_pic();
}

prev.onclick = function () {
	prev_pic();
}
function next_pic () {
	index++;
	if(index > 5){
		index = 1;
		wrap.style.left = 0+"px";
	}
	showCurrentDot();
	var newLeft;
	animate(index);
}
function prev_pic () {
	index--;
	if(index < 1){
		index = 5;
		wrap.style.left=-6840 +"px";
//  alert(index);
}
showCurrentDot();
animate(index);
}
var timer = null;
function autoPlay () {
	timer = setInterval(function () {
		next_pic();
	},4500);
}
autoPlay();

var container = document.querySelector(".pu-img");
container.onmouseenter = function () {
	clearInterval(timer);
}
container.onmouseleave = function () {
	autoPlay();  
}

var dots = document.getElementById("pu-num").getElementsByTagName('li');
function showCurrentDot () {
		// alert(dots);
		for(var i = 0, len = dots.length; i < len; i++){

			dots[i].className = "";
		}
		dots[index-1].className = "pu-on";
	}

	for (var i = 0, len = dots.length; i < len; i++){
		(function(i){
			dots[i].onclick = function () {

				console.log(i);
      // span具有index的属性  从1到4；
      var clickIndex = parseInt(this.getAttribute('index'));
      // alert(clickIndex);
			animate(clickIndex); //存放鼠标点击后的位置，用于小圆点的正常显示 
			index = clickIndex;
			showCurrentDot();
		}
	})(i);      
}



function animate(offset) {                   
	var change = offset * -1140;
	startMove(wrap, {left: change});
}    

// start 函数
function startMove(obj, json) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () { 
		var flag = true;
		for (var k in json) {

			var leader = parseInt(getStyle(obj, k)) || 0;
			var target = json[k];
			var step = (target - leader) / 15;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			leader = leader + step;
			obj.style[k] = leader + "px";
			
			if (leader != target) {

                flag = false;//告诉标记 当前这个属性还没到达
            }
        }

        if (flag) {
        	// 如果达到清除计时器
        	clearInterval(obj.timer);
        	
        }
    }, 25);
}

//获取css中的样式
function getStyle(obj,attr){ 
	if(obj.currentStyle){ 
		return obj.currentStyle[attr]; 
	} 
	else{ 
		return getComputedStyle(obj,false)[attr]; 
	} 
}
