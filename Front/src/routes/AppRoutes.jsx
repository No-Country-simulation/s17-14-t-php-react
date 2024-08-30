import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}
