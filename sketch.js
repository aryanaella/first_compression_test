let img;
let compressedGraphics;

function preload() {
  img = loadImage('images/IMG_20231201_0002.jpg'); // Replace with your image path
}

function setup() {
  createCanvas(800, 800); // Adjust canvas size as needed
  // noSmooth(); // Disable smoothing for pixelated effect

  let compressionFactor = 0.02; // Factor to compress the image (0.1 = 10% of original size)
  
  let compressedWidth = img.width * compressionFactor;
  let compressedHeight = img.height * compressionFactor;

  // Create a graphics buffer for compressed image
  compressedGraphics = createGraphics(compressedWidth, compressedHeight);
  compressedGraphics.image(img, 0, 0, compressedWidth/2, compressedHeight/2);
}

function draw() {
  background(220);

  // Scale up the compressed image to fit the canvas
  image(compressedGraphics, 0, 0, width, height);
}
