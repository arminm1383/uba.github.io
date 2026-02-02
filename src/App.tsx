import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Board from './pages/Board'
import GetInvolved from './pages/GetInvolved'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/about" element={ <About /> }/>
            <Route path="/events" element={ <Events /> }/>
            <Route path="/board" element={ <Board /> }/>
            <Route path="/get-involved" element={ <GetInvolved /> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
