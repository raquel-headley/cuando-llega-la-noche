
// let button;
// let vid;
// //let playing = true;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // noCanvas();

//   button = createButton('-> PRESS TO PLAY');
//   button.style("background-color", "transparent");
//   button.style("border", "none");
//   button.style("color", "white"); 
//   button.position(width/2, height*0.9);
//   textAlign(CENTER);
//   button.mousePressed(buttonPressed);

//   vid = createVideo("video.mp4");
//   vid.size(800, 450);
//   vid.volume(0.9);
//   vid.hide(); // hides the html video loader

// }

// function draw() {
//   background(0);
//   let img = vid.get();
//   imageMode(CENTER);
//   img.resize(width,0);
//   image(img, width/2, height/2); 
  
// }

// function buttonPressed() {
//   // Do something
//   vid.play();
// }


// ///////////////////////////////////////////////////////////////////////

function setup(){

  btnSTART();

}

function draw(){

}


///BUTTONS: /////////////////////////////////////////

function removeButtons() {
  document.querySelectorAll('button').forEach(b => b.remove());
}

function btnSTART(){

 // start BUTTON:
 buttonSTART = createButton('-> PRESS TO START');
 buttonSTART.mousePressed(vid0);
//  buttonSTART.mousePressed(buttonSTART.hide());  

}

function btn0A(){

  //BUTTON 0A:
  button0A = createButton('-> wake up');
  button0A.mousePressed(vid1); 
}

function btn0B(){

  //BUTTON 0A:
  button0B = createButton('-> keep dreaming');
  button0B.addClass('classB');
  button0B.mousePressed(btn0Bfunction); 
}

function btn1A(){
  //BUTTON 1A:
  button1A = createButton('-> no');
  button1A.mousePressed(vid2); 

}

function btn1B(){
  //BUTTON 1B:
  button1B = createButton('-> yes');
  button1B.addClass('classB');
  button1B.mousePressed(vid12); 

}

function btn2A(){
  //BUTTON 2A:
  button2A = createButton('-> reply fine');
  button2A.mousePressed(vid3); 
}

function btn2B(){
  //BUTTON 2B:
  button2B = createButton('-> replie fine');
  button2B.addClass('classB');
  button2B.mousePressed(vid11); 

}

function btn3A(){
  //BUTTON 3A:
  button3A = createButton('-> uni');
  button3A.mousePressed(vid4); 
}


function btn3B(){
  //BUTTON 3B:
  button3B = createButton('-> culture');
  button3B.addClass('classB');
  button3B.mousePressed(vid5); 

}

function btn45A(){
  button45A = createButton('-> carnival');
  button45A.mousePressed(vid6); 
}


function btn45B(){
  button45B = createButton('-> soho');
  button45B.addClass('classB');
  button45B.mousePressed(vid7); 
}


function btn67A(){
  button67A = createButton('-> gig');
  button67A.mousePressed(vid8); 
}


function btn67B(){
  button67B = createButton('-> party');
  button67B.addClass('classB');
  button67B.mousePressed(vid9); 
}

function btn10(){
  button10 = createButton('-> yes');
  button10.mousePressed(vid10); 
}

function btn12A(){
  button12A = createButton('-> tell her');
  button12A.mousePressed(vid13); 
}

function btn12B(){
  button12B = createButton('-> make excuse');
  button12B.addClass('classB');
  button12B.mousePressed(vid15); 

}

function btn13A(){
  button13A = createButton('-> i need to stop this');
  button13A.mousePressed(vid14); 
}

function btn13B(){
  button13B = createButton('-> that was awkward, leave');
  button13B.addClass('classB');
  button13B.mousePressed(vid16); 
}

//15 and 16 have the same buttons again.. kms ik

function btn1516A(){
  button1516A = createButton('-> yes');
  button1516A.mousePressed(vid17); 
}

function btn1516B(){
  button1516B = createButton('-> no');
  button1516B.addClass('classB');
  button1516B.mousePressed(vid19); 
}
////

//17 and 20 have the same buttons again.. kms ik

function btn1720A(){
  button1720A = createButton('-> no');
  button1720A.mousePressed(vid18); 
}

function btn1720B(){
  button1720B = createButton('-> yes');
  button1720B.addClass('classB');
  button1720B.mousePressed(vid21); 
}
/////

function btn19A(){
  button19A = createButton('-> fuck it');
  button19A.mousePressed(vid20); 
}

function btn19B(){
  button19B = createButton('-> cut it off before u get hurt');
  button19B.addClass('classB');
  button19B.mousePressed(vid22); 
}

function btn22A(){
  button22A = createButton('-> 3some in ldn');
  button22A.mousePressed(vid23); 
}

function btn22B(){
  button22B = createButton('-> fun in nyc');
  button22B.addClass('classB');
  button22B.mousePressed(vid24); 
}

//23 and 24 have the same buttons again.. kms ik

function btn2324A(){
  button2324A = createButton('-> shots');
  button2324A.mousePressed(vid25); 
}

function btn2324B(){
  button2324B = createButton('-> lines');
  button2324B.addClass('classB');
  button2324B.mousePressed(vid26); 
}

//25 and 26 have the same buttons again.. kms ik (no a and b tho)
function btn2526A(){
  button2526A = createButton('-> its worth it');
  button2526A.mousePressed(vid27); 
}
function btn2526B(){
  button2526B = createButton('-> no');
  button2526B.addClass('classB');
}

///was it worth it button:

function btnEndChoiceA(){
  buttonEndChoiceA = createButton('-> yes');
  buttonEndChoiceA.mousePressed(vid28); 
}

function btnEndChoiceB(){
  buttonEndChoiceB = createButton('-> no');
  buttonEndChoiceB.addClass('classB');
  buttonEndChoiceB.mousePressed(vid1); 
}


/////IMAGES: ////////////////////

function btn0Bfunction(){
  removeButtons();
  setTimeout(btn0A, 2000);
  setTimeout(btn0B, 2000);
}

function vid0(){

  removeButtons();

  let img0 = createVideo('assets/0.mp4');
  image(img0,0,0,width,height);
  img0.play();
  setTimeout(btn0A, 2000);
  setTimeout(btn0B, 2000);


// let img0Duration = img0.duration();
// let loopPoint = img0Duration * 0.8;
// console.log(loopPoint);

// setInterval(function() {
//     // Show your buttons at the loop point
//     btn0A();
//     btn0B();
// }, loopPoint);

}





function vid1(){
  
  select('video').remove();
  
  let img1 = createVideo('assets/1.mp4');
  image(img1,0,0);
  img1.play();

  removeButtons();

  setTimeout(btn1A, 2000);
  setTimeout(btn1B, 2000);

}

function vid2(){

  select('video').remove();

  let img2 = createVideo('assets/2.mp4');
  image(img2,0,0);
  img2.play();

  removeButtons();
 
  setTimeout(btn2A, 2000);
  setTimeout(btn2B, 2000);
}

function vid3(){
  
  select('video').remove();

  let img3 = createVideo('assets/3.mp4');
  image(img3,0,0);
  img3.play();

  removeButtons();

  setTimeout(btn3A, 2000);
  setTimeout(btn3B, 2000);
}

function vid4(){

  
  select('video').remove();

  let img4 = createVideo('assets/4.mp4');
  image(img4,0,0);
  img4.play();
  removeButtons();

  setTimeout(btn45A, 2000);
  setTimeout(btn45B, 2000);
}

function vid5(){
  select('video').remove();

  let img5 = createVideo('assets/5.mp4');
  image(img5,0,0);
  img5.play();

  removeButtons();

  setTimeout(btn45A, 2000);
  setTimeout(btn45B, 2000);
}

function vid6(){
  select('video').remove();

  let img6 = createVideo('assets/6.mp4');
  image(img6,0,0);
  img6.play();

 
  removeButtons();

  setTimeout(btn67A, 2000);
  setTimeout(btn67B, 2000);
}

function vid7(){
  select('video').remove();

  let img7 = createVideo('assets/7.mp4');
  image(img7,0,0);
  img7.play();

  removeButtons();
 
  setTimeout(btn67A, 2000);
  setTimeout(btn67B, 2000);
}

function vid8(){
  select('video').remove();

  let img8 = createVideo('assets/8.mp4');
  image(img8,0,0);
  img8.play();

 
  removeButtons();

  setTimeout(btn10, 2000);
}

function vid9(){
  select('video').remove();

  let img9 = createVideo('assets/9.mp4');
  image(img9,0,0);
  img9.play();

 
  removeButtons();
 
  setTimeout(btn10, 2000);
}

function vid10(){ //end video + return to start
  select('video').remove();

  let img10 = createVideo('assets/10.mp4');
  image(img10,0,0);
  img10.play();

  removeButtons();
  setTimeout(btnEndChoiceA, 2000);
  setTimeout(btnEndChoiceB, 2000);
}

function vid11(){ //end video + return to start?
  
  select('video').remove();

  let img11 = createVideo('assets/11.mp4');
  image(img11,0,0);
  img11.play();

  removeButtons();
  setTimeout(btnEndChoiceA, 2000);
  setTimeout(btnEndChoiceB, 2000);
}

function vid12(){
  
  select('video').remove();

  let img12 = createVideo('assets/12.mp4');
  image(img12,0,0);
  img12.play();

  removeButtons();
  setTimeout(btn12A, 2000);
  setTimeout(btn12B, 2000);
}

function vid13(){
  
  select('video').remove();

  let img13 = createVideo('assets/13.mp4');
  image(img13,0,0);
  img13.play();

  removeButtons();
  setTimeout(btn13A, 2000);
  setTimeout(btn13B, 2000);
}

function vid14(){ //end video + return to start
  
  select('video').remove();

  let img14 = createVideo('assets/14.mp4');
  image(img14,0,0);
  img14.play();

  removeButtons();
  setTimeout(btnEndChoiceA, 2000);
  setTimeout(btnEndChoiceB, 2000);
}

function vid15(){
  
  select('video').remove();

  let img15 = createVideo('assets/15.mp4');
  image(img15,0,0);
  img15.play();

  removeButtons();
  setTimeout(btn1516A, 2000);
  setTimeout(btn1516B, 2000);
}

function vid16(){
  
  select('video').remove();

  let img16 = createVideo('assets/16.mp4');
  image(img16,0,0);
  img16.play();


  removeButtons();
  setTimeout(btn1516A, 2000);
  setTimeout(btn1516B, 2000);
}

function vid17(){
  
  select('video').remove();

  let img17 = createVideo('assets/17.mp4');
  image(img17,0,0);
  img17.play();

  removeButtons();
  setTimeout(btn1720A, 2000);
  setTimeout(btn1720B, 2000);
}

function vid18(){ //end video + return to start?
  
  select('video').remove();

  let img18 = createVideo('assets/18.mp4');
  image(img18,0,0);
  img18.play();

  removeButtons();
  setTimeout(btnEndChoiceA, 2000);
  setTimeout(btnEndChoiceB, 2000);
}

function vid19(){
  
  select('video').remove();

  let img19 = createVideo('assets/19.mp4');
  image(img19,0,0);
  img19.play();

  removeButtons();
  setTimeout(btn19A, 2000);
  setTimeout(btn19B, 2000);
}

function vid20(){
  
  select('video').remove();

  let img20 = createVideo('assets/20.mp4');
  image(img20,0,0);
  img20.play();

  removeButtons();
  setTimeout(btn1720A, 2000);
  setTimeout(btn1720B, 2000);
}

function vid21(){ //end video + return to start?
  
  select('video').remove();

  let img21 = createVideo('assets/21.mp4');
  image(img21,0,0);
  img21.play();

  removeButtons();
  setTimeout(btnEndChoiceA, 2000);
  setTimeout(btnEndChoiceB, 2000);
}

function vid22(){
  
  select('video').remove();

  let img22 = createVideo('assets/22.mp4');
  image(img22,0,0);
  img22.play();

  removeButtons();
  setTimeout(btn22A, 2000);
  setTimeout(btn22B, 2000);
}

function vid23(){
  
  select('video').remove();

  let img23 = createVideo('assets/23.mp4');
  image(img23,0,0);
  img23.play();

  removeButtons();
  setTimeout(btn2324A, 2000);
  setTimeout(btn2324B, 2000);
}

function vid24(){
  
  select('video').remove();

  let img24 = createVideo('assets/24.mp4');
  image(img24,0,0);
  img24.play();

  removeButtons();
  setTimeout(btn2324A, 2000);
  setTimeout(btn2324B, 2000);
}

function vid25(){
  
  select('video').remove();

  let img25 = createVideo('assets/25.mp4');
  image(img25,0,0);
  img25.play();

  removeButtons();
  setTimeout(btn2526A, 2000);
  setTimeout(btn2526B, 2000);}

function vid26(){
  
  select('video').remove();

  let img26 = createVideo('assets/26.mp4');
  image(img26,0,0);
  img26.play();

  removeButtons();
  setTimeout(btn2526A, 2000);
  setTimeout(btn2526B, 2000);
}

function vid27(){ //final video return to beginning? 
  
  select('video').remove();

  let img27 = createVideo('assets/27.mp4');
  image(img27,0,0);
  img27.play();

  removeButtons();
  setTimeout(btnEndChoiceA, 2000);
  setTimeout(btnEndChoiceB, 2000);
}

function vid28(){
  
  select('video').remove();

  let img28 = createVideo('assets/28.mp4');
  image(img28,0,0);
  img28.play();

  removeButtons();
}



