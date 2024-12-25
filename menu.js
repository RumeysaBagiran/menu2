// Menü içeriği
const menuData = {
    drinks: [
      { name: "Kola", description: "Soğuk içecek", price: "₺20" },
      { name: "Çay", description: "Sıcak çay", price: "₺10" },
    ],
    "main-courses": [
      { name: "Adana Kebap", description: "Közlenmiş biber ile", price: "₺80" },
      { name: "Tavuk Izgara", description: "Pirinç pilavı ile", price: "₺70" },
    ],
    desserts: [
      { name: "Baklava", description: "Şerbetli tatlı", price: "₺50" },
      { name: "Sütlaç", description: "Hafif tatlı", price: "₺30" },
    ],
  };
  
  // Kategori gösterimi
  function showCategory(category) {
    const contentSection = document.getElementById("menu-content");
    const mainSection = document.getElementById("categories");
    const contentDiv = document.getElementById("content");
  
    mainSection.style.display = "none";
    contentSection.style.display = "block";
    contentDiv.innerHTML = ""; // Önceki içerikleri temizle
  
    menuData[category].forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("menu-item");
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span>${item.price}</span>
      `;
      contentDiv.appendChild(itemDiv);
    });
  }
  
  // Geri dönüş
  function goBack() {
    const contentSection = document.getElementById("menu-content");
    const mainSection = document.getElementById("categories");
  
    contentSection.style.display = "none";
    mainSection.style.display = "flex";
  }
  