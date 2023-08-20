// ==UserScript==
// @name         Funni
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       XxMarcos_
// @match        https://scratch.mit.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mit.edu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var image = document.getElementsByTagName("img");

    for (var i = 0; i < image.length; i++) {
        image[i].src = "https://i1.sndcdn.com/artworks-XAVjL3tCPWjdrp2a-fjPL9g-t240x240.jpg";
    }
})();
