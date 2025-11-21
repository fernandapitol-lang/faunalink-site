
(function(){
  var css = document.createElement('link'); css.rel='stylesheet'; css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'; document.head.appendChild(css);
  var cdn = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  var s=document.createElement('script'); s.src=cdn; s.onload=function(){console.log('Leaflet loaded from CDN')}; s.onerror=function(){console.warn('Leaflet CDN failed')}; document.head.appendChild(s);
})();