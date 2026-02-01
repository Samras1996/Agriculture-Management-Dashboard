const table = document.getElementById("cropTable");
const form = document.getElementById("cropForm");

function renderTable(data) {
  table.innerHTML = "";
  data.forEach(crop => {
    table.innerHTML += `
      <tr>
        <td>${crop.name}</td>
        <td>${crop.area}</td>
        <td>${crop.production}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteCrop(${crop.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}


renderTable(cropsData);

form.addEventListener("submit", e => {
  e.preventDefault();

  const newCrop = {
    id: Date.now(),
    name: cropName.value,
    area: cropArea.value,
    production: cropProduction.value
  };

  cropsData.push(newCrop);
  renderTable(cropsData);
  form.reset();
});

function deleteCrop(id) {
  cropsData = cropsData.filter(crop => crop.id !== id);
  renderTable(cropsData);
}

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = cropsData.filter(c =>
    c.name.toLowerCase().includes(value)
  );
  renderTable(filtered);
});
