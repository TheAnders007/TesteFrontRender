import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (

        <Routes>
            <Route path="/" element={<h1> Home do Mural </h1>} />
            <Route path="/cadastro" element={<h1> Página de Cadastro </h1>} />
        </Routes>

  )
}

export default App
