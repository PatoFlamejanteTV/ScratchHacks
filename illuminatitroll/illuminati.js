setInterval(()=>{var imagees=document.getElementsByTagName("img");for(var ii=imagees.length-1;ii>0;ii--){imagees[ii].src="https://i.imgur.com/QM5K7mN.png";}},100);
// Create audio element
var audioElement = document.createElement("audio");

// Create audio element
var audioElement = document.createElement("audio");

// Define somethings
audioElement.src = "https://download1501.mediafire.com/romcq747gfsgCnKaPZj0coIlgWAYu9uBpC_LmTjf0wiLyguOrluhTFD7bbRX_dcyFsmrnO8jaOw4viMsBp6eVL93fp0mTTqLAfPw5NF6m7uBcI3ATtKY_SRR87aq75-c7ghNARH0bCjxGeTyWpsMYRfxsTSjZ2TvP-wymeMuzzjRtwA/9grahtpnc8wbkvq/1.mp3";
audioElement.controls = true;
document.body.appendChild(audioElement);

setTimeout(function() {
  audioElement.play().catch(function(error) {
    console.log("Error in the music.", error);
  });
}, 300); // Wait 0.7 secs before music playing
