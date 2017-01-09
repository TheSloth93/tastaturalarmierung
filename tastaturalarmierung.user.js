// ==UserScript==
// @name        LSS Tastaturalarmierung
// @namespace   Leitstellenspiel
// @include     http*://www.leitstellenspiel.de/*
// @version     dev
// @author      ChaosKai93
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/tastaturalarmierung/master/tastaturalarmierung.dev.js";
document.body.appendChild(scriptElement);
