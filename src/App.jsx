import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";       
import Feedbacks from "./pages/Feedbacks";
import Sellers from "./pages/Sellers";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import FAQ from "./pages/FAQ";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      {/* {authenticated ? ( */}
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Sellers />} />
            <Route path="users" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
            <Route path="feedbacks" element={<Feedbacks />} />
            <Route path="settings" element={<Settings />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      {/* ) : (
        <Navigate to="/login" replace />
      )} */}
      <Routes>
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
      </Routes>
    </>
  );
}

export default App;
