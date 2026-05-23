import Navbar from "./Navbar";

import Footer from "./Footer";
import FloatingContactButtons from "./FloatingButton";
import BookingStrip from "./BookingStrip";
const Layout = ({ children }) => {
  return (
    <>

      {/* GLOBAL NAVBAR */}
      <Navbar />
 
      {/* PAGE CONTENT */}
      <main>
        {children}
      </main>
     
    <FloatingContactButtons />
    
      {/* GLOBAL FOOTER */}
      <Footer />

    </>
  );
};

export default Layout;