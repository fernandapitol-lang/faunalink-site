// simulator.js - improved
document.getElementById('loadSample').addEventListener('click', async () => {
  const resp = await fetch('data/sample_data.csv');
  const text = await resp.text();
  const rows = text.trim().split('\n').slice(1).map(r => r.split(','));
  window.__faunalink_sample = rows;
  if (window.dashboard && window.dashboard.loadData) window.dashboard.loadData(rows);
  alert('Exemplo carregado: ' + rows.length + ' registros');
});
document.getElementById('fileUpload').addEventListener('change', (ev) => {
  const f = ev.target.files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result;
    const rows = text.trim().split('\n').slice(1).map(r => r.split(','));
    if (window.dashboard && window.dashboard.loadData) window.dashboard.loadData(rows);
    alert('Arquivo carregado: ' + rows.length + ' registros (simulado)');
  };
  reader.readAsText(f);
});
