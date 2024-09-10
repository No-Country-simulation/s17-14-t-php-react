import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Header from "../layout/header/Header";
import MentorSearchAndFilter from "../search/Search";

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
    </BrowserRouter>
  )
}
