// Menu déroulant
function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Ouvrir la page de menu
function openMenu() {
  document.getElementById("menuPage").style.display = "block";
}

// Fermer la page de menu
function closeMenu() {
  document.getElementById("menuPage").style.display = "none";
}

// Ouvrir la page de recherche
function openSearch() {
  document.getElementById("searchPage").style.display = "block";
}

// Fermer la page de recherche
function closeSearch() {
  document.getElementById("searchPage").style.display = "none";
}

// Ouvrir le panier
function openCart() {
  document.getElementById("cartPage").style.display = "block";
}

// Fermer le panier
function closeCart() {
  document.getElementById("cartPage").style.display = "none";
}
function closeSearch() {
  window.location.href = "index.html";
}

function closePanier() {
  window.location.href = "index.html";
}
function openPanier() {
  document.getElementById("panierPage").style.display = "block";
}
function closePanier() {
  document.getElementById("panierPage").style.display = "none";
}
function showProductDetail(productId) {
  window.location.href = "produit.html?id=" + productId;
}
fetch('data/produits.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // أو عرض المنتجات داخل الصفحة
    afficherProduits(data);
  });

function afficherProduits(produits) {
  const container = document.getElementById("products-container");
  produits.forEach(produit => {
    const card = `
      <div class="product-card">
        <img src="${produit.image}" alt="${produit.title}">
        <h3>${produit.title}</h3>
        <p>${produit.price}</p>
        <button>Ajouter au panier</button>
      </div>
    `;
    container.innerHTML += card;
  });
}
  fetch('data/products.json')
    .then(res => res.json())
    .then(data => {
      console.log(data); // هذا يجب أن يظهر في Console
      // كود عرض المنتجات (يمكن إضافته لاحقاً)
    })
    .catch(err => console.error("Erreur lors du chargement:", err));
    function openMenu() {
  document.getElementById("menuPage").style.display = "block";
}

function closeMenu() {
  document.getElementById("menuPage").style.display = "none";
}
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slider-item');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 4000); // كل 4 ثواني
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
 const sizeEls = document.querySelectorAll(".size");
  const colorEls = document.querySelectorAll(".color");

  sizeEls.forEach(el => {
    el.addEventListener("click", () => {
      sizeEls.forEach(s => s.classList.remove("selected"));
      el.classList.add("selected");
    });
  });

  const colorCircles = document.querySelectorAll(".color-circle");
  colorCircles.forEach(circle => {
    circle.addEventListener("click", () => {
      colorCircles.forEach(c => c.classList.remove("selected"));
      circle.classList.add("selected");
    });
  });
  function updateQuantity(change) {
    const qtyInput = document.getElementById("quantity");
    let current = parseInt(qtyInput.value);
    current = isNaN(current) ? 1 : current;
    current += change;
    if (current < 1) current = 1;
    qtyInput.value = current;
  }
   function toggleDescription() {
    const content = document.getElementById("description-content");
    const icon = document.getElementById("description-icon");

    if (content.style.display === "none") {
      content.style.display = "block";
      icon.textContent = "×"; // علامة الخروج
    } else {
      content.style.display = "none";
      icon.textContent = "+"; // إعادة إلى علامة +
    }
  }
    const params = new URLSearchParams(window.location.search);
  const nom = params.get("nom");

  let consultes = JSON.parse(localStorage.getItem("consultes") || "[]");

  if (nom && !consultes.includes(nom)) {
    consultes.push(nom);
    localStorage.setItem("consultes", JSON.stringify(consultes));
  }
   const produitsConsultes = JSON.parse(localStorage.getItem("consultes") || "[]");
  const conteneur = document.getElementById("consultes");

  produitsConsultes.forEach((nomProduit) => {
    const div = document.createElement("div");
    div.textContent = nomProduit;
    conteneur.appendChild(div);
  });
  function closePanier() {
      window.history.back(); // أو يمكن استخدام: window.location.href = 'index.html';
    }
     function closeSearch() {
      window.history.back(); // أو window.location.href = "index.html";
    }


   
function openMenu() {
  document.getElementById('menuPage').style.display = 'flex';
}
function closeMenu() {
  document.getElementById('menuPage').style.display = 'none';
}

// 🟨 Dropdown tri
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// 🟧 Filtres
function openFiltre() {
  document.getElementById('filtreOverlay').style.display = 'block';
}
function closeFiltre() {
  document.getElementById('filtreOverlay').style.display = 'none';
}
function toggleCollapse(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}
function applyFilters() {
  alert("Filtres appliqués (fonctionnalité à implémenter)");
}
function clearFilter(type) {
  alert(`Filtre supprimé : ${type}`);
}

// 🟪 Pagination
function prevPage() {
  alert("Page précédente");
}
function nextPage() {
  alert("Page suivante");
}
function goToPage(n) {
  alert(`Page ${n}`);
}

// 🟫 Tri Produits (Placeholder)
function sortProducts(type) {
  alert("Tri par : " + type);
}

function toggleCollapse(listId) {
  const list = document.getElementById(listId);
  const icon = document.getElementById('catIcon');
  list.classList.toggle('hidden');
  icon.textContent = list.classList.contains('hidden') ? '+' : '-';
}

function showCategory(category) {
  const details = document.getElementById('categoryDetails');
  details.classList.remove('hidden');

  // بيانات وهمية لكل فئة
  const produits = {
    robe: ['robe1.jpg', 'robe2.jpg'],
    ensemble: ['ensemble1.jpg', 'ensemble2.jpg'],
    veste: ['veste1.jpg', 'veste2.jpg'],
    gilet: ['gilet1.jpg', 'gilet2.jpg']
  };

  // إنشاء HTML لعرض الصور
  const imgs = produits[category]
    .map(img => `<img src="assets/img/${img}" alt="${category}">`)
    .join('');

  details.innerHTML = `
    <h5>Produits pour: ${category.charAt(0).toUpperCase() + category.slice(1)}</h5>
    <div class="images">${imgs}</div>
  `;
}

function returnToShop() {
  // ترجع للصفحة الرئيسية للـshop
  closeFiltre();
  window.scrollTo(0, 0);
}

function goToCategorie(category) {
  // إزالة أي اختيارات أخرى (اختياري)
  const checkboxes = document.querySelectorAll('#catList input[type="checkbox"]');
  checkboxes.forEach(cb => cb.checked = false);

  // تحديد العنصر المضغوط
  event.target.checked = true;

  // الانتقال إلى صفحة جديدة مع باراميتر النوع
  window.location.href = `categorie.html?type=${category}`;
}

function applyFilters() {
  // يمكنك تنفيذ فلترة حسب السعر فقط
  const min = document.getElementById('minPrice').value;
  const max = document.getElementById('maxPrice').value;
  // أرسل البيانات حسب نوع الفلترة
  alert(`Filtrer entre ${min}DA et ${max}DA`);
  closeFiltre();
}

function toggleCollapse(sectionId, iconId) {
  const section = document.getElementById(sectionId);
  const icon = document.getElementById(iconId);

  if (section.classList.contains('hidden')) {
    section.classList.remove('hidden');
    icon.textContent = '−';
  } else {
    section.classList.add('hidden');
    icon.textContent = '+';
  }
}

function goToCategorie(cat) {
  window.location.href = cat + ".html"; // ينتقل لصفحة robe.html أو ensemble.html
}

function updatePrixRange() {
  const min = document.getElementById("minPrice").value;
  const max = document.getElementById("maxPrice").value;
  document.getElementById("prix-range").textContent = `${min}DA - ${max}DA`;
}

function returnToShop() {
  closeFiltre();
  // إذا أردت إعادة تحميل النتائج، أضف الكود هنا
}

function toggleCollapse(sectionId, iconId) {
  const section = document.getElementById(sectionId);
  const icon = document.getElementById(iconId);

  if (section.classList.contains('hidden')) {
    section.classList.remove('hidden');
    icon.textContent = '−';
  } else {
    section.classList.add('hidden');
    icon.textContent = '+';
  }
}


const PRODUCTS_PER_PAGE = 4;
let currentPage = 1;
let products = [];

fetch('data/products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    showProducts();
  });

function showProducts() {
  const container = document.getElementById('shopProducts');
  container.innerHTML = "";

  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginatedItems = products.slice(start, end);

  paginatedItems.forEach(product => {
    const productHTML = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;
    container.innerHTML += productHTML;
  });
}

function nextPage() {
  if ((currentPage * PRODUCTS_PER_PAGE) < products.length) {
    currentPage++;
    showProducts();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showProducts();
  }
}




function toggleCollapse(listId, iconId) {
  const list = document.getElementById(listId);
  const icon = document.getElementById(iconId);
  list.classList.toggle('hidden');
  icon.textContent = list.classList.contains('hidden') ? '+' : '−';
}
function updatePrixRange() {
  const min = document.getElementById("minPrice").value;
  const max = document.getElementById("maxPrice").value;
  document.getElementById("prix-range").textContent = `${min}DA - ${max}DA`;
}
function returnToShop() {
  const selectedCategories = Array.from(document.querySelectorAll('#catList input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.nextSibling.textContent.trim().toLowerCase());

  const min = parseInt(document.getElementById("minPrice").value);
  const max = parseInt(document.getElementById("maxPrice").value);

  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const category = product.getAttribute('data-category')?.toLowerCase();
    const price = parseInt(product.getAttribute('data-price'));

    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(category);
    const matchPrice = price >= min && price <= max;

    if (matchCategory && matchPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });

  // إغلاق نافذة الفلتر بعد التصفية
  closeFiltre();
}
function openFiltre() {
  document.getElementById("filtreOverlay").style.display = "block";
}

function closeFiltre() {
  document.getElementById("filtreOverlay").style.display = "none";
}

 function closePanier() {
      window.history.back(); // أو أي كود لإخفاء أو الرجوع
    }