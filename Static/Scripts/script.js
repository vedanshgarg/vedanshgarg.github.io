
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

 		// while(scrollY<Ydist){
 		// 	setTimeout(function(){
 		// 		scrollTo(0,scrollY+15);
 		// 	},1);
 		// }

 		y=setInterval(function(){
 			if(scrollY+20>Ydist){
 				clearTimeout(y);
 			}
 			if ((window.innerHeight + window.scrollY + 20) >= document.body.offsetHeight) {
        		clearTimeout(y);
    		}
 			scrollTo(0,scrollY+15);
 		},1);
 		

 	}

 }