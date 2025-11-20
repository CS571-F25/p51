import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { WatchlistProvider } from './context/WatchlistContext.jsx'
import PrimaryNav from './components/PrimaryNav.jsx'
import Home from './pages/Home.jsx'
import Details from './pages/Details.jsx'
import WatchLater from './pages/WatchLater.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <HashRouter>
      <WatchlistProvider>
        <PrimaryNav />
        <main className="py-4">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/film/:id" element={<Details />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
      </WatchlistProvider>
    </HashRouter>
  )
}
