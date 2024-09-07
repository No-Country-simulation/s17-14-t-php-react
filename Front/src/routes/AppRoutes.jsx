import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Header from "../layout/header/Header";

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
    </Routes>
    </BrowserRouter>
  )
}
