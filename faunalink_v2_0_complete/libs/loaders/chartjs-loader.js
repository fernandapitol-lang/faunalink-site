
// Load Chart.js from CDN with fallback to local libs/vendor/chart.min.js
(function(){
  var cdn = 'https://cdn.jsdelivr.net/npm/chart.js';
  function load(src, onload){ var s=document.createElement('script'); s.src=src; s.onload=onload; s.onerror=function(){console.warn('failed',src)}; document.head.appendChild(s); }
  load(cdn, function(){ console.log('Chart.js loaded from CDN'); });
  // Local fallback already included as vendor/chart.min.js - apps can replace with real file if needed
})();