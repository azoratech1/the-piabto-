import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#14110d] py-[160px] px-[6%]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-20">

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1800"
          alt="Mountain"
          className="w-full h-full object-cover"
        />

      </div>

      {/* GLOW */}
      <div className="absolute top-[-250px] left-[-150px] w-[700px] h-[700px] rounded-full bg-[#b8915615] blur-3xl" />

      {/* CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[1000px] mx-auto text-center"
      >

        {/* LABEL */}
        <div className="inline-flex items-center px-5 py-3 rounded-full border border-[#b8915620] bg-white/10 backdrop-blur-xl text-[10px] tracking-[0.28em] uppercase text-[#d4c6af] mb-8">
          Reserve Your Stay
        </div>

        {/* HEADING */}
        <h2
          
          className="text-[clamp(52px,7vw,110px)] leading-[0.95] font-light text-[#f5e7ca]"
        >
          Experience the
          <br />

          <span className="italic text-[#d4af6d]">
            silence of the hills
          </span>

        </h2>

        {/* TEXT */}
        <p className="mt-10 max-w-[760px] mx-auto text-[13px] leading-[2.1] tracking-[0.08em] text-[#c7b79d]">
          Escape the noise of the city and
          immerse yourself in luxury mountain
          living surrounded by pine forests,
          clouds and panoramic Himalayan
          landscapes.
        </p>

        {/* BUTTONS */}
        <div className="mt-14 flex flex-wrap justify-center gap-5">

          {/* BOOK */}
          <button className="group relative overflow-hidden h-[58px] px-10 rounded-full bg-[#f5e7ca] text-[#1f1a14] text-[10px] tracking-[0.24em] uppercase transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(255,255,255,0.12)]">

            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.5)_40%,transparent_60%)] -translate-x-[140%] transition-transform duration-[1800ms] group-hover:translate-x-[140%]" />

            <span className="relative z-10">
              Book Your Stay
            </span>

          </button>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="group h-[58px] px-10 rounded-full border border-[#d4af6d30] bg-white/10 backdrop-blur-xl flex items-center gap-4 text-[10px] tracking-[0.24em] uppercase text-[#f5e7ca] transition-all duration-500 hover:-translate-y-1 hover:bg-white/15"
          >

            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            WhatsApp Enquiry

          </a>

        </div>

      </motion.div>

    </section>
  );
};

export default CTASection;