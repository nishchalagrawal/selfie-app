var SpeechRecognition = window.webkitiSpeechRecognition;
var recognition  = new SpeechRecognition;

 function start()
{
    document.getElementById("textbox").innerHTML ="";
    recognition = start();
    
    }

recognition.onresult = function run(event){
    console.log = (event);
    var content = even.result[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML =content;
}