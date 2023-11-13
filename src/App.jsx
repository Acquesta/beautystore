import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Entrar from './pages/entrar'
import Cadastro from './pages/cadastro';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entrar" element={<Entrar />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
