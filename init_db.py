import sqlite3

conn = sqlite3.connect("database.db")
c = conn.cursor()

# buat tabel
c.execute("""
CREATE TABLE IF NOT EXISTS produk (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    harga TEXT,
    gambar TEXT
)
""")

# isi data contoh
c.execute("INSERT INTO produk (nama, harga, gambar) VALUES (?, ?, ?)",
          ("Bucket Mawar", "Rp 50.000", "bucketbunga.png"))

c.execute("INSERT INTO produk (nama, harga, gambar) VALUES (?, ?, ?)",
          ("Bucket Snack", "Rp 70.000", "bucketsnack.png"))

c.execute("INSERT INTO produk (nama, harga, gambar) VALUES (?, ?, ?)",
          ("Parsel Lebaran", "Rp 120.000", "parsel1.png"))

conn.commit()
conn.close()

print("Database berhasil dibuat!")