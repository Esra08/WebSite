const videoElement = document.querySelector("#webcam");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
            width: 400,
            height: 400,
        },
    }).then(function (stream) {
        videoElement.srcObject = stream;
    }).catch(function (err) {
        console.log("HATA!", err);
    });
}