
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
 		var y=scrollY;
 		var x=scrollY;
 		var i=0;

 		// while(y<Ydist){
 		// 	setTimeout(function(){
 		// 		x+=15;
 		// 		scrollTo(0,x);
 		// 	},i*5);
 		// 	y+=15;
 		// 	i+=1;
 		// }

 		y=setInterval(function(){
 			if(scrollY>Ydist){
 				clearTimeout(y);
 			}
 			if ((window.innerHeight + window.scrollY + 20) >= document.body.offsetHeight) {
        		clearTimeout(y);
    		}
 			scrollTo(0,scrollY+15);
 		},1);
 		

 	}

 }