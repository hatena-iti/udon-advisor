/* Copyright 2013 Intelligent Technology Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
onload = function() {

	var $ = function(sel) {
		return document.querySelector(sel);
	};

	var webViewNews = $('#webview-news');
	var webViewSearch = $('#webview-search');
	var textSearch = $('#text-search');
	var buttonSearch = $('#button-search');

	var containerNews = $('#container-news');
	var containerSearch = $('#container-search');
	var menuNews = $('#menu-news');
	var menuSearch = $('#menu-search');

	buttonSearch.addEventListener('click', function(event) {
		var searchText = encodeURI(textSearch.value) + '+%E3%81%86%E3%81%A9%E3%82%93';
		webViewSearch.attributes['src'].value = 'https://www.google.co.jp/#q=' + searchText;
	});

	menuNews.addEventListener('click', function(event) {
		containerNews.className = 'selected';;
		containerSearch.className = 'hidden';
		menuNews.className = 'menu-item selected';
		menuSearch.className = 'menu-item';
	});
	
	menuSearch.addEventListener('click', function(event) {
		containerNews.className = 'hidden';;
		containerSearch.className = 'selected';
		menuNews.className = 'menu-item';
		menuSearch.className = 'menu-item selected';
	});

};