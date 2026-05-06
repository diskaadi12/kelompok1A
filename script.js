// === Ambil elemen utama ===
const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const produkBtn = document.getElementById("produkBtn");
const tentangBtn = document.getElementById("tentangBtn");
const pengembangBtn = document.getElementById("pengembangBtn");

// =======================================================
// ================= HALAMAN HOME =========================
// =======================================================
function showHome() {
  content.innerHTML = `
  <div class="home-content fade-in">
    <img src="img/produk.png" alt="Masycraft">
    <div class="text">
      <h2>Selamat Datang di Masycraft</h2>
      <p>Kami menyediakan berbagai bucket kreatif untuk momen spesialmu.</p>
      <p>Temukan hadiah terbaik di sini!</p>
    </div>
  </div>`;
}

// =======================================================
// ================= HALAMAN PRODUK =======================
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

function createCategoryCard(title, img, onClick) {
  return `
  <div class="kategori-card" onclick="${onClick}">
    <img src="${img}" alt="${title}">
    <h3>${title}</h3>
  </div>`;
}

// =======================================================
// ================= DETAIL PRODUK ========================
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

function renderProductPage(title, products) {
  let items = products.map(p => createProductCard(p[0], p[1], p[2])).join("");
  content.innerHTML = `
  <div class="fade-in">
    <h2>${title}</h2>
    <div class="produk-grid">${items}</div>
    <button class="back-btn" onclick="showProduk()">← Kembali</button>
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
// ================= PESAN PRODUK =========================
// =======================================================
function pesanProduk(namaProduk) {
  const pesan = `Halo Masycraft! Saya ingin memesan ${namaProduk}.`;
  const encoded = encodeURIComponent(pesan);
  window.open(`https://wa.me/6285648667716?text=${encoded}`, "_blank");
}

// =======================================================
// ================= TENTANG ==============================
// =======================================================
function showTentang() {
  content.innerHTML = `
  <div class="tentang fade-in">
    <h2>Tentang Kami</h2>
    <p><strong>Masycraft</strong> adalah usaha kreatif dari Blitar yang berfokus pada pembuatan bucket bunga, snack, boneka, dan parsel custom.</p>
    <p>Kami percaya setiap hadiah membawa kebahagiaan.</p>
  </div>`;
}

// =======================================================
// ================= PENGEMBANG ===========================
// =======================================================
function showPengembang() {
  content.innerHTML = `
  <div class="fade-in">
    <h2>Tim Pengembang</h2>
    <div class="pengembang-grid">

      <div class="dev-card">
        <img src="img/diska.jpg">
        <h3>Diska Adi Pratama</h3>
        <p>Jangan pernah menyerah, memulai adalah selalu hal yang tersulit</p>
      </div>

      <div class="dev-card">
        <img src="img/ratna.jpg">
        <h3>Habiba Ratna Safitri</h3>
        <p>Kita belajar dari kegagalan, bukan dari kesuksesan</p>
      </div>

      <div class="dev-card">
        <img src="img/cokyy.jpg">
        <h3>Coky Budi Santoso</h3>
        <p>Lakukan yang terbaik di semua kesempatan yang kamu miliki.</p>
      </div>

    </div>
  </div>`;
}

// =======================================================
// ================= NAVBAR ===============================
// =======================================================
homeBtn.onclick = function(e) {
  e.preventDefault();
  showHome();
};

produkBtn.onclick = function(e) {
  e.preventDefault();
  showProduk();
};

tentangBtn.onclick = function(e) {
  e.preventDefault();
  showTentang();
};

pengembangBtn.onclick = function(e) {
  e.preventDefault();
  showPengembang();
};

// =======================================================
// ================= HALAMAN AWAL =========================
// =======================================================
showHome();
