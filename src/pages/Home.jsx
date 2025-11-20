import React, { useMemo, useState } from 'react'
import { movies as allMovies } from '../data/movies.js'
import FiltersBar from '../components/FiltersBar.jsx'
import MovieGrid from '../components/MovieGrid.jsx'

export default function Home() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ start: '', end: '', venue: '', genre: '', rating: '' })

  const venues = useMemo(() => [...new Set(allMovies.map(m => m.venue.name))], [])
  const genres = useMemo(() => [...new Set(allMovies.map(m => m.genre))], [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allMovies.filter(m => {
      const matchesQ = q === '' || m.title.toLowerCase().includes(q) || m.director.toLowerCase().includes(q)
      const t = new Date(m.screeningDateTime)
      const okStart = !filters.start || t >= new Date(filters.start)
      const okEnd = !filters.end || t <= new Date(filters.end + 'T23:59:59')
      const okVenue = !filters.venue || m.venue.name === filters.venue
      const okGenre = !filters.genre || m.genre === filters.genre
      const okRating = !filters.rating || m.rating === filters.rating
      return matchesQ && okStart && okEnd && okVenue && okGenre && okRating
    })
  }, [query, filters])

  return (
    <>
      <h1 className="h3 mb-3">All Free Screenings</h1>
      <FiltersBar
        query={query}
        setQuery={setQuery}
        filters={filters}
        setFilters={setFilters}
        venues={venues}
        genres={genres}
      />
      <MovieGrid movies={filtered} />
    </>
  )
}
