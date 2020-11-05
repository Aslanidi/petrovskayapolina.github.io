var map = L.map('mapid').setView([56.03, 92.9], 12);

L.control.layers(basemaps, {}).addTo(map);


// var osmlayer =L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
//  }).addTo(map);

//  var watercolor =L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/{variant}/{z}/{x}/{y}{r}.{ext}', {
//     attribution: '<a href="http://creativecommons.org/licenses/by/3.0">© Stamen Design </a>',
//  }).addTo(map);

//  var basemaps = {
//      OSM: osmlayer,
//      Paint: watercolor,
//  };




//  L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     opacity: 1.0,
//     attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
//     minZoom: 1,
//     maxZoom: 28,
//     minNativeZoom: 0,
//     maxNativeZoom: 19
// }).addTo(map);

// // Графическая ч/б карта
// L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/{variant}/{z}/{x}/{y}{r}.{ext}', {
//     attribution:
//     'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
//     '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
//     'Map data {attribution.OpenStreetMap}',
// subdomains: 'abcd',
// minZoom: 0,
// maxZoom: 20,
// variant: 'toner',
// ext: 'png'
// }).addTo(map);

// Акварельная карта 
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/{variant}/{z}/{x}/{y}{r}.{ext}', {
    attribution:
    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
    '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
    'Map data {attribution.OpenStreetMap}',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 20,
// для того, чтобы сменить тип карты, нужно поменять имя "варианта"
variant: 'watercolor',
ext: 'png'
}).addTo(map);