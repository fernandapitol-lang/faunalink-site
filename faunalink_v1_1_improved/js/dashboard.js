// dashboard.js - improved (uses Chart.js and Leaflet if present)
window.dashboard = (function(){
  function loadData(rows){
    const counts = {};
    rows.forEach(r => { const species = r[2] || 'indefinido'; counts[species] = (counts[species]||0)+1; });
    const ctx = document.getElementById('chartSightings');
    if (window.Chart && ctx) {
      const labels = Object.keys(counts);
      const data = Object.values(counts);
      if (ctx._chart) ctx._chart.destroy();
      ctx._chart = new Chart(ctx, { type: 'bar', data: { labels, datasets:[{ label:'Observações', data }] } });
    }
    // Leaflet map
    if (window.L && document.getElementById('map')) {
      const map = window._fauna_map || (window._fauna_map = L.map('map').setView([-15,-47],4));
      if (!window._fauna_tiles_added) {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:''}).addTo(map);
        window._fauna_tiles_added = true;
      }
      rows.slice(0,200).forEach(r => {
        const lat = parseFloat(r[4]), lon = parseFloat(r[5]);
        if (!isNaN(lat) && !isNaN(lon)) L.marker([lat,lon]).addTo(map).bindPopup((r[2]||'')+' — '+(r[1]||''));
      });
    }
  }
  return { loadData };
})();
