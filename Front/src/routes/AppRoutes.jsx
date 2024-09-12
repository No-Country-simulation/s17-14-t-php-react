import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
          {
      location.pathname !== "/admin" ? (
        <Header />
      ) : (
        <></>
      )}
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/search" element={<MentorSearchAndFilter />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
