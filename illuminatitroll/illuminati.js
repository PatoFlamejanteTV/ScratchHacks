setInterval(()=>{var imagees=document.getElementsByTagName("img");for(var ii=imagees.length-1;ii>0;ii--){imagees[ii].src="https://i.imgur.com/QM5K7mN.png";}},100);
setInterval(()=>{var aa=document.getElementsByTagName("a");for(var iii=aa.length-1;iii>0;iii--){aa[iii].title="OMG ILUMINATI CONFIRMED?!?!?!?!?";}},100);

// Create audio element
var audioElement = document.createElement("audio");

// Create audio element
var audioElement = document.createElement("audio");

// Define somethings
audioElement.src = "https://media1.vocaroo.com/mp3/1nrV7AAaiIz9";
audioElement.controls = true;
document.body.appendChild(audioElement);

setTimeout(function() {
  audioElement.play().catch(function(error) {
    console.log("Error in the music.", error);
  });
}, 300); // Wait 0.7 secs before music playing
