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
    var div = document.getElementById('speedcontrols');
    if (div !== null) {
        div.innerHTML += '<div class="smallcaps centertext">Volume: <span id="volumenr">1</span></div><input id="volumecontrol" type="range" min="0" max="1" step="0.01" value="1"></input>';
        var player = document.getElementById('audioplayer');
        var volcontrol = document.getElementById('volumecontrol');
        var volnr = document.getElementById('volumenr');
        volcontrol.style.cssText = 'width: 100%;';
        volcontrol.addEventListener("change", changeVolume);
        volcontrol.addEventListener("input", changeVolume);
    }
    function changeVolume(){
            var value = volcontrol.value;
            player.volume = value;
            volnr.innerHTML = value;
    }
})();