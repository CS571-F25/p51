import React from 'react'
import Alert from 'react-bootstrap/Alert'
import MovieGrid from '../components/MovieGrid.jsx'
import { films } from '../data/films.js'
import { getWatchlist } from '../utils/storage.js'

export default function WatchLater() {
  const saved = new Set(getWatchlist())
  const items = films.filter(f => saved.has(f.id))
  return (
    <section>
      <h1 className="mb-3">Watch Later</h1>
      {items.length ? <MovieGrid films={items}/> :
        <Alert variant="info">No saved screenings yet. Use “Watch Later” on a film card to save it here.</Alert>}
    </section>
  )
}
