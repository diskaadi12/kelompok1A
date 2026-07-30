// ===============================
// AMBIL ELEMEN
// ===============================
const content = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const produkBtn = document.getElementById("produkBtn");
const tentangBtn = document.getElementById("tentangBtn");
const pengembangBtn = document.getElementById("pengembangBtn");

const IMG_PATH = "/static/img/";

// ===============================
// HELPER TEMPLATE (FIX UTAMA)
// ===============================
function renderTemplate(id) {
  const template = document.getElementById(id);

  content.innerHTML = "";
  const clone = template.content.cloneNode(true);

  content.appendChild(clone);
}

// ===============================
// HOME
// ===============================
function showHome() {
  content.innerHTML = `
  <div class="home-modern fade-in">
    <div class="hero">
      <div class="hero-text">
        <h1>🎁 Masycraft</h1>
        <p class="tagline">Bucket kreatif untuk momen spesialmu 💐</p>
        <p class="desc">
          Kami menyediakan bucket bunga, snack, boneka, dan parsel custom
          dengan desain unik dan penuh makna.
        </p>

        <div class="cta">
          <button onclick="showProduk()">Lihat Produk</button>
          <button onclick="showTentang()">Tentang Kami</button>
        </div>
      </div>

      <div class="hero-img">
        <img src="${IMG_PATH}produk.png">
      </div>
    </div>
  </div>`;
}

// ===============================
// PRODUK
// ===============================
function showProduk() {
  content.innerHTML = `
  <div class="fade-in">
    <h2>Pilih Kategori</h2>

    <div class="kategori-grid">
      ${createCategoryCard("Bucket", "bucket.png", "showBucket()")}
      ${createCategoryCard("Gift", "gift.png", "showGift()")}
      ${createCategoryCard("Parsel", "parsel.png", "showParsel()")}
      ${createCategoryCard("Pigura", "pigura.png", "showPigura()")}
    </div>

    <button onclick="showHome()" class="back-btn">← Kembali</button>
  </div>`;
}

function createCategoryCard(title, img, click) {
  return `
  <div class="kategori-card" onclick="${click}">
    <img src="${IMG_PATH}${img}">
    <h3>${title}</h3>
  </div>`;
}

// ===============================
// DETAIL PRODUK
// ===============================
function showBucket() {
  renderProductPage("Bucket", [
    ["Bucket Mawar Cinta", "bucketbunga.png", "30.000 - 1.000.000"],
    ["Bucket Snack Ceria", "bucketsnack.png", "40.000 - 300.000"],
    ["Bucket Uang Elegan", "bucketuang.png", "100.000 - 2.000.000"],
    ["Bucket Skincare", "bucketskincare.png", "85.000 - 500.000"]
  ]);
}

function showGift() {
  renderProductPage("Gift", [
    ["Gift Anniversary", "gift1.png", "150.000"],
    ["Gift Kesayangan", "gift2.png", "130.000"],
    ["Gift Ulang Tahun", "gift3.png", "100.000"],
    ["Gift Idul Fitri", "gift4.png", "160.000"],
    ["Gift Valentine", "gift5.png", "160.000"]
  ]);
}

function showParsel() {
  renderProductPage("Parsel", [
    ["Parsel Lebaran", "parsel1.png", "180.000"],
    ["Parsel Pernikahan", "parsel2.png", "175.000"],
    ["Parsel Tahun Baru", "parsel3.png", "200.000"],
    ["Parsel Valentine", "parsel4.png", "190.000"],
    ["Parsel Mertua", "parsel5.png", "190.000"],
    ["Parsel Natal", "parsel6.png", "190.000"]
  ]);
}

function showPigura() {
  renderProductPage("Pigura", [
    ["Pigura Hari Guru/Perpisahan", "pigura1.png", "80.000"],
    ["Pigura Kelulusan/Ulang Tahun", "pigura2.png", "100.000"],
    ["Pigura Graduation", "pigura3.png", "95.000"],
    ["Pigura Anniversary", "pigura4.png", "120.000"]
  ]);
}

// ===============================
// POPUP FORM
// ===============================

// buka popup
function openPopup(namaProduk, hargaProduk) {

  document.getElementById("popupForm").style.display = "flex";

  // isi otomatis
  document.getElementById("jenisPesanan").value = namaProduk;
  document.getElementById("harga").value = hargaProduk;
}

// tutup popup
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

// klik area hitam = tutup
window.onclick = function(event) {

  const popup = document.getElementById("popupForm");

  if (event.target == popup) {
    popup.style.display = "none";
  }
};

// ===============================
// RENDER PRODUK
// ===============================
function renderProductPage(title, products) {

  let html = products.map(p => `
  
    <div class="produk-item">

      <img src="${IMG_PATH}${p[1]}">

      <p>${p[0]}</p>

      <div class="harga-box">
        Rp ${p[2]}
      </div>

      <button 
        class="btn-pesan"
        onclick="openPopup('${p[0]}','${p[2]}')">

        Pesan

      </button>

    </div>

  `).join("");

  content.innerHTML = `
  <div class="fade-in">

    <h2>${title}</h2>

    <div class="produk-grid">
      ${html}
    </div>

    <button onclick="showProduk()" class="back-btn">
      ← Kembali
    </button>

  </div>`;
}

// ===============================
// KIRIM PESANAN
// ===============================
// ===============================
// KIRIM PESANAN KE DATABASE
// ===============================
function kirimPesanan(event) {

  event.preventDefault();

  // ambil data form
  const dataPesanan = {

    nama: document.getElementById("nama").value,

    jenis: document.getElementById("jenisPesanan").value,

    alamat: document.getElementById("alamat").value,

    nohp: document.getElementById("nohp").value,

    metode: document.getElementById("metode").value,

    hari: document.getElementById("hari").value,

    tanggal: document.getElementById("tanggal").value,

    jam: document.getElementById("jam").value,

    harga: document.getElementById("harga").value,

    request: document.getElementById("request").value
  };

  // kirim data ke Flask
  fetch("/pesan", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(dataPesanan)

  })

  .then(response => response.json())

  .then(data => {

    alert("Pesanan berhasil disimpan ✅");

    // tutup popup
    closePopup();

    // reset form
    document.getElementById("formPesanan").reset();

  })

  .catch(error => {

    console.log(error);

    alert("Terjadi kesalahan ❌");

  });
}

// ===============================
// TENTANG (FIX)
// ===============================
function showTentang() {
  renderTemplate("tentangTemplate");
}

// ===============================
// PENGEMBANG (FIX)
// ===============================
function showPengembang() {
  renderTemplate("pengembangTemplate");
}

// ===============================
// NAVBAR
// ===============================
homeBtn.onclick = showHome;
produkBtn.onclick = showProduk;
tentangBtn.onclick = showTentang;
pengembangBtn.onclick = showPengembang;

// ===============================
// LOAD
// ===============================
document.addEventListener("DOMContentLoaded", showHome);