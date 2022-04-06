Webcam.set({
    width: 450,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 90,
})

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_sanpshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZbEXDe6my/',modelLoaded)

function modelLoaded() {
    console.log('Modal Loaded');
}
