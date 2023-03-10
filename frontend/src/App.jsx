import { Route, Routes } from "react-router-dom";
import BossCard from "./pages/BossCard";
import Error from "./pages/Error";
import Thanks from "./pages/Thanks";
import BossList from "./pages/BossList";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boss" element={<BossList />} />
        <Route path="/boss/:id" element={<BossCard />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
