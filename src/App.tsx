import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import OurService from "./components/services/OurService";
import SupportiveApart from "./components/services/SupportiveApart";
// import GroupHome from "./components/services/GroupHome";
import Stabilization from "./components/services/Stabilization";
import AssistedLiving from "./components/services/AssistedLiving";
// import PositiveSupport from "./components/services/PositiveSupport";
import Location from "./components/Location";
import ReferralApp from "./components/ReferralApp";
// import Career from "./components/careers/Career";
// import USPosition from "./components/careers/USPosition";
// import International from "./components/careers/International";
import GetInTouch from "./components/GetInTouch";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/about" Component={Landing} />
        <Route path="/our-services" Component={OurService} />
        <Route
          path="/ICS-Integrated-Community-Support"
          Component={SupportiveApart}
        />
        {/* <Route path="/copy-of-supportive-apartments-1" Component={GroupHome} /> */}
        <Route
          path="/Housing-Stabilization-Services."
          Component={Stabilization}
        />
        <Route
          path="/copy-of-housing-stabilization-services-1"
          Component={AssistedLiving}
        />
        {/* <Route
          path="/copy-of-housing-stabilization-services"
          Component={PositiveSupport}
        /> */}
        <Route path="/locations" Component={Location} />
        <Route path="/referrals" Component={ReferralApp} />
        {/* <Route path="/careers" Component={Career} />
        <Route
        path="/copy-of-international-staffing-positions"
        Component={USPosition}
        />
      <Route path="/copy-of-careers" Component={International} /> */}
        <Route path="/contact-us" Component={GetInTouch} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
