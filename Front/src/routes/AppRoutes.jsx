import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "../home/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}
