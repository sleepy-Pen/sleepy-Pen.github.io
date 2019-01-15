var imglist;
var imgj=[];
var x=[];
var y=[];
var xn=[];
var yn=[];
var pinNum=Array ();
var bx=120;
var by=120;
var xo=100;
var yo=120;
var xOffset;
var yOffset;
var array=false;
var wx;

function preload() {
  // Get the most recent earthquake in the database
  // var url ='pin.JSON';
  var url ='../imglist.JSON';
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
    imgj[i][j] = createImg(imgurl);
    x[i][j]=(bx/2)*j+2*bx*i;
    y[i][j]=by*(j%2)+2.5*by*(i%2);
    }
  }

}

function windowResized() {
               if (windowWidth < 1200){
                wx=1200;
               }
               else{
                wx=windowWidth;
               }
               resizeCanvas(wx, windowHeight);
}

function setup() {


  if (windowWidth < 1200){
                wx=1200;
               }
               else{
                wx=windowWidth;
               }
                           
  createCanvas(wx, windowHeight);

                  button1 = createButton('Grid');
                  button1.position(wx-wx/14.4,80);
                  button1.size(60,25);
                  button1.mousePressed(arraygrid);
                  button1.class("btn btn-outline-primary");

                  button2 = createButton('Group');
                  button2.position(wx-wx/8,80);
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
    xo = mouseX-xOffset; 
    yo = mouseY-yOffset;     
}



function mouseReleased() {

  // locked = false;
}



function arraygrid(){

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

    for (var i = 0; i < boardNum; i++) {
    	xn[i]=[];
    	yn[i]=[];
	    for(var j=0; j<pinNum[i];j++){
	    	var arn=Math.floor(windowWidth/bx);
	    	xn[i][j]=(bx/2)*j+2*bx*i;
            yn[i][j]=by*(j%2)+2.5*by*(i%2);

        x[i][j]=xn[i][j];
        y[i][j]=yn[i][j];
     }
 }


     
    //  if (array == true){
    //    while (x[i][j] != xn[i][j]|y[i][j] != yn[i][j]){
    //  	x[i][j] = x[i][j]+(xn[i][j]-x[i][j])/10;
    //  	y[i][j] = y[i][j]+(yn[i][j]-y[i][j])/10;
    //  }
    // }
    //  else{
    //  	x[i][j]=xn[i][j];
    //     y[i][j]=yn[i][j];
    //  }

     array = false;
}


function draw(){
	for (var i = 0; i < boardNum; i++) {
    // images[i] = loadImage("images/image" + data[i].imageId + ".png");
    // imgurl = data.data.pins[i].images.smimg.url;
    for(var j=0; j<pinNum[i];j++){
    imgj[i][j].position(xo+x[i][j], yo+y[i][j]);
    imgj[i][j].size(bx-5,by-5)}
     }
}








