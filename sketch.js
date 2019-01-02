// Sketch One
    var s = function(p) { 
                var img= new Array(19);
                                  var bx;
                                  var by;
                                  var overBox = false;
                                  var locked = false;
                                  var xOffset= new Array(19);
                                  var yOffset= new Array(19);
                                  var x= new Array(19);
                                  var y= new Array(19);
                                  var n;
              p.preload=function(){

                          for(var i=0; i<img.length; i++) {
                                      if (i%2 == 0 && i%3 != 0 && i%11 !=0){
                                        img[i]=p.loadImage("images/cb.jpg");
                                      }
                                     else if (i%2 !=0 && i%3 ==0 && i%11 !=0){
                                        img[i]=p.loadImage("images/cbb.jpg");
                                     }
                                     else if (i%2 !=0 && i%3 !=0 && i%11 ==0){
                                       img[i]=p.loadImage("images/postit.png");
                                    }
                                    else{
                                      img[i]=p.loadImage("images/avatar_default.jpg");
                                    }
                                  }
                        };

              p.setup=function() {
                  p.createCanvas(p.windowWidth, 0.79 * p.windowHeight);
                  
                            bx = img[1].width/10;
                                        by = img[1].height/10;
                                        

                                    for(var i=0; i<img.length; i++) {
                                      
                                        x[i]=0+i*(p.random(100));
                                        y[i]=70+i*(p.random(100));
                                      }
                                      p.strokeWeight(5);
                                        button = p.createButton('Grid');
                                        button.position( p.windowWidth-100,20);
                                        button.size(60,25);
                                        button.mousePressed(p.arraygrid);

                                        button = p.createButton('random');
                                        button.position( p.windowWidth-180,20);
                                        button.size(70,25);
                                        button.mousePressed(p.randoma);


                                           // Test if the cursor is over the pic                                  
                                    };

                p.randoma=function(){
                  p.clear();
                  
                     bx = img[1].width/10;
                                        by = img[1].height/10;
                                    for(var i=0; i<img.length; i++) { 
                                        x[i]=0+i*(p.random(100));
                                        y[i]=70+i*(p.random(100));
                                      }
                  };

              p.arraygrid=function(){

                                    p.clear();
                                    
                                     for(var i=0; i<img.length; i++) {

                                       var arn=Math.floor(p.windowWidth/bx);


                                     x[i]=(i-Math.floor(i/arn)*arn)*(bx+20);
                                     y[i]=70+(20+by)*Math.floor(i/arn);
                                    
                                  }
                                };

              p.mouseWheel=function(event) {
                if( p.mouseY < 0.79*p.windowHeight && p.mouseY > 0.0728*p.windowHeight) {
                  p.clear();
                  
                  p.print(event.delta);
                  //move the square according to the vertical scroll amount
                  bx *= 1+(event.delta/20);
                  by *= 1+(event.delta/20);

                  //uncomment to block page scrolling
                  //return false;
                }
                };

              p.draw=function(){
                  for(var i=0; i<img.length; i++) {                      
                                     p.image(img[i], x[i],y[i], bx, by);
                                    }


                                    p.fill(255);
                                    p.stroke(255);
                                 p.rect(0,0,p.windowWidth,0.07*p.windowHeight); 

                                 p.fill(155);
                                    p.stroke(155);
                                 p.rect(0,0.0714*p.windowHeight,p.windowWidth,0.0014*p.windowHeight); 


                      if ( p.mouseY < 0.79*p.windowHeight && p.mouseY > 0.0728*p.windowHeight) {
                              if(!locked) { 
                              overBox = true;  
                              } 
                                  }
                      else {
                              overBox = false;
                                    }
                                                     
                                  };
                           

                p.mousePressed=function() {

                if(overBox) { 
                   locked = true; 
                } else {
                   locked = false;
                }

               for(var i=0; i<img.length; i++) {
                  xOffset[i] = p.mouseX-x[i]; 
                  yOffset[i] = p.mouseY-y[i]; 
                }
                };



                p.mouseDragged=function() {

                 if(locked) {
                  p.clear();
                  

                  for(var i=0; i<img.length; i++) {

                    x[i] = p.mouseX-xOffset[i]; 
                    y[i] = p.mouseY-yOffset[i]; 
                    
                 }
                  }
                };


                p.mouseReleased=function() {
                  p.clear();
                  
                  locked = false;
                };
      };
        var myp5 = new p5(s, 'c1');

// Sketch Two
var t = function( p ) { 




                    var cx, cy;
                    var secondsRadius;
                    var minutesRadius;
                    var hoursRadius;
                    var clockDiameter;

                    p.setup=function() {
                      p.createCanvas(p.windowWidth, 195);
                      p.stroke(255);
                      
                      var radius = 50;
                      secondsRadius = radius * 0.60;
                      minutesRadius = radius * 0.60;
                      hoursRadius = radius * 0.40;
                      clockDiameter = radius * 1.4;
                      
                      //center of the clock
                      cx = 87*p.width / 240;
                      cy = p.height / 2;
                    };

                    p.draw=function() {
                      
                      //draw calendar
                        var dx = 2*p.width / 3-30;
  var dy = p.height / 2-50;
  var space = 5;
  var mon=p.month();
  var day=p.day();
var jahr=p.year();
d = new Date();
let wday=d.getDay();
var dayt;

switch (wday) {
      case 0:
       dayt="Sonn";
       break;
      case 1:
       dayt="Mon";
       break;
       case 2:
       dayt="Dien";
       break;
       case 3:
       dayt="Mitt";
       break;
       case 4:
       dayt="Donn";
       break;
       case 5:
       dayt="Frei";
       break;
       case 6:
       dayt="Sat";
       break;
     };

p.fill(240);
p.strokeWeight(0);
p.rect(dx,dy,120,90);
p.fill(240,0,0);
p.strokeWeight(0);
p.rect(dx,dy,120,10);
p.fill(0);
p.textSize(15);
  p.text(day+"/"+mon+"/"+jahr,dx+20,dy+30);
  p.textSize(24);
  p.text(dayt,dx+20,dy+60);
  

                      // Draw the clock background
                      p.noStroke();
                      p.fill(126,96,45);
                      p.ellipse(cx, cy, clockDiameter + 10, clockDiameter + 10);
                      p.fill(255);
                      p.ellipse(cx, cy, clockDiameter, clockDiameter);
                      
                      // Angles for sin() and cos() start at 3 o'clock;
                      // subtract HALF_PI to make them start at the top
                      var s = p.map(p.second(), 0, 60, 0, p.TWO_PI) - p.HALF_PI;
                      var m = p.map(p.minute() + p.norm(p.second(), 0, 60), 0, 60, 0, p.TWO_PI) - p.HALF_PI; 
                      var h = p.map(p.hour() + p.norm(p.minute(), 0, 60), 0, 24, 0, p.TWO_PI * 2) - p.HALF_PI;
                      
                      // Draw the hands of the clock
                      p.stroke(30);
                      p.strokeWeight(1);
                      p.line(cx, cy, cx + p.cos(s) * secondsRadius, cy + p.sin(s) * secondsRadius);
                      p.strokeWeight(2);
                      p.line(cx, cy, cx + p.cos(m) * minutesRadius, cy + p.sin(m) * minutesRadius);
                      p.strokeWeight(4);
                      p.line(cx, cy, cx + p.cos(h) * hoursRadius, cy + p.sin(h) * hoursRadius);
                      
                      // Draw the minute ticks
                      
                      p.strokeWeight(2);
                     
                      for (var a = 0; a < 360; a+=30) {
                        var angle = p.radians(a);
                       p.line(cx+ p.cos(angle) * secondsRadius*1.05, cy+ p.sin(angle) * secondsRadius*1.05, cx + p.cos(angle) * secondsRadius*1.15, cy + p.sin(angle) * secondsRadius*1.15);
                      }
                      p.strokeWeight(1);
                     
                      for (var a = 0; a < 360; a+=6) {
                        var angle = p.radians(a);
                       p.line(cx+ p.cos(angle) * secondsRadius*1.1, cy+ p.sin(angle) * secondsRadius*1.1, cx + p.cos(angle) * secondsRadius*1.15, cy + p.sin(angle) * secondsRadius*1.15);
                      }



};

                    };

var myp5 = new p5(t, 'c2');




