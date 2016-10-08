// ==UserScript==
// @name        Tastaturalarmierung
// @namespace   Leitstellenspiel
// @include     http*://www.leitstellenspiel.de/*
// @version     dev1
// @author      ChaosKai93
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/tastaturalarmierung/master/dev.js";
document.body.appendChild(scriptElement);
