import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Background3D from "./components/Background3D";
import Home from "./pages/Home";
import ExploreIndex from "./pages/Explore/Index";
import Announcements from "./pages/Explore/Announcements";
import BiodiversitySites from "./pages/Explore/BiodiversitySites";
import EnvironmentalClubs from "./pages/Explore/EnvironmentalClubs";
import WildlifePhotographers from "./pages/Explore/WildlifePhotographers";
import FundingOpportunities from "./pages/Explore/Opportunities";
import LatestNews from "./pages/Explore/LatestNews";

import PracticeIndex from "./pages/Practice/Index";
import Stakeholders from "./pages/Practice/Stakeholders";
import Projects from "./pages/Practice/Projects";

import PoliciesIndex from "./pages/Policies/Index";
import NBSAPs from "./pages/Policies/NBSAPs";
import OtherStrategies from "./pages/Policies/OtherStrategies";
import NationalReports from "./pages/Policies/NationalReports";
import NationalLegislation from "./pages/Policies/NationalLegislation";
import InternationalConventions from "./pages/Policies/InternationalConventions";

import ScienceIndex from "./pages/Science/Index";
import BiodiversityOverview from "./pages/Science/BiodiversityOverview";
import BiodiversityConservation from "./pages/Science/BiodiversityConservation";
import Ecosystems from "./pages/Science/Ecosystems";
import Publications from "./pages/Science/Publications";

import AboutIndex from "./pages/About/Index";
import HaramayaUniversity from "./pages/About/HaramayaUniversity";
import EnvironmentalLawPolicyCenter from "./pages/About/EnvironmentalLawPolicyCenter";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import { ClubProvider } from "./context/ClubContext";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <ClubProvider>
        <Router>
          <Background3D />
          <div className="min-h-screen overflow-x-hidden relative">
            <Navbar />
            <LanguageSwitcher />
            <main className="mx-auto max-w-6xl px-4 pb-16">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/explore" element={<ExploreIndex />} />
                <Route path="/explore/announcements" element={<Announcements />} />
                <Route path="/explore/biodiversity-sites" element={<BiodiversitySites />} />
                <Route path="/explore/environmental-clubs" element={<EnvironmentalClubs />} />
                <Route path="/explore/wildlife-photographers" element={<WildlifePhotographers />} />
                <Route path="/explore/funding-opportunities" element={<FundingOpportunities />} />
                <Route path="/explore/latest-news" element={<LatestNews />} />

                <Route path="/practice" element={<PracticeIndex />} />
                <Route path="/practice/stakeholders" element={<Stakeholders />} />
                <Route path="/practice/projects" element={<Projects />} />

                <Route path="/policies" element={<PoliciesIndex />} />
                <Route path="/policies/nbsaps" element={<NBSAPs />} />
                <Route path="/policies/other-strategies" element={<OtherStrategies />} />
                <Route path="/policies/national-reports" element={<NationalReports />} />
                <Route path="/policies/national-legislation" element={<NationalLegislation />} />
                <Route path="/policies/international-conventions" element={<InternationalConventions />} />

                <Route path="/science" element={<ScienceIndex />} />
                <Route path="/science/biodiversity-overview" element={<BiodiversityOverview />} />
                <Route path="/science/biodiversity-conservation" element={<BiodiversityConservation />} />
                <Route path="/science/ecosystems" element={<Ecosystems />} />
                <Route path="/science/publications" element={<Publications />} />

                <Route path="/about" element={<AboutIndex />} />
                <Route path="/about/haramaya-university" element={<HaramayaUniversity />} />
                <Route path="/about/environmental-law-policy-center" element={<EnvironmentalLawPolicyCenter />} />

                <Route path="/gallery" element={<Gallery />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/staff" element={<StaffDashboard />} />
                <Route path="/dashboard" element={<MemberDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ClubProvider>
    </LanguageProvider>
  );
};

export default App;
