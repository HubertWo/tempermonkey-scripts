// ==UserScript==
// @name         Stock value in title - marketwatch
// @namespace    https://github.com/HubertWo
// @version      0.1
// @description  Shows stock name and price in window title.
// @author       HubertWo
// @match        https://www.marketwatch.com/investing/stock/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    var valueQuerySelector = 'body > div.container.wrapper.clearfix.j-quoteContainer.stock > div.content-region.region--fixed > div.template.template--aside > div > div > div.intraday__data > h3 > bg-quote'
    var nameQuerySelector = 'body > div.container.wrapper.clearfix.j-quoteContainer.stock > div.content-region.region--fixed > div:nth-child(1) > div.column.column--full.company > div > div:nth-child(1) > div.company__symbol > span.company__ticker'
	var refreshInternalIn = 5 * 1000
	
	function showCurrentValue(valueQuerySelector, nameQuerySelector) {
		var price = document.querySelector(valueQuerySelector).textContent
		var name = document.querySelector(nameQuerySelector).textContent
		document.title = [name, price].join(" ")
	}
	
	setInterval(showCurrentValue.bind(null, valueQuerySelector, nameQuerySelector), refreshInternalIn)
})();