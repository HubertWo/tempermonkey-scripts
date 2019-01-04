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

    const STOCK_VALUE_SELECTOR = 'body > div.container.wrapper.clearfix.j-quoteContainer.stock > div.content-region.region--fixed > div.template.template--aside > div > div > div.intraday__data > h3 > bg-quote'
    const STOCK_NAME_SELECTOR = 'body > div.container.wrapper.clearfix.j-quoteContainer.stock > div.content-region.region--fixed > div:nth-child(1) > div.column.column--full.company > div > div:nth-child(1) > div.company__symbol > span.company__ticker'
	const REFRESH_TITLE_INTERVAL = 8 * 1000
	const REFRESH_PAGE_TIMEOUT = (128 + Math.floor(Math.random() * 100 % 16); ) * 1000
	
	function showCurrentValue(stockValueSelector, stockNameSelector) {
		var price = document.querySelector(stockValueSelector).textContent
		var name = document.querySelector(stockNameSelector).textContent
		document.title = [name, price].join(" ")
	}
	
	// Update title 
	setInterval(showCurrentValue.bind(null, STOCK_VALUE_SELECTOR, STOCK_NAME_SELECTOR), REFRESH_TITLE_INTERVAL)
	
	// Refresh page
	setTimeout(function(){ location.reload(); }, REFRESH_PAGE_TIMEOUT);
})();