document.addEventListener("DOMContentLoaded", function () {
  var map = L.map('map').setView([-6.920757, 107.667676], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.marker([-6.920757, 107.667676]).addTo(map)
    .bindPopup("<b>Minimoi Arcamanik</b><br>Jl. Puri Dago XI No. 4");
});
