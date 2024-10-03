var video = document.getElementById("video");

// Success handler for the camera stream
function on_cam_success(stream) {
  video.srcObject = stream;
}

// Error handler if camera access fails
function on_cam_error(err) {
  alert("error: " + err.message);
}

// Set up video constraints (audio disabled)
var constraints = { audio: false, video: true };

// Request camera access
navigator.mediaDevices.getUserMedia(constraints)
  .then(on_cam_success)
  .catch(on_cam_error);

// Capture the current frame from the video
function capteaza() {
  var c = document.getElementById("canvas");
  c.width = video.width;
  c.height = video.height;
  var ctx = c.getContext("2d");
  ctx.drawImage(video, 0, 0, 640, 480);
}

// Add touch and mouse events to capture image
video.addEventListener("touchstart", capteaza);
video.addEventListener("mousedown", capteaza);
