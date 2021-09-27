canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploading; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}



function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		function my_keydown(e){
			keypressed=e.keyCode;
			console.log(keypressed);
			if(keypressed=="60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,78,79,80,81,82,83,84,85,86,87,88,89,90") {
			(alphabet);
			 console.log("alphabet");
			 
			 
			}
			if(keypressed=="38") {
				up();
				console.log("up");
				   
			   }
			   if(keypressed=="39") {
				right();
				console.log("right");
				   
			   }
			   if(keypressed=="40") {
				down();
				console.log("down");
				   
			   }
		   }
		
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}