import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import PrimaryNav from './components/PrimaryNav.jsx'
import Home from './pages/Home.jsx'
import FilmDetails from './pages/FilmDetails.jsx'
import WatchLater from './pages/WatchLater.jsx'
import About from './pages/About.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <HashRouter>
      <PrimaryNav />
      <main role="main" className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<FilmDetails />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Container>
      </main>
    </HashRouter>
  )
}
