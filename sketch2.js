var imglist;
var imgj=[];
var x=[];
var y=[];
var pinNum=Array ();
var bx=120;
var by=120;
var xo=100;
var yo=60;
var xOffset;
var yOffset;
var array;

function preload() {
  // Get the most recent earthquake in the database
  // var url ='pin.JSON';
  var url ='imglist.JSON';
  imglist = loadJSON(url,getimg);
}

function getimg(jsonData) {
  data = jsonData;

  boardNum = data.board.length;

  console.log(boardNum);
  console.log(data.board[0]);
  console.log(data.board[0].imgj[1]);

  for (var i = 0; i < boardNum; i++) {
    // images[i] = loadImage("images/image" + data[i].imageId + ".png");
    // imgurl = data.data.pins[i].images.smimg.url;
    pinNum[i] = data.board[i].imgj.length;
    imgj[i]=[];
    x[i]=[];
    y[i]=[];
    for(var j=0; j<pinNum[i];j++){
    imgurl = data.board[i].imgj[j].imageurl;
    imgj[i][j] = loadImage(imgurl);
    x[i][j]=(bx/2)*j+2*bx*i;
    y[i][j]=by*(j%2)+2.5*by*(i%2);
    }
  }

}


function setup() {
  createCanvas(windowWidth, windowHeight);

                  button1 = createButton('Grid');
                  button1.position(windowWidth-100,100);
                  button1.size(60,25);
                  button1.mousePressed(arraygrid);
                  button1.class("btn btn-outline-primary");

                  button2 = createButton('Group');
                  button2.position(windowWidth-180,100);
                  button2.size(60,25);
                  button2.mousePressed(groupgrid);
                  button2.class("btn btn-outline-primary");

  }


function mousePressed() {

                // if(overBox) { 
                //    locked = true; 
                // } else {
                //    locked = false;
                // }

               
                  xOffset = mouseX-xo; 
                  yOffset = mouseY-yo; 
                
                }



function mouseDragged() {

 // if(locked) {
   clear();
    xo = mouseX-xOffset; 
    yo = mouseY-yOffset; 
    
    
}



function mouseReleased() {
  clear();
  // locked = false;
}



function arraygrid(){

    clear();     


    for (var i = 0; i < boardNum; i++) {
	    for(var j=0; j<pinNum[i];j++){
	    	var arn=Math.floor(windowWidth/bx);
	    	x[i][j]=120*j;
	    	y[i][j]=120*i;
     }

    array=true;
}
}



function groupgrid(){

    clear();     


    for (var i = 0; i < boardNum; i++) {
	    for(var j=0; j<pinNum[i];j++){
	    	var arn=Math.floor(windowWidth/bx);
	    	x[i][j]=(bx/2)*j+2*bx*i;
            y[i][j]=by*(j%2)+2.5*by*(i%2);
     }

     if (array == true){
     	
     }

}
}


function draw(){
	for (var i = 0; i < boardNum; i++) {
    // images[i] = loadImage("images/image" + data[i].imageId + ".png");
    // imgurl = data.data.pins[i].images.smimg.url;
    for(var j=0; j<pinNum[i];j++){
    image(imgj[i][j],xo+x[i][j],yo+y[i][j],bx-5,by-5);}
     }
}








