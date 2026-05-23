import { useState, useEffect, useRef } from "react";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import RoomDetailPage from "./pages/RoomDetailPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const navigate = (p, id = null) => {
    setPage(p);
    setSelectedRoomId(id);
    setMenuOpen(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e8d5b0", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Josefin+Sans:wght@200;300;400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0d1117; }
        ::-webkit-scrollbar-thumb { background: #c8a96e; border-radius: 2px; }
        body { background: #0d1117; }
        .nav-link {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b8a882;
          cursor: pointer;
          border: none;
          background: none;
          padding: 6px 0;
          position: relative;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #c8a96e;
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #c8a96e; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active { color: #c8a96e; }
        .nav-link.active::after { width: 100%; }
        .gold-btn {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: #c8a96e;
          color: #0d1117;
          border: none;
          padding: 12px 28px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }
        .gold-btn:hover { background: #e8d5b0; transform: translateY(-1px); }
        .gold-outline-btn {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: transparent;
          color: #c8a96e;
          border: 1px solid #c8a96e;
          padding: 11px 28px;
          cursor: pointer;
          transition: background 0.3s, color 0.3s, transform 0.2s;
        }
        .gold-outline-btn:hover { background: #c8a96e; color: #0d1117; transform: translateY(-1px); }
        .section-label {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c8a96e;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-label::before, .section-label::after {
          content: '';
          display: block;
          height: 1px;
          width: 40px;
          background: #c8a96e;
          opacity: 0.5;
        }
        .room-card {
          background: #141b22;
          border: 1px solid #2a2a1e;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s ease, border-color 0.3s;
        }
        .room-card:hover { transform: translateY(-6px); border-color: #c8a96e; }
        .room-card:hover .room-img { transform: scale(1.05); }
        .room-img { transition: transform 0.6s ease; width: 100%; height: 220px; object-fit: cover; display: block; }
        .room-img-placeholder {
          width: 100%; height: 220px;
          background: linear-gradient(135deg, #1a2a20, #2d1a0a);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px; letter-spacing: 0.15em;
          color: #c8a96e; opacity: 0.7;
          transition: transform 0.6s ease;
        }
        .room-card:hover .room-img-placeholder { transform: scale(1.03); }
        .fade-in { animation: fadeIn 0.8s ease forwards; }
        .slide-up { animation: slideUp 0.7s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        .divider { height: 1px; background: linear-gradient(to right, transparent, #c8a96e44, transparent); margin: 0; }
        .amenity-pill {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          border: 1px solid #2d2d1e; color: #b8a882;
          padding: 6px 14px; display: inline-block;
        }
        .star { color: #c8a96e; font-size: 14px; }
        input, select, textarea {
          background: #141b22; border: 1px solid #2a2a1e; color: #e8d5b0;
          padding: 12px 16px; font-family: 'Josefin Sans', sans-serif;
          font-size: 12px; letter-spacing: 0.08em; width: 100%;
          outline: none; transition: border-color 0.3s;
        }
        input:focus, select:focus, textarea:focus { border-color: #c8a96e; }
        input::placeholder { color: #5a5040; }
        select option { background: #141b22; }
        .gallery-img {
          width: 100%; object-fit: cover; display: block;
          transition: transform 0.5s ease, opacity 0.3s;
          cursor: pointer;
        }
        .gallery-img:hover { transform: scale(1.03); opacity: 0.9; }
        .toast {
          position: fixed; bottom: 32px; right: 32px; z-index: 9999;
          background: #c8a96e; color: #0d1117;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          padding: 14px 24px;
          animation: slideUp 0.4s ease;
        }
        .mobile-menu { display: none; }
        @media(max-width: 700px) {
          .desktop-nav { display: none !important; }
          .mobile-menu { display: block; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 1000,
        padding: "0 5%",
        background: scrolled ? "rgba(13,17,23,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #2a2a1e" : "1px solid transparent",
        transition: "background 0.4s, border-color 0.4s",
        backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "72px"
      }}>
        <div onClick={() => navigate("home")} style={{ cursor: "pointer" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300, letterSpacing: "0.12em", color: "#e8d5b0" }}>
            The <span style={{ color: "#c8a96e" }}>Piabto</span>
          </div>
          <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.35em", color: "#7a6a50", textTransform: "uppercase" }}>Kasauli · Himachal Pradesh</div>
        </div>

        <div className="desktop-nav" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          <button className={`nav-link ${page === "home" ? "active" : ""}`} onClick={() => navigate("home")}>Home</button>
          <button className={`nav-link ${page === "rooms" ? "active" : ""}`} onClick={() => navigate("rooms")}>Rooms</button>
          <button className="nav-link" onClick={() => { navigate("home"); setTimeout(() => document.getElementById("gallery-section")?.scrollIntoView({ behavior: "smooth" }), 100); }}>Gallery</button>
          <button className="nav-link" onClick={() => { navigate("home"); setTimeout(() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" }), 100); }}>Contact</button>
          <button className="gold-btn" style={{ padding: "10px 22px", fontSize: "10px" }} onClick={() => navigate("rooms")}>Book Now</button>
        </div>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#c8a96e", fontSize: "22px", cursor: "pointer" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: "72px", left: 0, right: 0, background: "#0d1117", borderBottom: "1px solid #2a2a1e", zIndex: 999, padding: "24px 5%", display: "flex", flexDirection: "column", gap: "20px" }}>
          {["home", "rooms"].map(p => (
            <button key={p} className="nav-link" onClick={() => navigate(p)} style={{ textAlign: "left" }}>{p.charAt(0).toUpperCase() + p.slice(1)}</button>
          ))}
          <button className="gold-btn" onClick={() => navigate("rooms")}>Book Now</button>
        </div>
      )}

      {/* PAGES */}
      {page === "home" && <HomePage navigate={navigate} />}
      {page === "rooms" && <RoomsPage navigate={navigate} />}
      {page === "room-detail" && <RoomDetailPage roomId={selectedRoomId} navigate={navigate} />}

      {/* FOOTER */}
      <footer style={{ background: "#080c10", borderTop: "1px solid #1e1e14", padding: "60px 5% 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 300, color: "#e8d5b0", marginBottom: "8px" }}>
              Mountain <span style={{ color: "#c8a96e" }}>Shade</span>
            </div>
            <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: "#5a5040", lineHeight: 1.8 }}>
              A boutique homestay nestled<br />in the hills of Kasauli.<br />4 floors · Mountain views · Pure air.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.25em", color: "#c8a96e", marginBottom: "16px", textTransform: "uppercase" }}>Navigate</div>
            {["Home", "Rooms", "Gallery", "Contact"].map(l => (
              <div key={l} style={{ marginBottom: "10px" }}>
                <button className="nav-link" onClick={() => navigate(l.toLowerCase())} style={{ fontSize: "12px" }}>{l}</button>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.25em", color: "#c8a96e", marginBottom: "16px", textTransform: "uppercase" }}>Contact</div>
            {[
              ["📍", "Kasauli, Himachal Pradesh — 173204"],
              ["📞", "+91 98765 43210"],
              ["✉", "stay@mountainshade.in"],
            ].map(([icon, text]) => (
              <div key={text} style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", color: "#7a6a50", marginBottom: "10px", letterSpacing: "0.05em" }}>
                {icon} {text}
              </div>
            ))}
          </div>
        </div>
        <div className="divider" />
        <div style={{ marginTop: "24px", fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.15em", color: "#3a3020", textAlign: "center", textTransform: "uppercase" }}>
          © 2025 Mountain Shade Homestay · Kasauli · Himachal Pradesh
        </div>
      </footer>
    </div>
  );
}
