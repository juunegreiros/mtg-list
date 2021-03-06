import { Routes, Route } from "react-router-dom";

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
