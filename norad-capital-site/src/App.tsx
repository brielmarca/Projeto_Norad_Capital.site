import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Solucoes from "./pages/Solucoes"
import HomeEquity from "./pages/HomeEquity"
import CreditoImobiliario from "./pages/CreditoImobiliario"
import Processo from "./pages/Processo"
import Contato from "./pages/Contato"
import Privacidade from "./pages/Privacidade"
import Termos from "./pages/Termos"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/home-equity" element={<HomeEquity />} />
        <Route path="/credito-imobiliario" element={<CreditoImobiliario />} />
        <Route path="/processo" element={<Processo />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
      </Route>
    </Routes>
  )
}
