// ==UserScript==
// @name        LSS Tastaturalarmierung
// @namespace   Leitstellenspiel
// @include     http*://www.leitstellenspiel.de/*
// @version     2017-02-27-0212
// @author      ChaosKai93
// @grant       none
// ==/UserScript==

var scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://rawgit.com/ChaosKai/tastaturalarmierung/dev/tastaturalarmierung.dev.js";
document.body.appendChild(scriptElement);
