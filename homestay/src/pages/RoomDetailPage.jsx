import { useState, useEffect } from "react";
import { getSingleRoom } from "../services/api";

const MOCK_ROOMS = {
  "1": { _id: "1", name: "Forest Suite", type: "suite", floor: 3, pricePerNight: 4500, pricePerPerson: 1500, maxGuests: 4, images: [], amenities: ["Mountain View", "King Bed", "Private Balcony", "Fireplace", "Wi-Fi", "Room Service", "Daily Housekeeping", "Electric Kettle"], description: "Wake up to pine-scented air and panoramic valley views from this plush suite on the 3rd floor. Featuring hand-carved Himachali furniture, a private balcony overlooking the valley, and a wood-burning fireplace that transforms cold evenings into something magical. The Forest Suite is Mountain Shade's signature room — intimate, warm, and endlessly beautiful." },
  "2": { _id: "2", name: "Ridge Cottage Room", type: "deluxe", floor: 2, pricePerNight: 3200, pricePerPerson: 1200, maxGuests: 2, images: [], amenities: ["Valley View", "Queen Bed", "En-suite Bath", "Wi-Fi", "Room Service", "Balcony", "Heater"], description: "A refined double room with warm wood interiors and sweeping ridge views — perfect for couples seeking quiet luxury. The Ridge Cottage Room balances rustic charm with modern comfort, featuring locally sourced furniture and floor-to-ceiling windows that frame the mountains like a living painting." },
  "3": { _id: "3", name: "Himalayan Loft", type: "premium", floor: 4, pricePerNight: 5800, pricePerPerson: 1800, maxGuests: 6, images: [], amenities: ["360° View", "Loft Design", "Kitchenette", "Rooftop Access", "Fireplace", "Wi-Fi", "Mini Bar", "Premium Toiletries"], description: "Our crown jewel — a dramatic duplex loft spanning the 4th floor with unobstructed Himalayan skyline views in all directions. The loft's open-plan design creates a sense of infinite space, while exclusive rooftop access makes sunrise and sunset viewing a private luxury. For those who demand the extraordinary." },
  "4": { _id: "4", name: "Garden Room", type: "standard", floor: 1, pricePerNight: 2200, pricePerPerson: 900, maxGuests: 2, images: [], amenities: ["Garden View", "Double Bed", "Private Bath", "Wi-Fi", "Heater", "Wardrobe"] },
  "5": { _id: "5", name: "Pine View Double", type: "deluxe", floor: 2, pricePerNight: 2800, pricePerPerson: 1100, maxGuests: 3, images: [], amenities: ["Pine View", "Double Bed", "Balcony", "Wi-Fi", "Heater", "Room Service"] },
  "6": { _id: "6", name: "Summit Family Room", type: "family", floor: 3, pricePerNight: 6200, pricePerPerson: 1400, maxGuests: 8, images: [], amenities: ["Mountain View", "4 Beds", "Living Area", "2 Baths", "Kitchenette", "Wi-Fi"] },
};

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1482192505345-5852718c3589?w=800&q=80",
];

const TYPE_LABEL = { suite: "Suite", deluxe: "Deluxe", premium: "Premium", standard: "Standard", family: "Family Room" };

export default function RoomDetailPage({ roomId, navigate }) {
  const [room, setRoom] = useState(MOCK_ROOMS[roomId] || Object.values(MOCK_ROOMS)[0]);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [bookMode, setBookMode] = useState("room");
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1); // 1=details, 2=confirm, 3=success
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchRoom();
  }, [roomId]);

  const fetchRoom = async () => {
    try {
      const data = await getSingleRoom(roomId);
      if (data?._id) setRoom(data);
    } catch (_) {
      setRoom(MOCK_ROOMS[roomId] || Object.values(MOCK_ROOMS)[0]);
    } finally {
      setLoading(false);
    }
  };

  const nights = checkIn && checkOut
    ? Math.max(1, Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000))
    : 1;

  const basePrice = bookMode === "person"
    ? (room.pricePerPerson || 0) * guests
    : (room.pricePerNight || 0);
  const subtotal = basePrice * nights;
  const taxes = Math.round(subtotal * 0.18);
  const total = subtotal + taxes;

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleBook = async (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!checkIn || !checkOut || !name || !email) { showToast("Please fill all required fields"); return; }
      setStep(2); return;
    }
    if (step === 2) {
      try {
        await fetch("http://localhost:5000/api/bookings/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ roomId: room._id, roomName: room.name, guestName: name, email, phone, checkIn, checkOut, guests, bookingType: bookMode, totalAmount: total, nights }),
        });
      } catch (_) {}
      setStep(3);
    }
  };

  const galleryImages = room.images?.length ? room.images : GALLERY_IMAGES;

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
        <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", letterSpacing: "0.3em", color: "#5a5040", textTransform: "uppercase" }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      {toast && <div className="toast">{toast}</div>}

      {/* BACK */}
      <div style={{ padding: "24px 6%", borderBottom: "1px solid #1e1e14" }}>
        <button onClick={() => navigate("rooms")} style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px",
          letterSpacing: "0.2em", color: "#7a6a50", textTransform: "uppercase",
          display: "flex", alignItems: "center", gap: "8px", transition: "color 0.2s"
        }}
          onMouseEnter={e => e.currentTarget.style.color = "#c8a96e"}
          onMouseLeave={e => e.currentTarget.style.color = "#7a6a50"}
        >
          ← Back to Rooms
        </button>
      </div>

      <div style={{ padding: "40px 6%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "48px", alignItems: "start" }}>

          {/* LEFT COLUMN */}
          <div>
            {/* MAIN IMAGE */}
            <div style={{ position: "relative", marginBottom: "12px" }}>
              <div style={{ width: "100%", height: "420px", overflow: "hidden", background: "#141b22" }}>
                {galleryImages[activeImg] ? (
                  <img src={galleryImages[activeImg]} alt={room.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.3s" }} />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#c8a96e" }}>
                    Mountain Shade · {room.name}
                  </div>
                )}
              </div>
              <div style={{ position: "absolute", top: "16px", left: "16px", background: "#0d1117cc", padding: "6px 14px" }}>
                <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.2em", color: "#c8a96e", textTransform: "uppercase" }}>
                  {TYPE_LABEL[room.type]} · Floor {room.floor}
                </span>
              </div>
            </div>

            {/* THUMBNAILS */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "40px" }}>
              {galleryImages.slice(0, 4).map((img, i) => (
                <div key={i} onClick={() => setActiveImg(i)} style={{
                  width: "80px", height: "60px", overflow: "hidden", cursor: "pointer",
                  border: activeImg === i ? "2px solid #c8a96e" : "1px solid #1e1e14",
                  opacity: activeImg === i ? 1 : 0.5, transition: "all 0.2s", flex: "0 0 80px"
                }}>
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>

            {/* ROOM INFO */}
            <div className="section-label" style={{ marginBottom: "12px" }}>About this room</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, color: "#e8d5b0", marginBottom: "20px" }}>
              {room.name}
            </h1>
            <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "13px", letterSpacing: "0.05em", color: "#7a6a50", lineHeight: 2, marginBottom: "36px", maxWidth: "560px" }}>
              {room.description}
            </p>

            <div className="divider" style={{ marginBottom: "36px" }} />

            {/* AMENITIES */}
            <div style={{ marginBottom: "40px" }}>
              <div className="section-label" style={{ marginBottom: "20px" }}>Room Amenities</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px" }}>
                {room.amenities?.map(a => (
                  <div key={a} style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "12px 16px", border: "1px solid #1e1e14", background: "#141b22"
                  }}>
                    <div style={{ width: "6px", height: "6px", background: "#c8a96e", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", letterSpacing: "0.08em", color: "#b8a882" }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="divider" style={{ marginBottom: "36px" }} />

            {/* PRICING TABLE */}
            <div style={{ marginBottom: "40px" }}>
              <div className="section-label" style={{ marginBottom: "20px" }}>Pricing</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                {[
                  ["Per room / night", `₹${room.pricePerNight?.toLocaleString()}`],
                  ["Per person / night", `₹${room.pricePerPerson?.toLocaleString()}`],
                  ["Max guests", `${room.maxGuests} persons`],
                  ["GST", "18% applicable"],
                ].map(([label, val]) => (
                  <div key={label} style={{ background: "#141b22", padding: "16px 20px" }}>
                    <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.2em", color: "#5a5040", textTransform: "uppercase", marginBottom: "4px" }}>{label}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#c8a96e" }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOOKING SIDEBAR */}
          <div style={{ position: "sticky", top: "120px" }}>
            <div style={{ background: "#141b22", border: "1px solid #2a2a1e" }}>

              {step === 3 ? (
                <div style={{ padding: "40px 28px", textAlign: "center" }}>
                  <div style={{ fontSize: "40px", marginBottom: "16px" }}>✓</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "#c8a96e", marginBottom: "12px" }}>Booking Confirmed!</div>
                  <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", letterSpacing: "0.08em", color: "#7a6a50", lineHeight: 1.8, marginBottom: "28px" }}>
                    Thank you, {name}. We've received your booking for {room.name}. A confirmation will be sent to {email}.
                  </div>
                  <button className="gold-outline-btn" style={{ width: "100%" }} onClick={() => { setStep(1); setName(""); setEmail(""); setPhone(""); setCheckIn(""); setCheckOut(""); setGuests(1); }}>
                    Book Another Room
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ padding: "24px 28px", borderBottom: "1px solid #1e1e14" }}>
                    <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.25em", color: "#c8a96e", textTransform: "uppercase", marginBottom: "4px" }}>
                      {step === 1 ? "Reserve Your Stay" : "Confirm Booking"}
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#e8d5b0" }}>{room.name}</div>
                  </div>

                  {/* MODE TOGGLE */}
                  <div style={{ padding: "16px 28px", borderBottom: "1px solid #1e1e14", display: "flex", gap: "0" }}>
                    {["room", "person"].map(m => (
                      <button key={m} onClick={() => setBookMode(m)} style={{
                        flex: 1, fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px",
                        letterSpacing: "0.15em", textTransform: "uppercase", padding: "9px",
                        border: "1px solid #2a2a1e", background: bookMode === m ? "#c8a96e" : "transparent",
                        color: bookMode === m ? "#0d1117" : "#7a6a50", cursor: "pointer", transition: "all 0.2s"
                      }}>Per {m === "room" ? "Room" : "Person"}</button>
                    ))}
                  </div>

                  <form onSubmit={handleBook} style={{ padding: "20px 28px" }}>
                    {step === 1 && (
                      <>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                          <div>
                            <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Check-in *</label>
                            <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} required min={new Date().toISOString().split("T")[0]} />
                          </div>
                          <div>
                            <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Check-out *</label>
                            <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} required min={checkIn} />
                          </div>
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Guests *</label>
                          <input type="number" min={1} max={room.maxGuests} value={guests} onChange={e => setGuests(Math.min(+e.target.value, room.maxGuests))} required />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Full Name *</label>
                          <input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                        <div style={{ marginBottom: "10px" }}>
                          <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Email *</label>
                          <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                          <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.18em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Phone</label>
                          <input placeholder="+91 XXXXX XXXXX" value={phone} onChange={e => setPhone(e.target.value)} />
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <div style={{ marginBottom: "20px" }}>
                        {[
                          ["Guest", name],
                          ["Email", email],
                          ["Check-in", checkIn],
                          ["Check-out", checkOut],
                          ["Nights", nights],
                          ["Guests", guests],
                          ["Booking type", bookMode === "room" ? "Per room" : "Per person"],
                        ].map(([k, v]) => (
                          <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #1a1a12" }}>
                            <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: "#5a5040", textTransform: "uppercase" }}>{k}</span>
                            <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", color: "#b8a882" }}>{v}</span>
                          </div>
                        ))}
                        <button type="button" onClick={() => setStep(1)} style={{
                          fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.1em",
                          color: "#5a5040", background: "none", border: "none", cursor: "pointer",
                          marginTop: "10px", textDecoration: "underline"
                        }}>Edit details</button>
                      </div>
                    )}

                    {/* PRICE SUMMARY */}
                    {checkIn && checkOut && (
                      <div style={{ background: "#0d1117", border: "1px solid #1e1e14", padding: "16px", marginBottom: "16px" }}>
                        {[
                          [`₹${basePrice.toLocaleString()} × ${nights} night${nights > 1 ? "s" : ""}`, `₹${subtotal.toLocaleString()}`],
                          ["GST (18%)", `₹${taxes.toLocaleString()}`],
                        ].map(([l, v]) => (
                          <div key={l} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                            <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", color: "#5a5040" }}>{l}</span>
                            <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", color: "#b8a882" }}>{v}</span>
                          </div>
                        ))}
                        <div style={{ borderTop: "1px solid #2a2a1e", paddingTop: "10px", display: "flex", justifyContent: "space-between" }}>
                          <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: "#c8a96e", textTransform: "uppercase" }}>Total</span>
                          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#c8a96e" }}>₹{total.toLocaleString()}</span>
                        </div>
                      </div>
                    )}

                    <button type="submit" className="gold-btn" style={{ width: "100%", padding: "16px" }}>
                      {step === 1 ? "Continue →" : "Confirm Booking"}
                    </button>

                    <div style={{ marginTop: "12px", fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.1em", color: "#3a3020", textAlign: "center", lineHeight: 1.8 }}>
                      Free cancellation up to 48 hours before check-in · No credit card required
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
