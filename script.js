// === Ambil elemen utama ===
const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const produkBtn = document.getElementById("produkBtn");
const tentangBtn = document.getElementById("tentangBtn");
const pengembangBtn = document.getElementById("pengembangBtn");
const pengembangModal = document.getElementById("pengembangModal");
const closePengembang = document.getElementById("closePengembang");

// =======================================================
// =============== HALAMAN HOME ===========================
// =======================================================
function showHome() {
  content.innerHTML = `
  <div class="home-content fade-in">
    <img src="img/produk.png" alt="Bucket Masycraft">
    <div class="text">
      <h2>Selamat Datang di Masycraft</h2>
      <p>Kami menyediakan berbagai jenis bucket bunga, hadiah, dan parsel dengan desain kreatif untuk berbagai momen spesialmu.</p>
      <p>Temukan inspirasi hadiah terbaik hanya di Masycraft!</p>
    </div>
  </div>`;
}

// =======================================================
// =============== HALAMAN PRODUK (KATEGORI) =============
// =======================================================
function showProduk() {
  content.innerHTML = `
  <div class="fade-in">
    <h2>Pilih Kategori Produk</h2>
    <div class="kategori-grid">
      ${createCategoryCard("Bucket", "img/bucket.png", "showBucket()")}
      ${createCategoryCard("Gift", "img/gift.png", "showGift()")}
      ${createCategoryCard("Parsel", "img/parsel.png", "showParsel()")}
      ${createCategoryCard("Pigura", "img/pigura.png", "showPigura()")}
    </div>
  </div>`;
}

// ===== TEMPLATE KATEGORI CARD =====
function createCategoryCard(title, img, onClick) {
  return `
  <div class="kategori-card" onclick="${onClick}">
    <img src="${img}" alt="${title}">
    <h3>${title}</h3>
  </div>`;
}

// =======================================================
// =============== HALAMAN PRODUK DETAIL =================
// =======================================================
function showBucket() {
  renderProductPage("Koleksi Bucket Kami", [
    ["Bucket Mawar Cinta", "img/bucketbunga.png", "Rp 30.000 - Rp. 1.000.000"],
    ["Bucket Snack Ceria", "img/bucketsnack.png", "Rp 40.000 - Rp. 300.000"],
    ["Bucket Uang Elegan", "img/bucketuang.png", "Rp 100.000 - Rp. 2.000.000"],
    ["Bucket Skincare", "img/bucketskincare.png", "Rp 85.000 - Rp. 500.000"]
  ]);
}

function showGift() {
  renderProductPage("Koleksi Gift Spesial", [
    ["Gift Anniversary", "img/gift1.png", "Rp 150.000"],
    ["Gift Kesayangan", "img/gift2.png", "Rp 130.000"],
    ["Gift Ulang Tahun", "img/gift3.png", "Rp 100.000"],
    ["Gift Idul Fitri", "img/gift4.png", "Rp 160.000"],
    ["Gift Valentine", "img/gift5.png", "Rp 160.000"]
  ]);
}

function showParsel() {
  renderProductPage("Koleksi Parsel", [
    ["Parsel Lebaran", "img/parsel1.png", "Rp 180.000"],
    ["Parsel Pernikahan", "img/parsel2.png", "Rp 175.000"],
    ["Parsel Tahun Baru", "img/parsel3.png", "Rp 200.000"],
    ["Parsel Valentine", "img/parsel4.png", "Rp 190.000"],
    ["Parsel Mertua", "img/parsel5.png", "Rp 190.000"],
    ["Parsel Natal", "img/parsel6.png", "Rp 190.000"]
  ]);
}

function showPigura() {
  renderProductPage("Koleksi Pigura", [
    ["Pigura Hari Guru/Perpisahan", "img/pigura1.png", "Rp 80.000"],
    ["Pigura Kelulusan/Ulang Tahun", "img/pigura2.png", "Rp 100.000"],
    ["Pigura Graduation", "img/pigura3.png", "Rp 95.000"],
    ["Pigura Anniversary", "img/pigura4.png", "Rp 120.000"]
  ]);
}

// ===== TEMPLATE PRODUK GRID =====
function renderProductPage(title, products) {
  let items = products.map(p => createProductCard(p[0], p[1], p[2])).join("");
  content.innerHTML = `
  <div class="fade-in">
    <h2>${title}</h2>
    <div class="produk-grid">${items}</div>
    <div class="kembali-wrapper">
      <button class="back-btn" onclick="showProduk()">← Kembali</button>
    </div>
  </div>`;
}

function createProductCard(name, img, price) {
  return `
  <div class="produk-item">
    <img src="${img}" alt="${name}">
    <p>${name}</p>
    <div class="harga-box">${price}</div>
    <button class="btn-pesan" onclick="pesanProduk('${name}')">Pesan</button>
  </div>`;
}

// =======================================================
// =============== FUNGSI PESAN PRODUK ===================
// =======================================================
function pesanProduk(namaProduk) {
  const pesan = `Halo Masycraft! Saya ingin memesan ${namaProduk}.`;
  const encoded = encodeURIComponent(pesan);
  window.open(`https://wa.me/6285648667716?text=${encoded}`, "_blank");
}

// =======================================================
// =============== HALAMAN TENTANG KAMI ==================
// =======================================================
function showTentang() {
  content.innerHTML = `
  <div class="tentang fade-in">
    <h2>Tentang Kami</h2>
    <p><strong>Masycraft</strong> adalah usaha kreatif dari Blitar yang berfokus pada pembuatan bucket bunga, snack, boneka, dan parsel custom.</p>
    <p>Kami percaya setiap hadiah membawa kebahagiaan, dan kami ingin membantu pelanggan mengekspresikan kasih sayang melalui desain bucket terbaik.</p>
  </div>`;
}

// =======================================================
// =============== MODAL PENGEMBANG ======================
// =======================================================
pengembangBtn.addEventListener("click", () => pengembangModal.classList.add("show"));
closePengembang.addEventListener("click", () => pengembangModal.classList.remove("show"));
pengembangModal.addEventListener("click", (e) => {
  if (e.target === pengembangModal) pengembangModal.classList.remove("show");
});

// === Tambahan: Link ke Website Pribadi Pengembang ===
document.addEventListener("DOMContentLoaded", () => {
  const devLinks = [
    { selector: 'img[alt="Diska"]', url: "https://diskaadi12.github.io/p-webb/home.html" },
    { selector: 'img[alt="Ratna"]', url: "https://ratnarealme666-netizen.github.io/web/" },
    { selector: 'img[alt="Coky"]', url: "https://santosocoky-ai.github.io/pwebb/" }
  ];

  devLinks.forEach(dev => {
    const el = document.querySelector(dev.selector);
    if (el) {
      el.style.cursor = "pointer";
      el.addEventListener("click", () => {
        window.open(dev.url, "_blank");
        pengembangModal.classList.remove("show"); // Tutup modal setelah klik
      });
    }
  });
});

// =======================================================
// =============== NAVBAR LISTENER =======================
// =======================================================
homeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pengembangModal.classList.remove("show"); // tutup modal
  showHome();
});

produkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pengembangModal.classList.remove("show");
  showProduk();
});

tentangBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pengembangModal.classList.remove("show");
  showTentang();
});
// =======================================================
// =============== HALAMAN AWAL ==========================
// =======================================================
showHome();
