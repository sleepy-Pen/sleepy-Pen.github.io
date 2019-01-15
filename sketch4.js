


                          var cx, cy;
                          var secondsRadius;
                          var minutesRadius;
                          var hoursRadius;
                          var clockDiameter;
                          var weather;
                          var wx, wy;

             function windowResized() {
               if (windowWidth < 1200){
                wx=1200;
               }
               else{
                wx=windowWidth;
               }

                let myCanvas= resizeCanvas(wx, 0.128*wx);
                 myCanvas.parent('p5bottom');
              }
             function setup() {
               if (windowWidth < 1200){
                wx=1200;
               }
               else{
                wx=windowWidth;
               }
                            let myCanvas= createCanvas(wx, 0.128*wx);
                            myCanvas.parent('p5bottom');
                            stroke(255);
                            loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Muenchen&mode=json&units=metric&appid=0fe2aa33736a79aeb971927a908c168f', gotData);
              }


                function gotData(data1){
                    weather=data1;
                    console.log(weather.main);
                  }

              function draw() {
                            
                            //draw calendar
                            var tx=width;
                            var ty=height;
                              var dx = 15*width / 24;
                              var dy = height / 2;
                              var space = 5;
                             var t = Date.now() / 1000;

                            fill(240);
                            strokeWeight(0);
                            rect(dx,dy*1/2,tx/12,tx/16);
                            fill(240,0,0);
                            strokeWeight(0);
                            rect(dx,dy*1/2,tx/12,tx/144);
                            fill(0);
                            textSize(dx/60);
                            text(moment.unix(t).format('MM/DD/YYYY'), dx+dx/50,dy/2+dy/3);
                            textSize(dx/45);
                            text(moment.unix(t).format('dddd'), dx+dx/50,dy+dy/10); 
                            textSize(tx/120);
                            if(weather){
                            text(weather.main.temp+' Celsius',dx+dx/50,dy+dy/3);
                            }

                            // draw clock
                            var radius = tx/29;
                            secondsRadius = radius * 0.60;
                            minutesRadius = radius * 0.60;
                            hoursRadius = radius * 0.40;
                            clockDiameter = radius * 1.49;
                            
                            //center of the clock
                            cx = 97*width / 300;
                            cy = height / 2;

                            // Draw the clock background
                            noStroke();
                            fill(126,96,45);
                            ellipse(cx, cy, clockDiameter + tx/144, clockDiameter + tx/144);
                            fill(255);
                            ellipse(cx, cy, clockDiameter, clockDiameter);
                            
                            // Angles for sin() and cos() start at 3 o'clock;
                            // subtract HALF_PI to make them start at the top
                            var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
                            var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI; 
                            var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
                            
                            // Draw the hands of the clock
                            stroke(40);
                            strokeWeight(tx/1440);
                            line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
                            strokeWeight(tx/720);
                            line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
                            strokeWeight(tx/360);
                            line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
                            
                            // Draw the minute ticks
                            
                            strokeWeight(tx/720);
                           
                            for (var a = 0; a < 360; a+=30) {
                              var angle = radians(a);
                             line(cx+ cos(angle) * secondsRadius*1.06, cy+ sin(angle) * secondsRadius*1.06, cx + cos(angle) * secondsRadius*1.15, cy + sin(angle) * secondsRadius*1.15);
                            }
                            strokeWeight(tx/1440);
                           
                            for (var a = 0; a < 360; a+=6) {
                              var angle = radians(a);
                             line(cx+ cos(angle) * secondsRadius*1.2, cy+ sin(angle) * secondsRadius*1.2, cx + cos(angle) * secondsRadius*1.15, cy + sin(angle) * secondsRadius*1.15);
                            }
                          }
              
  

      




