// ==UserScript==
// @name         TII API temp hide name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Interim solution
// @author       A.Craik
// @include     /^https://api.turnitinuk.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

jQuery('#sc2783').hide();