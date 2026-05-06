from flask import Flask, render_template, jsonify, request
import sqlite3
from openpyxl import Workbook, load_workbook
import os

app = Flask(__name__)

# ===============================
# KONEKSI DATABASE SQLITE
# ===============================
def get_db():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn

# ===============================
# HALAMAN UTAMA
# ===============================
@app.route("/")
def home():
    return render_template("index.html")

# ===============================
# AMBIL DATA PRODUK
# ===============================
@app.route("/produk")
def produk():
    db = get_db()
    data = db.execute("SELECT * FROM produk").fetchall()
    db.close()
    return jsonify([dict(row) for row in data])

# ===============================
# SIMPAN PESANAN (DATABASE + EXCEL)
# ===============================
# ===============================
# SIMPAN PESANAN (DATABASE + EXCEL)
# ===============================
@app.route("/pesan", methods=["POST"])
def simpan_pesanan():
    data = request.get_json()

    # DEBUG (biar keliatan di terminal)
    print("DATA MASUK:", data)

    nama = data.get("nama")
    alamat = data.get("alamat")
    produk = data.get("produk")
    harga = data.get("harga")

    # ======================
    # DATABASE
    # ======================
    db = get_db()
    db.execute("""
        CREATE TABLE IF NOT EXISTS pesanan (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nama TEXT,
            alamat TEXT,
            produk TEXT,
            harga TEXT
        )
    """)
    db.execute(
        "INSERT INTO pesanan (nama, alamat, produk, harga) VALUES (?, ?, ?, ?)",
        (nama, alamat, produk, harga)
    )
    db.commit()
    db.close()

    # ======================
    # EXCEL
    # ======================
    file = os.path.join(os.getcwd(), "pesanan.xlsx")

    if not os.path.exists(file):
        wb = Workbook()
        ws = wb.active
        ws.append(["Nama", "Alamat", "Produk", "Harga"])
    else:
        wb = load_workbook(file)
        ws = wb.active

    ws.append([nama, alamat, produk, harga])
    wb.save(file)

    return jsonify({"status": "success"})
# ===============================
# JALANKAN SERVER
# ===============================
if __name__ == "__main__":
    app.run(debug=True)
    
