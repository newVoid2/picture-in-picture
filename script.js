const videoElement = document.getElementById('video');
const button = document.getElementById('button');
//const startButton = document.querySelector('#button')

//Enable the picture in picture in video
async function pictureInPicture() {
    if(document.pictureInPictureElement) {
        document.exitPictureInPicture();
        button.innerHTML = 'START';
    } else {
        //Disable Button
        button.disabled = true;
        // Start Picture in Picture
        await videoElement.requestPictureInPicture();
        // Reset Button
        button.disabled = false;
        //await videoElement.requestPictureInPicture();
        button.innerHTML = 'EXIST';
    }
}

async function getCaptureAuthorize() {
    button.addEventListener('dblclick', selectMediaStream);
    // startButton.disabled = true;
}

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        button.addEventListener('click', pictureInPicture);
    } catch (error) {
        // Check error here
        alert('Refresh the page');
    }
}

// On Load
getCaptureAuthorize();

