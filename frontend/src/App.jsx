import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BizVanguard from "./pages/BizVanguard";
import EscapeGotham from "./pages/EscapeGotham";
import ArkhamToAlpha from "./pages/ArkhamToAlpha";
import BatBoss from "./pages/BatBoss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events/bizvanguard" element={<BizVanguard />} />
      <Route path="/events/escape-gotham" element={<EscapeGotham />} />
      <Route path="/events/arkham-to-alpha" element={<ArkhamToAlpha />} />
      <Route path="/events/batboss" element={<BatBoss />} />
    </Routes>
  );
}

export default App;
