import React, { useMemo, useState } from 'react'
import FiltersBar from '../components/FiltersBar.jsx'
import MovieGrid from '../components/MovieGrid.jsx'
import { films } from '../data/films.js'
import { getAllRatings, getAllWatched } from '../utils/storage.js'

export default function Home() {
  const [query, setQuery] = useState('')
  const [venue, setVenue] = useState('')
  const [watched, setWatched] = useState('any') // any | watched | unwatched
  const [minRating, setMinRating] = useState(0)

  const items = useMemo(() => {
    const ratings = getAllRatings()
    const watchedMap = getAllWatched()
    return films.filter(f => {
      const matchesQuery = [f.title, f.director].join(' ').toLowerCase().includes(query.toLowerCase())
      const matchesVenue = !venue || f.venue === venue
      const r = Number(ratings[f.id] || 0)
      const matchesRating = r >= minRating
      const isW = !!watchedMap[f.id]
      const matchesWatched =
        watched === 'any' ? true :
        watched === 'watched' ? isW :
        !isW
      return matchesQuery && matchesVenue && matchesRating && matchesWatched
    })
  }, [query, venue, watched, minRating])

  return (
    <section>
      <h1 className="mb-3">Free Screenings</h1>
      <FiltersBar
        query={query} onQuery={setQuery}
        venue={venue} onVenue={setVenue}
        watched={watched} onWatched={setWatched}
        minRating={minRating} onMinRating={setMinRating}
      />
      <MovieGrid films={items} />
    </section>
  )
}
