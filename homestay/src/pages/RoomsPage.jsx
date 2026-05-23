import { useState, useEffect } from "react";
import { getRooms } from "../services/api";

const MOCK_ROOMS = [
  { _id: "1", name: "Forest Suite", type: "suite", floor: 3, pricePerNight: 4500, pricePerPerson: 1500, maxGuests: 4, images: [], amenities: ["Mountain View", "King Bed", "Private Balcony", "Fireplace", "Wi-Fi"], description: "Wake up to pine-scented air and panoramic valley views from this plush suite on the 3rd floor. Features hand-carved furniture, a private balcony, and a wood fireplace." },
  { _id: "2", name: "Ridge Cottage Room", type: "deluxe", floor: 2, pricePerNight: 3200, pricePerPerson: 1200, maxGuests: 2, images: [], amenities: ["Valley View", "Queen Bed", "En-suite Bath", "Wi-Fi", "Room Service"], description: "A refined double room with warm wood interiors and sweeping ridge views — perfect for couples seeking quiet luxury." },
  { _id: "3", name: "Himalayan Loft", type: "premium", floor: 4, pricePerNight: 5800, pricePerPerson: 1800, maxGuests: 6, images: [], amenities: ["360° View", "Loft Design", "Kitchenette", "Rooftop Access", "Fireplace"], description: "Our crown jewel — a dramatic duplex loft spanning the 4th floor with unobstructed Himalayan skyline views." },
  { _id: "4", name: "Garden Room", type: "standard", floor: 1, pricePerNight: 2200, pricePerPerson: 900, maxGuests: 2, images: [], amenities: ["Garden View", "Double Bed", "Private Bath", "Wi-Fi"], description: "A cozy ground-floor room opening onto the cottage garden. Ideal for those who want nature at their doorstep." },
  { _id: "5", name: "Pine View Double", type: "deluxe", floor: 2, pricePerNight: 2800, pricePerPerson: 1100, maxGuests: 3, images: [], amenities: ["Pine View", "Double Bed", "Balcony", "Wi-Fi", "Heater"], description: "Overlooking the deodar pine canopy, this room offers incredible forest immersion and morning birdsong." },
  { _id: "6", name: "Summit Family Room", type: "family", floor: 3, pricePerNight: 6200, pricePerPerson: 1400, maxGuests: 8, images: [], amenities: ["Mountain View", "4 Beds", "Living Area", "2 Baths", "Kitchenette"], description: "Spacious family accommodation across the entire west wing of the 3rd floor. Perfect for groups and families." },
];

const TYPE_COLORS = {
  suite: { bg: "#1a2a20", color: "#5DCAA5", label: "Suite" },
  deluxe: { bg: "#2a1a2a", color: "#AFA9EC", label: "Deluxe" },
  premium: { bg: "#2a1a10", color: "#EF9F27", label: "Premium" },
  standard: { bg: "#1a1e2a", color: "#85B7EB", label: "Standard" },
  family: { bg: "#2a1a1a", color: "#F0997B", label: "Family" },
};

export default function RoomsPage({ navigate }) {
  const [rooms, setRooms] = useState(MOCK_ROOMS);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [bookMode, setBookMode] = useState("room"); // "room" | "person"
  const [sortBy, setSortBy] = useState("default");
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const data = await getRooms();
      if (data?.length) setRooms(data);
    } catch (_) {} finally {
      setLoading(false);
    }
  };

  const types = ["all", ...Array.from(new Set(MOCK_ROOMS.map(r => r.type)))];

  const filtered = rooms
    .filter(r => filter === "all" || r.type === filter)
    .filter(r => bookMode === "person" ? r.maxGuests >= guests : true)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.pricePerNight - b.pricePerNight;
      if (sortBy === "price-desc") return b.pricePerNight - a.pricePerNight;
      if (sortBy === "guests") return b.maxGuests - a.maxGuests;
      return 0;
    });

  const nights = checkIn && checkOut
    ? Math.max(1, Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000))
    : 1;

  const getPrice = (room) => {
    if (bookMode === "person") return room.pricePerPerson * guests * nights;
    return room.pricePerNight * nights;
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "0" }}>
      {/* PAGE HERO */}
      <div style={{ position: "relative", padding: "80px 6% 60px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #141b22, #0d1117)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80")`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label fade-in" style={{ marginBottom: "16px" }}>Accommodations</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 300, color: "#e8d5b0", marginBottom: "12px" }}>
            Our <em style={{ color: "#c8a96e", fontStyle: "italic" }}>Rooms & Suites</em>
          </h1>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "12px", letterSpacing: "0.06em", color: "#5a5040" }}>
            {rooms.length} accommodations across 4 floors · Kasauli, Himachal Pradesh
          </p>
        </div>
      </div>

      {/* FILTERS BAR */}
      <div style={{ background: "#0d1117", borderBottom: "1px solid #1e1e14", padding: "0 6%", position: "sticky", top: "72px", zIndex: 90 }}>
        <div style={{ display: "flex", gap: "0", overflowX: "auto", paddingBottom: "1px" }}>
          {types.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.18em",
              textTransform: "uppercase", background: "none", border: "none", cursor: "pointer",
              padding: "18px 20px", whiteSpace: "nowrap",
              color: filter === t ? "#c8a96e" : "#5a5040",
              borderBottom: filter === t ? "2px solid #c8a96e" : "2px solid transparent",
              transition: "color 0.2s, border-color 0.2s"
            }}>
              {TYPE_COLORS[t]?.label || "All Rooms"}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "40px 6%" }}>
        {/* SEARCH & CONTROLS */}
        <div style={{ background: "#141b22", border: "1px solid #1e1e14", padding: "28px", marginBottom: "40px" }}>
          <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.25em", color: "#c8a96e", textTransform: "uppercase", marginBottom: "20px" }}>Search Availability</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", alignItems: "end" }}>
            <div>
              <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.2em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Check-in</label>
              <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} min={new Date().toISOString().split("T")[0]} />
            </div>
            <div>
              <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.2em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Check-out</label>
              <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} min={checkIn || new Date().toISOString().split("T")[0]} />
            </div>
            <div>
              <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.2em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Guests</label>
              <input type="number" min={1} max={12} value={guests} onChange={e => setGuests(+e.target.value)} />
            </div>
            <div>
              <label style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.2em", color: "#5a5040", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Sort by</label>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="guests">Max Guests</option>
              </select>
            </div>
          </div>

          {/* Booking mode toggle */}
          <div style={{ marginTop: "20px", display: "flex", gap: "0", width: "fit-content" }}>
            <button onClick={() => setBookMode("room")} style={{
              fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.15em",
              textTransform: "uppercase", padding: "10px 20px", border: "1px solid #2a2a1e",
              background: bookMode === "room" ? "#c8a96e" : "transparent",
              color: bookMode === "room" ? "#0d1117" : "#7a6a50", cursor: "pointer", transition: "all 0.2s"
            }}>Per Room</button>
            <button onClick={() => setBookMode("person")} style={{
              fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.15em",
              textTransform: "uppercase", padding: "10px 20px", border: "1px solid #2a2a1e",
              background: bookMode === "person" ? "#c8a96e" : "transparent",
              color: bookMode === "person" ? "#0d1117" : "#7a6a50", cursor: "pointer", transition: "all 0.2s"
            }}>Per Person</button>
          </div>

          {checkIn && checkOut && (
            <div style={{ marginTop: "12px", fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", color: "#c8a96e", letterSpacing: "0.08em" }}>
              {nights} night{nights !== 1 ? "s" : ""} · Prices shown for full stay
            </div>
          )}
        </div>

        {/* ROOMS GRID */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "80px", fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#5a5040" }}>
            LOADING ROOMS...
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {filtered.map((room) => {
              const tc = TYPE_COLORS[room.type] || TYPE_COLORS.standard;
              const totalPrice = getPrice(room);
              return (
                <div key={room._id} className="room-card fade-in" onClick={() => navigate("room-detail", room._id)}>
                  <div style={{ overflow: "hidden", position: "relative" }}>
                    {room.images?.[0] ? (
                      <img src={room.images[0]} alt={room.name} className="room-img" />
                    ) : (
                      <div className="room-img-placeholder">
                        <span>Floor {room.floor} · {room.name}</span>
                      </div>
                    )}
                    <div style={{
                      position: "absolute", top: "16px", left: "16px",
                      background: tc.bg, border: `1px solid ${tc.color}44`,
                      padding: "4px 12px",
                      fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px",
                      letterSpacing: "0.2em", textTransform: "uppercase", color: tc.color
                    }}>{tc.label}</div>
                    <div style={{
                      position: "absolute", top: "16px", right: "16px",
                      background: "rgba(13,17,23,0.8)",
                      padding: "4px 12px",
                      fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px",
                      letterSpacing: "0.15em", color: "#b8a882"
                    }}>Floor {room.floor}</div>
                  </div>
                  <div style={{ padding: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 400, color: "#e8d5b0" }}>{room.name}</h3>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#c8a96e" }}>₹{totalPrice.toLocaleString()}</div>
                        <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "9px", letterSpacing: "0.1em", color: "#5a5040", textTransform: "uppercase" }}>
                          {bookMode === "person" ? `${guests} guest${guests > 1 ? "s" : ""}` : "per room"} · {nights}N
                        </div>
                      </div>
                    </div>
                    <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", color: "#5a5040", lineHeight: 1.8, marginBottom: "16px", letterSpacing: "0.04em" }}>
                      {room.description?.slice(0, 80)}...
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
                      {room.amenities?.slice(0, 4).map(a => <span key={a} className="amenity-pill">{a}</span>)}
                    </div>
                    <div style={{ borderTop: "1px solid #1e1e14", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.06em", color: "#5a5040" }}>
                        Up to {room.maxGuests} guests
                      </div>
                      <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "10px", letterSpacing: "0.15em", color: "#c8a96e", textTransform: "uppercase" }}>
                        View Room →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filtered.length === 0 && !loading && (
          <div style={{ textAlign: "center", padding: "80px", border: "1px solid #1e1e14" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", color: "#3a3020", marginBottom: "12px" }}>No rooms found</div>
            <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: "#5a5040" }}>
              Try adjusting your filters or guest count
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
