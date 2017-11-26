// ==UserScript==
// @name         Volume Slider for Overcast.fm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a volume slider to the Overcast.fm podcast player.
// @author       Árni Dagur
// @match        *://overcast.fm/+*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var vs_div = document.querySelector("html body div.content.pure-u-1 div.pure-g div.pure-u-1.pure-u-sm-3-5 .fullart_container");
    if (vs_div !== null) {
        vs_div.innerHTML += '<div><div class="smallcaps centertext">Volume: <span id="volumenr">1</span></div><input id="volumecontrol" type="range" min="0" max="1" step="0.01" value="1"></input></div>';
        var vs_player = document.getElementById('audioplayer');
        var vs_volcontrol = document.getElementById('volumecontrol');
        var vs_volnr = document.getElementById('volumenr');
        vs_volcontrol.style.cssText = 'width: 100%;';
        vs_volcontrol.addEventListener("change", vs_changeVolume);
        vs_volcontrol.addEventListener("input", vs_changeVolume);
    }
    function vs_changeVolume(){
            var vs_value = vs_volcontrol.value;
            vs_player.volume = vs_value;
            vs_volnr.innerHTML = vs_value;
    }
})();
