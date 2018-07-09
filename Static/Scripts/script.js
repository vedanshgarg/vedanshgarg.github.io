var header=document.querySelector('#header-main');

var i=0;
header.addEventListener('click',function () {
	var arr=["red","green","blue"];

	this.style.background=arr[i%3];
	i++;
});

var spec=document.querySelector('#specialization');
Yspec=spec.getBoundingClientRect().y;

var nav=document.querySelector('#navigation');
var navList=nav.querySelectorAll('li');
var navArr=[];
var j=0;
 for(var i=0;i<navList.length;i++){
 	console.log(navList[i].innerText);
 	navArr[i]=navList[i].firstChild.attributes.href.nodeValue;
 	console.log(navArr[i]);
 	navList[i].addEventListener('click',ScrollClick);

 	function ScrollClick(e){
 		e.preventDefault();
 		var getId=event.toElement.hash;
 		console.log(getId);
 		var dist=document.querySelector(getId);
		Ydist=dist.getBoundingClientRect().y;
 		console.log(Ydist);

 		y=setInterval(function(){
 			if(scrollY+20>Ydist){
 				clearTimeout(y);
 			}
 			if ((window.innerHeight + window.scrollY + 20) >= document.body.offsetHeight) {
        		clearTimeout(y);
    		}
 			scrollTo(0,scrollY+10);
 		},1);
 		

 	}

 }