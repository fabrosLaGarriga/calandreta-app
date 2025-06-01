import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './index.css'

// Pages simples pour le moment
function Admin() {
  return <h1>Espace Admin – Publication des infos</h1>
}

function Familles() {
  return <h1>Espace Familles – Actualités de l’école</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/familles" element={<Familles />} />
        {/* On peut ajouter d'autres routes plus tard */}
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
À l'instant

