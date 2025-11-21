// advanced.js - v2.0
(async function(){
  // wait for leaflet to load
  function whenLeaflet(fn){ if(window.L) return fn(); var i=setInterval(()=>{ if(window.L){ clearInterval(i); fn(); } },100); }
  whenLeaflet(async function(){
    const map = L.map('map').setView([-20.3189,-40.3377],10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:''}).addTo(map);

    // overlays
    const basesLayer = L.layerGroup().addTo(map);
    const sensorsLayer = L.layerGroup().addTo(map);
    const observationsLayer = L.layerGroup().addTo(map);

    // load data
    const bases = await fetch('data/bases.json').then(r=>r.json());
    const sensores = await fetch('data/sensores.json').then(r=>r.json());
    const sample = await fetch('data/sample_data.csv').then(r=>r.text()).then(t=>t.trim().split('\n').slice(1).map(r=>r.split(',')));

    // add bases
    bases.forEach(b=>{
      const marker = L.marker([b.lat,b.lon],{title:b.name}).bindPopup('<b>'+b.name+'</b><br/>'+b.team+'<br/>'+b.hours);
      basesLayer.addLayer(marker);
    });

    // add sensors
    sensores.forEach(s=>{
      const ico = L.circleMarker([s.lat,s.lon],{radius:6, color:'#ff7800'}).bindPopup('<b>'+s.type+'</b><br/>'+ (s.notes||''));
      sensorsLayer.addLayer(ico);
    });

    // add observations
    sample.forEach(r=>{
      const lat=parseFloat(r[4]), lon=parseFloat(r[5]);
      if(isNaN(lat)||isNaN(lon)) return;
      // bounding box filter for Brazil region
      if(lat < -35 || lat > 5 || lon < -85 || lon > -28) return;
      const m = L.marker([lat,lon]).bindPopup((r[2]||'')+' — '+(r[1]||''));
      observationsLayer.addLayer(m);
    });

    // layer control
    L.control.layers({}, { "Bases": basesLayer, "Sensores": sensoresLayer, "Observações": observationsLayer }).addTo(map);

    // center ES button
    document.getElementById('btnCenterES').addEventListener('click', ()=> map.setView([-20.3189,-40.3377], 11));

    // toggle bases
    let basesShown = true;
    document.getElementById('btnToggleBases').addEventListener('click', ()=>{
      if(basesShown){ map.removeLayer(basesLayer); basesShown=false } else { map.addLayer(basesLayer); basesShown=true }
    });

    // checkbox filters
    document.getElementById('chkSensors').addEventListener('change', (e)=>{
      e.target.checked?map.addLayer(sensorsLayer):map.removeLayer(sensorsLayer);
    });
    document.getElementById('chkObservations').addEventListener('change', (e)=>{
      e.target.checked?map.addLayer(observationsLayer):map.removeLayer(observationsLayer);
    });

    // drone simulation
    let droneMarker=null, dronePath=null, droneInterval=null, pathCoords=[];
    function startDrone(){
      if(droneInterval) return;
      pathCoords = [];
      droneMarker = L.marker([-20.3189,-40.3377], {title:'Drone'}).addTo(map);
      dronePath = L.polyline([], {color:'red'}).addTo(map);
      document.getElementById('droneStatus').innerText = 'Em voo';
      let lat = -20.3189, lon = -40.3377;
      droneInterval = setInterval(()=>{
        // random walk small step
        lat += (Math.random()-0.5)*0.01;
        lon += (Math.random()-0.5)*0.01;
        droneMarker.setLatLng([lat,lon]);
        pathCoords.push([lat,lon]);
        dronePath.setLatLngs(pathCoords);
      }, 1200);
    }
    function stopDrone(){
      if(droneInterval) clearInterval(droneInterval);
      droneInterval=null;
      document.getElementById('droneStatus').innerText = 'Parado';
    }
    document.getElementById('startDrone').addEventListener('click', startDrone);
    document.getElementById('stopDrone').addEventListener('click', stopDrone);

    // populate chart (basic counts)
    if(window.Chart && document.getElementById('chartSightings')){
      const counts={};
      sample.forEach(r=>{ const sp=r[2]||'indefinido'; counts[sp]=(counts[sp]||0)+1; });
      const labels=Object.keys(counts), data=Object.values(counts);
      new Chart(document.getElementById('chartSightings'), { type:'bar', data:{ labels, datasets:[{ label:'Observações', data }] } });
    }
  });
})();