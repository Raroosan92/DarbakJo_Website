
let nav=document.querySelector(".navbar");
let slider=document.querySelector(".carousel");
onscroll = (event) => {
if(window.scrollY>60){
nav.style.position="fixed";
nav.style.zIndex="10";
nav.style.width="100%";
}
else {
    nav.style.position="relative"; 
}
};  

$(document).ready(function(){
	$('.nav-items').click(function(){
		// reset active class
		$('.nav-items').removeClass("active");
		// add active class to selected
		$(this).addClass("active");
		// return needed to make function work
		return false;
	});
	
	
	$(function() {
		// create an empty variable
		var selectedClass = "";
		// call function when item is clicked
		$(".nav-items").click(function(){
			// assigns class to selected item
			selectedClass = $(this).attr("data-rel");
			// fades out all portfolio items
			$(".portfolio li").fadeOut(300);
			// fades in selected category
			$(".portfolio li." + selectedClass).delay(300).fadeIn(300);
		});
	});
  
}); // document ready

$(document).ready(function(){
    var mixer=mixitup('.box-list',{		
		animation: {
			effects: 'fade scale(0.5)'
		},
		controls: {
			toggleDefault: 'day1'
		},
		load: {
			filter: '.cat3'
		}	});
	});
var acordion = document.getElementsByClassName('accordion');

var i;
var len = acordion.length;
for(i = 0; i<len; i++){
    acordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var panal = this.nextElementSibling;
        if(panal.style.maxHeight){
            panal.style.maxHeight = null;
        }else{
            panal.style.maxHeight = panal.scrollHeight + 'px';
        }
    })
}
function signalert(){
	
}