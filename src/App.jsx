import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
