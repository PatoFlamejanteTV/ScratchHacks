setInterval(()=>{var imagees=document.getElementsByTagName("img");for(var ii=imagees.length-1;ii>0;ii--){imagees[ii].src="//cdn2.scratch.mit.edu/get_image/user/33409728_60x60.png";}},100);
// Create audio element
var audioElement = document.createElement("audio");

// Create audio element
var audioElement = document.createElement("audio");

// Define somethings
audioElement.src = "https://example.com/music.mp3";
audioElement.controls = true;
document.body.appendChild(audioElement);

setTimeout(function() {
  audioElement.play().catch(function(error) {
    console.log("Error in the music.", error);
  });
}, 700); // Wait 0.7 secs before music playing
