
// ==UserScript==
// @name        tolerance auto-decoder
// @namespace   anon
// @match       *://withtolerance.horse/friendshipthroughtheages/*
// @grant       none
// @version     1.1
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

answers.forEach(function(ans) {
  let temp = ans.cloneNode(true);
  ans.innerText = ans.innerText.replaceAll(" ", "0A");
  ans.innerText = hex2ascii8(ans.innerText);
  Array.from(temp.children).forEach(function(sub) {
    sub.innerText = sub.innerText.replaceAll(" ", "0A");
    sub.innerText = hex2ascii8(sub.innerText);
    ans.innerHTML = ans.innerHTML.replace(sub.innerText, sub.outerHTML);
  });
});


