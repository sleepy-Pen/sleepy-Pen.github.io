var imglist;
var img=[];
var x=[];
var y=[];
var xn=[];
var yn=[];
var pinNum=[];
var bx=120;
var by=120;
var xo=100;
var yo=120;
var xOffset;
var yOffset;
var array=false;
var group=true;
var selfadj=false;
var wx;
var tag=[];
var showtag;
var bounds;
var fontsize;
var font;
var tagname=[];
var filtertag;
var sel;
var tagpin=[];
var filterpin =false;
var tagfilter;


function preload() {
  // Get the most recent earthquake in the database
  // var url ='pin.JSON';
  var url ='./imglist.JSON';
  imglist = loadJSON(url,getimg);
  font = loadFont('resources/helvetica.ttf');
}


function mouseWheel(event) {
               
                  clear();   
                  print(event.delta);
                  //move the square according to the vertical scroll amount
   
        bx=max(60,bx*(1+(event.delta/100)));
        by=max(60,by*(1+(event.delta/100)));

        
        //open if you want to focus on a pic
    //     if (bx*(1+(event.delta/100))>60){
    //       xo-=(mouseX-xo)*(event.delta/100);
    //     yo-=(mouseY-yo)*(event.delta/100);}
        
    // else{
    //   xo=100;
    //   yo=120;
    // }
               
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
    img[i]=[];
    x[i]=[];
    y[i]=[];
    tag[i]=[];
    tagname[i]=[];
    for(var j=0; j<pinNum[i];j++){
    imgurl = data.board[i].imgj[j].imageurl;
    img[i][j] = loadImage(imgurl);
    tag[i][j]=data.board[i].imgj[j].tag;
    tagname[i][j]=data.task[tag[i][j]].name;
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
               resizeCanvas(wx, windowHeight-80);
}

function setup() {


  if (windowWidth < 1200){
                wx=1200;
               }
               else{
                wx=windowWidth;
               }
                           
  let myCanvas= createCanvas(wx, windowHeight-80);
  myCanvas.parent("p5canvas");  


                  checkbox1 = createCheckbox('Show Tags', false);
                  checkbox1.position(wx-200,80);
                  checkbox1.changed(showtag); 

                  radio = createRadio();
                  radio.position(wx-100,80);
                  radio.option('self-adjust',1);
                  radio.option('Array',2);
                  radio.option('Group',3);
                  radio.style('width', '60px');
                 
                 
                  sel = createSelect();
                  sel.position(wx-320,80);
                  sel.option("all");
                  for (var i=0; i<imglist.task.length;i++){
                  sel.option(imglist.task[i].name);
                  }
                  sel.changed(filterpint);
                 
                 
 }


function mousePressed() {

                // if(overBox) { 
                //    locked = true; 
                // } else {
                //    locked = false;
                // }

               
                  xOffset = mouseX-xo; 
                  yOffset = mouseY-yo; 
                  clear();   
                
                }



function mouseDragged() {

 // if(locked) {
    xo = mouseX-xOffset; 
    yo = mouseY-yOffset;  
    
    clear();   
}



function mouseReleased() {
  // locked = false;
}

          

function arraygrid(){
}



function groupgrid(){
   
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

}


function filterpint(){
  clear();

   tagfilter = sel.value();

    if (tagfilter == "all"){
    filterpin=false;
    }
    else{
      filterpin=true;

    }

}


function draw(){
    radioval = radio.value();
    if (radioval=='1'){selfadj=true;array=false;group=false;clear();}
    else if (radioval=='2'){selfadj=false;array=true;group=false;clear();}
    else if (radioval=='3'){selfadj=false;array=false;group=true;clear();}

    if (filterpin==false){
  //result of radio
    if (selfadj=true&&group==false&&array==false){
           var imgnum=0;
             for (var i = 0; i < boardNum; i++) {
            for(var j=0; j<pinNum[i];j++){
              if (Math.floor((windowWidth)/(bx))>1){
              var arn=Math.floor((windowWidth)/(bx))-1;
               }
              else{
                arn=1;
              }
            x[i][j]=imgnum%arn*(bx);
            y[i][j]=Math.floor(imgnum/arn)*(by);
            imgnum+=1;
           }
         }
        }

    else if (array=true&&group==false&&selfadj==false){
           for (var i = 0; i < boardNum; i++) {
            for(var j=0; j<pinNum[i];j++){
              var arn=Math.floor(windowWidth/bx);
              x[i][j]=bx*j;
              y[i][j]=by*i;
           }
         }
    }

    else if(group=true&&selfadj==false&&array==false){
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
    }
 //end of result of radio

//draw pic without filter
	 for (var i = 0; i < boardNum; i++) {
    // images[i] = loadImage("images/image" + data[i].imageId + ".png");
    // imgurl = data.data.pins[i].images.smimg.url;
    for(var j=0; j<pinNum[i];j++){
    image(img[i][j],xo+x[i][j], yo+y[i][j],bx-5,by-5);
    if (showtag==true){
      if(bx/12>24){
        fontsize=24;
      }
      else{
       fontsize=bx/10; 
      }
      
      textFont(font);
      textSize(fontsize);
      
     bounds = font.textBounds(tagname[i][j], xo+x[i][j]+bx-5-bx/3,yo+y[i][j]+by-5, fontsize);
     fill(120-tag[i][j]*5,tag[i][j]*30,240-tag[i][j]*30);
     strokeWeight(0);
     filtertag=rect(xo+x[i][j]+bx-5-bounds.w-fontsize/2,yo+y[i][j]+by-5-bounds.h-fontsize/2,bounds.w+fontsize/2,bounds.h+fontsize/2);
     
     fill(255);
     text(tagname[i][j],xo+x[i][j]+bx-5-bounds.w-fontsize/4,yo+y[i][j]+by-5-bounds.h+fontsize/2);

     textAlign(LEFT);
     }
     }

    }
//end of draw pic without filter

}

//result of filter
      else if(filterpin==true){
           var tagnum =0;
       
           for (var i = 0; i < boardNum; i++) {
           for(var j=0; j<pinNum[i];j++){
           if (tagname[i][j] == tagfilter){
            var arn=Math.floor((windowWidth)/(bx))-1;
            x[i][j]=tagnum%arn*(bx);
            y[i][j]=Math.floor(tagnum/arn)*(by);
            image(img[i][j],xo+x[i][j], yo+y[i][j],bx-5,by-5);
            tagnum+=1;
          }
          else{
            break;
          }
          }
          
          } 
      }
//end of result of filter

fill(255);
rect(0,0,windowWidth,60);

}



function showtag(){
  if (this.checked()) {
    showtag=true;
  } else {
    showtag=false;
  }
  
}



function hover(){
  fill(120-tag[i][j]*5,tag[i][j]*30,240-tag[i][j]*30);
     strokeWeight(0);
     filtertag=rect(xo+x[i][j]+bx-5-bounds.w-fontsize/2,yo+y[i][j]+by-5-bounds.h-fontsize/2,bounds.w+fontsize/2,bounds.h+fontsize/2);
     fill(255);
     text(tagname[i][j],xo+x[i][j]+bx-5-bounds.w-fontsize/4,yo+y[i][j]+by-5-bounds.h+fontsize/2);
}






