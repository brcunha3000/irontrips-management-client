import "./App.css";
import {Routes, Route, useLocation} from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
/*import IsAnon from "./Components/IsAnon";
import IsPrivate from "./Components/IsPrivate";*/
import ContactsPage from "./Pages/ContactsPage";
import CommunityPage from "./Pages/CommunityPage";
import GalleryPage from "./Pages/GalleryPage";
import TheGlobePage from "./Pages/TheGlobePage";
import CountryDetailsPage from "./Pages/CountryDetailPage"
import UserProfilePage from "./Pages/UserProfilePage"
import NavBar from "./Components/NavBar";
import { AuthProviderWrapper } from "./Context/auth.context";


function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div>
    <AuthProviderWrapper>
        {!isLandingPage && <NavBar />}
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/auth/signup" element={<SignupPage/>}/>
          <Route path="/auth/login" element={<LoginPage/>}/>
          <Route path="/user-profile" element={<UserProfilePage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>  
          <Route path="/community" element={<CommunityPage/>}/> 
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/theglobe" element={<TheGlobePage/>}/>
          <Route path="/theglobe/:countryCode" element={<CountryDetailsPage/>}/>
        </Routes>
    </AuthProviderWrapper>
    </div>
  )
}

export default App
