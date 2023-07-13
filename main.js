var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
  
}
recognition.onresult=function(event){
console.log(event);
var context=event.results[0][0].transcript;
console.log(context);
document.getElementById("textbox").innerHTML=context;
  if(context=="take my selfie"){
    speak();
    
  }
}
function speak(){
    var synth=window.speechSynthesis;
    var speak_data="taking a selfie";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
  setTimeout(function()
    { 
        image_1 = "selfie1";
        take_snapshot(); 

    }, 5000);
   setTimeout(function()
    { 
        image_1 = "selfie2";
        take_snapshot(); 

    }, 10000);
   setTimeout(function()
    { 
        image_1 = "selfie3";
        take_snapshot(); 

    }, 15000);
}
var camera=document.getElementById("camera");


Webcam.set({
    width:350,
    height:250,
    image_format:"png",
    png_quality:100
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
      if(image_1=="selfie1"){
   document.getElementById("result").innerHTML='<img id="IMG1" src="'+data_uri+'"/ >'       
      }
      if(image_1=="selfie2"){
   document.getElementById("result2").innerHTML='<img id="IMG2" src="'+data_uri+'"/ >'       
      }
      if(image_1=="selfie3"){
   document.getElementById("result3").innerHTML='<img id="IMG3" src="'+data_uri+'"/ >'       
      }
    });
}