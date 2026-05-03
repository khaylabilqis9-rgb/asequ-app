import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [order, setOrder] = useState("");

  const waNumber = "6285775040947";

  const handleOrder = () => {
    const text = encodeURIComponent(`Halo, saya ingin pesan: ${order}`);
    window.open(`https://wa.me/${waNumber}?text=${text}`);
  };

  const images = [
    "/images/ase1.jpg",
    "/images/ase2.jpg",
    "/images/ase3.jpg",
    "/images/ase4.jpg",
    "/images/ase5.jpg",
    "/images/ase6.jpeg"
  ];

  return (
    <div
  style={{
    fontFamily: "Arial",
    lineHeight: 1.6,
    background: "linear-gradient(135deg, #fdf6e3, #fceabb)",
    minHeight: "100vh"
  }}
>

  {/* HERO */}
  <section
    style={{
      padding: 60,
      textAlign: "center",
      background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
      color: "white",
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
    }}
  >
    <h1 style={{ fontSize: 48, marginBottom: 10 }}>AseQu!</h1>
    <p style={{ fontSize: 18 }}>Warisan Kuliner & Budaya Betawi</p>
  </section>

  {/* PENJELASAN */}
  <section
    style={{
      padding: 60,
      margin: "40px auto",
      maxWidth: 800,
      background: "white",
      borderRadius: 20,
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      position: "relative",
      overflow: "hidden"
    }}
  >
    {/* Motif dekorasi */}
    <div
      style={{
        position: "absolute",
        top: -50,
        right: -50,
        width: 150,
        height: 150,
        background: "radial-gradient(circle, #ffb347, transparent)",
        opacity: 0.4
      }}
    />

    <h2 style={{ color: "#ff7e5f", marginBottom: 20 }}>
      Apa itu AseQu! ?
    </h2>

    <p style={{ marginBottom: 15 }}>
      Bubur Ase merupakan makanan khas Betawi berupa bubur nasi yang disajikan dengan 
      kuah semur, serta pelengkap seperti asinan sayur dan emping, 
      dengan perpaduan rasa gurih, manis, dan segar. AseQu! hadir menjadikan inovasi terbarukan
      yaitu menggabungkan makanan instan dengan budaya khas Betawi.
    </p>

    <p>
      Hidangan ini mencerminkan kekayaan budaya Betawi yang dipengaruhi oleh berbagai budaya,
      seperti Tionghoa, Arab, dan Nusantara.
    </p>
  </section>
    
      {/* GALERI */}
      <section style={{ padding: 40 }}>
        <h2>Galeri Budaya Betawi</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: 16
        }}>
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              style={{ width: "100%", borderRadius: 12 }}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* RESEP */}
      <section style={{ padding: 60, background: "white" }}>
        <h2>Bubur Ase Instant</h2>

        <h3>Bahan:</h3>
        <ul>
          <li>Nasi putih</li>
          <li>Semur daging </li>
          <li>Asinan sayur </li>
          <li>Keripik dan bawang goreng</li>
        </ul>

        <h3> Langkah Membuat:</h3>
        <ol>
          <li>Buka kemasan Bubur instan, tuangkan 200ml air hangat (± 1 cangkir)</li>
          <li>Aduk perlahan hingga konsistensi bubur sesuai yang anda inginkan</li>
          <li>⁠Tutup kemasan ± 2 menit agar bubur termasak sempurna</li>
          <li>Buka kembali kemasan, Tuangkan semur, asinan, serta topping bubur ase yang telah disediakan </li>
          <li>⁠Bubur Ase pun siap, Selamat menikmati AseQu!</li>
        </ol>
      </section>

      {/* BUDAYA BETAWI */}
      <section style={{ padding: 60 }}>
        <h2>Budaya Betawi</h2>

        <h3>📍 Daerah</h3>
        <p>Betawi berasal dari Jakarta dan sekitarnya.</p>

        <h3>🗣 Bahasa</h3>
        <p>Bahasa Betawi menggunakan kata seperti "gue", "lu", dan gaya santai.</p>

        <h3>🎭 Kesenian</h3>
        <p>Ondel-ondel, sirih kuning, lenong, dan gambang kromong.</p>

        <h3>👕 Pakaian Adat</h3>
        <p>Kebaya encim.</p>

        <h3>🎉 Tradisi</h3>
        <p>Palang pintu dan pernikahan adat Betawi.</p>
      </section>

      {/* VIDEO */}
      <section style={{ padding: 60, background: "white" }}>
        <h2>Video Budaya Betawi</h2>

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/wHluqrlfUgU"
        ></iframe>

        <br /><br />

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/bpT3ckb4vS0"
        ></iframe>
      </section>

      {/* ORDER */}
      <section style={{ padding: 60, textAlign: "center" }}>
        <h2>Pesan Bubur Ase</h2>

        <input
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          placeholder="Contoh: 2 bubur ase"
          style={{ padding: 10, width: "60%" }}
        />

        <br /><br />

        <button onClick={handleOrder} style={{ padding: 12 }}>
          Pesan via WhatsApp
        </button>
      </section>

    </div>
  );
}