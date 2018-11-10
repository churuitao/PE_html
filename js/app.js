//var num;
function myElement (id) {
	return document.getElementById(id);
}
function animate2(element, targent) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
      var current = element.offsetLeft;
      var step = 10;
      step = current < target ? step : -step;
      current += step;
      if (Math.abs(current - target) > Math.abs(step)) {
        element.style.left = current + "px";
      } else {
        clearInterval(element.timeId);
        element.style.left = target + "px";
      }
    }, 10);	

}
function clickHandle() {
	
    if (pic == list.length - 1) {
      pic = 0;//先设置pic=0
      ulObj.style.left = 0 + "px";
    }
    num=1+pic++;
   
    animate2(ulObj, -pic * imgWidth);
    if (pic == list.length - 1) {
      olObj.children[olObj.children.length - 1].className = "";
      olObj.children[0].className = "current";
      num=0;
    } else {
      for (var i = 0; i < olObj.children.length; i++) {
        olObj.children[i].removeAttribute("class");
      }
      olObj.children[pic].className = "current";
    }
     text();
};
function animate2(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
      var current = element.offsetLeft;
      var step = 10;
      step = current < target ? step : -step;
      current += step;
      if (Math.abs(current - target) > Math.abs(step)) {
        element.style.left = current + "px";
      } else {
        clearInterval(element.timeId);
        element.style.left = target + "px";
      }
    }, 10);
  }
function text () {
	// if("0"== num){
	// 	// myElement("bbb").innerText="体育学院2008届毕业生重返母校";
	// }else if("1" == num){
	// 	// console.log("bbbbbbbbbb"+num)
	// 	// myElement("bbb").innerText="体育学院第四十七期党的基本知识培训班开班";
	// 	// console.log("bbbbbbbbbbcsd"+num)
	// }else if("2" == num){
	// 	// myElement("bbb").innerText="体育学院开展“迎国庆”主题党日活动";
	// }else if ("3" == num){
	// 	// myElement("bbb").innerText="体育学院举行2018级迎新晚会";
	// }else if ("4" == num){
	// 	// myElement("bbb").innerText="体育学院领导看望军训教官及全体新生";
	// }
  			}
			var box =myElement("box");
			var ulObj =box.children[0];
			var imgWidth =box.offsetWidth;
			var list = ulObj.children;
			var olObj=box.children[1];
			var pic =0;
			var num=0;
			for (var i = 0; i < list.length; i++) {
    			var liObj = document.createElement("li");
    			olObj.appendChild(liObj);
    			liObj.innerHTML = (i + 1);
    			liObj.setAttribute("index", i);
    			liObj.onmouseover = function () {
      					for (var j = 0; j < olObj.children.length; j++) {
        				olObj.children[j].removeAttribute("class");
      					}
      				this.className = "current";
      				pic = this.getAttribute("index");
      				num=pic;
      				//移动ul
      				animate2(ulObj, -pic * imgWidth);
					console.log(pic)
					text();

    			};
  			}
  			olObj.children[0].className = "current";
			var timeId= setInterval(clickHandle,3000);
			ulObj.appendChild(ulObj.children[0].cloneNode(true));
  			box.onmouseover = function () {
    		clearInterval(timeId);
  			};
  			box.onmouseout = function () {
    		timeId= setInterval(clickHandle,3000);
  			};
