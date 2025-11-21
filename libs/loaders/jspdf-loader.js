
(function(){
  var cdn = 'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js';
  var s=document.createElement('script'); s.src=cdn; s.onload=function(){console.log('jsPDF loaded from CDN')}; s.onerror=function(){console.warn('jsPDF CDN failed')}; document.head.appendChild(s);
  // autotable plugin CDN
  var at = document.createElement('script'); at.src='https://cdn.jsdelivr.net/npm/jspdf-autotable@3.5.28/dist/jspdf.plugin.autotable.min.js'; document.head.appendChild(at);
})();