import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "../components/common/Layout";

import Home from "../pages/Home";
import RoomsPage from "../pages/Rooms";
import ContactPage from "../pages/Contact";
import RoomDetailPage from "../pages/RoomDetailPage";
import GalleryPage from "../pages/GalleryPage";
import BookingStrip from "../components/common/BookingStrip";
const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />
 <Route
            path="/rooms"
            element={<RoomsPage />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
  path="/rooms/:id"
  element={<RoomDetailPage />}
/>
  <Route
  path="/gallery"
  element={<GalleryPage />}
/>
        </Routes>

      </Layout>

    </BrowserRouter>
  );
};

export default AppRoutes;