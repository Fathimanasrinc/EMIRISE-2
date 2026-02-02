import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import BizVanguard from './pages/BizVanguard';
import Ideathon from './pages/Ideathon';
import EscapeRoom from './pages/EscapeRoom';
import BestManager from './pages/BestManager';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biz-vanguard" element={<BizVanguard />} />
      <Route path="/ideathon" element={<Ideathon />} />
      <Route path="/escape-room" element={<EscapeRoom />} />
      <Route path="/best-manager" element={<BestManager />} />
    </Routes>
  );
}

export default App;
