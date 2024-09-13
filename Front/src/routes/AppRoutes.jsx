import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../home/Home";
import Header from "../layout/header/Header";
import MentorSearchAndFilter from "../search/Search";
import MentorInfoPage from "../mentor/MentorInfoPage";
import Footer from "../layout/footer/Footer";


export default function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/admin" ? <Header /> : <></>}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/search" element={<MentorSearchAndFilter />} />
        <Route path="/mentor/:id" element={<MentorInfoPage />} />
      </Routes>
      {location.pathname !== "/search" ? <Footer /> : <></>}
    </>
  );
}
