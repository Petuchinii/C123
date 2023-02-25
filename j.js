function preload () {

}

function setup() {
canvas = createCanvas(400,350);
canvas.position(500,250);
video = createCapture(VIDEO);
video.hide();
vidms = "";
}

function draw() {
image(video,0,0,400,350);
tint(vidms);
}

function filter_tint() {
    vidms = document.getElementById("color_name").value;
}

function take_snapshot() {
    save(".png")
}