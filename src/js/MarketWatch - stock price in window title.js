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

    const STOCK_PRICE_NOW_SELECTOR = 'body > div.container.wrapper.clearfix.j-quoteContainer.stock > div.content-region.region--fixed > div.template.template--aside > div > div > div.intraday__data > h3 > bg-quote'
    const STOCK_PRICE_YESTERDAY_SELECTOR = 'body > div.container.wrapper.clearfix.j-quoteContainer.stock > div.content-region.region--fixed > div.template.template--aside > div > div > div.intraday__close > table > tbody > tr > td'
	const STOCK_NAME_SELECTOR = 'body > div.container.wrapper.clearfix.j-quoteContainer.stock > div.content-region.region--fixed > div:nth-child(1) > div.column.column--full.company > div > div:nth-child(1) > div.company__symbol > span.company__ticker'
	const REFRESH_TITLE_INTERVAL = 8 * 1000
	const REFRESH_PAGE_TIMEOUT = (128 + Math.floor(Math.random() * 100 % 16)) * 1000
	
	function showCurrentValue(stockPriceNowSelector, stockPriceYesterdaySelector, stockNameSelector) {
		var price = document.querySelector(stockPriceNowSelector).textContent
		var name = document.querySelector(stockNameSelector).textContent
		var yesterdayPrice = document.querySelector(stockPriceYesterdaySelector).textContent.substr(1)
		
		var priceChange = (parseFloat(price) - parseFloat(yesterdayPrice)).toFixed(2)
		
		document.title = `${name}: ${price} (${priceChange})`  
	}
	
	// Update title 
	setInterval(showCurrentValue.bind(null, STOCK_PRICE_NOW_SELECTOR, STOCK_PRICE_YESTERDAY_SELECTOR,  STOCK_NAME_SELECTOR), REFRESH_TITLE_INTERVAL)
	
	// Refresh page
	setTimeout(function(){ location.reload(); }, REFRESH_PAGE_TIMEOUT)
})();