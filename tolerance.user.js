// ==UserScript==
// @name        tolerance auto-decoder
// @namespace   anon
// @match       *://withtolerance.horse/friendshipthroughtheages/*
// @grant       none
// @version     1.0
// @author      anon
// @description 2/28/2022, 12:20:27 PM
// ==/UserScript==
function hex2ascii8(hex_)
{
    let hex = hex_.toString();
    let str = "";
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
console.log("decoding hex");
const answers = Array.from(document.querySelectorAll(".ama-answer-content, .ama-author-name"));
answers.forEach(ans => ans.innerText = hex2ascii8(ans.innerText));
