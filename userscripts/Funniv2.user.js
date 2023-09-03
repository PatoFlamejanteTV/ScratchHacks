// ==UserScript==
// @name         FunniV2
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  TROLL EVERYONEEEEEEEEEEEEEEEEEEEEEEEE
// @author       XxMarcos_ and BananaFrita412
// @match        https://scratch.mit.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mit.edu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var bagulho = "";
    var trolllink = "" // www.google.com/search?q=get+trolled

    var image = document.getElementsByTagName("img");

    for (var i = 0; i < image.length; i++) {
        image[i].src = "https://i1.sndcdn.com/artworks-XAVjL3tCPWjdrp2a-fjPL9g-t240x240.jpg";
    }
        var textopica = document.getElementsByTagName("a");

    for (var a = 0; a < textopica.length; a++) {
        textopica[a].textContent = bagulho;
        textopica[a].href = trolllink
    }
         var agaquatro = document.getElementsByTagName("h4");
    for (var o = 0; o < agaquatro.length; o++) {
        agaquatro[o].title = bagulho;
        agaquatro[a].href = trolllink
    }
             var pe = document.getElementsByTagName("p");
    for (var p = 0; p < pe.length; p++) {
        pe[o].textContent = bagulho;
        pe[a].href = trolllink


    }
})();
