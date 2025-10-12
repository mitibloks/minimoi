document.addEventListener("DOMContentLoaded", function () {
  var map = L.map('map').setView([-6.920753, 107.667703], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.marker([-6.920753, 107.667703]).addTo(map)
    .bindPopup("<b>minimoi Arcamanik</b><br>Jl. Puri Dago XI No. 4");
});
