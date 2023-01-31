import { Route, Routes } from "react-router-dom";
import BossDetails from "./pages/BossDetails";
import Error from "./pages/Error";
import Thanks from "./pages/Thanks";
import BossList from "./pages/BossList";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boss" element={<BossList />} />
        <Route path="/boss/:id" element={<BossDetails />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
