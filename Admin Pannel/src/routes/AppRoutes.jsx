import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import Rooms from "../pages/Rooms";
import AddRoom from "../pages/AddRoom";
import EditRoom from "../pages/EditRoom";

import Bookings from "../pages/Bookings";

import Gallery from "../pages/Gallery";

import Content from "../pages/Content";
import EditHomepage from "../pages/EditHomepage";
import AddFloor from "../pages/AddFloor";
import EditFloor from "../pages/EditFloor";
import Floors from "../pages/Floors";
const AppRoutes = () => {
  const token = localStorage.getItem("token");

  // PROTECTED ROUTE
  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ROOMS */}
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rooms/add"
          element={
            <ProtectedRoute>
              <AddRoom />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rooms/edit/:id"
          element={
            <ProtectedRoute>
              <EditRoom />
            </ProtectedRoute>
          }
        />
<Route
  path="/floors"
  element={
    <ProtectedRoute>
      <Floors />
    </ProtectedRoute>
  }
/>

<Route
  path="/floors/add"
  element={
    <ProtectedRoute>
      <AddFloor />
    </ProtectedRoute>
  }
/>

<Route
  path="/floors/edit/:id"
  element={
    <ProtectedRoute>
      <EditFloor />
    </ProtectedRoute>
  }
/>
        {/* BOOKINGS */}
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />

        {/* GALLERY */}
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />

        {/* CONTENT */}
        <Route
          path="/content"
          element={
            <ProtectedRoute>
              <Content />
            </ProtectedRoute>
          }
        />
<Route
          path="/edithome"
          element={
            <ProtectedRoute>
              <EditHomepage />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;