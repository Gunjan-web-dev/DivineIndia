import Home from "./Home";
import TempleDetails from "./TempleDetails";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/state/:id" element={<TempleDetails />} />
      </Routes>
    </div>
  );
}
