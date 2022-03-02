	var speed = 50;
	var pic, numImgs, arrLeft, i, totalWidth, n, myInterval; 

$(window).load(function(){
	pic = $("#slider").children("img");
	numImgs = pic.length;
	arrLeft = new Array(numImgs);
	
	for (i=0;i<numImgs;i++){
		
		totalWidth=0;
		for(n=0;n<i;n++){
			totalWidth += $(pic[n]).width();
		}
		
		arrLeft[i] = totalWidth;
		$(pic[i]).css("left",totalWidth);
	}
	
	myInterval = setInterval("flexiScroll()",speed);
	$('#imageloader').hide();
	$(pic).show();	
});

function flexiScroll(){

	for (i=0;i<numImgs;i++){
		arrLeft[i] -= 1;		

		if (arrLeft[i] == -($(pic[i]).width())){	
			totalWidth = 0;	
			for (n=0;n<numImgs;n++){
				if (n!=i){	
					totalWidth += $(pic[n]).width();
				}			
			}	
			arrLeft[i] =  totalWidth;	
		}					
		$(pic[i]).css("left",arrLeft[i]);
	}
}

var pic2, numImgs2, arrLeft2, i, totalWidth, n, myInterval; 

$(window).load(function(){
	pic2 = $("#slider2").children("img");
	numImgs2 = pic2.length;
	arrLeft2 = new Array(numImgs2);
	
	for (i=0;i<numImgs2;i++){
		
		totalWidth=0;
		for(n=0;n<i;n++){
			totalWidth += $(pic2[n]).width();
		}
		
		arrLeft2[i] = totalWidth;
		$(pic2[i]).css("left",totalWidth);
	}
	
	myInterval = setInterval("flexiScroll2()",speed);
	$('#imageloader2').hide();
	$(pic2).show();	
});

function flexiScroll2(){

	for (i=0;i<numImgs2;i++){
		arrLeft2[i] -= 1;		

		if (arrLeft2[i] == -($(pic2[i]).width())){	
			totalWidth = 0;	
			for (n=0;n<numImgs2;n++){
				if (n!=i){	
					totalWidth += $(pic2[n]).width();
				}			
			}	
			arrLeft2[i] =  totalWidth;	
		}					
		$(pic2[i]).css("left",arrLeft2[i]);
	}
}
