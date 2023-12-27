import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing/>}/>
          <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
