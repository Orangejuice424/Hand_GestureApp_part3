//https://teachablemachine.withgoogle.com/models/_vlQSyHFQ/

prediction_1=""
prediciton_2=""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_wuality:90
}
);

Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri +'"/>';


    })
}

console.log('ml5 version;', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_vlQSyHFQ/model.json', modelLoaded)

function modelLoaded(){
    console.log('Model has officially LOADED!!!!');
}

function speaking(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The fist prediction is  " + prediction_1
    speak_data_2 = "And the second prediction is  " + prediction_2
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);       
    } else {
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML = results[0].label
        document.getElementById("result_emotion_name2").innerHTML = results[1].label

        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speaking();
        if(results[0].label =="rockstar"){
            document.getElementById("update_emoji").innerHTML = "&#129311;"
        }
        if(results[0].label =="fist"){
            document.getElementById("update_emoji").innerHTML = "&#128074;"
        }
        if(results[0].label =="hand"){
            document.getElementById("update_emoji").innerHTML = "&#128400;"
        }
        if(results[0].label =="clap"){
            document.getElementById("update_emoji").innerHTML = "&#128079;"
        }
        if(results[0].label =="Nice"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        }


        if(results[1].label =="rockstar"){
            document.getElementById("update_emoji2").innerHTML = "&#129311;"
        }
        if(results[1].label =="fist"){
            document.getElementById("update_emoji2").innerHTML = "&#128074;"
        }
        if(results[1].label =="hand"){
            document.getElementById("update_emoji2").innerHTML = "&#128400;"
        }
        if(results[1].label =="clap"){
            document.getElementById("update_emoji2").innerHTML = "&#128079;"
        }
        if(results[1].label =="Nice"){
            document.getElementById("update_emoji2").innerHTML = "&#128076;"
        }
    }
}




























