import React from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../data/movies.js'
import { Row, Col, Button, Badge } from 'react-bootstrap'
import { useWatchlist } from '../context/WatchlistContext.jsx'
import { fmtDate } from '../utils/date.js'

export default function Details() {
  const { id } = useParams()
  const movie = movies.find(m => m.id === id)
  const { add, remove, isSaved } = useWatchlist()

  if (!movie) return <p>Film not found.</p>

  const saved = isSaved(movie.id)

  return (
    <Row className="g-4">
      <Col md={4}>
        <img src={movie.poster} alt={`${movie.title} poster`} className="img-fluid rounded" />
      </Col>
      <Col md={8}>
        <h1 className="h3">{movie.title}</h1>
        <p className="mb-1"><strong>Director:</strong> {movie.director}</p>
        <p className="mb-1"><strong>Runtime:</strong> {movie.runtime} min</p>
        <p className="mb-1"><strong>Rating:</strong> {movie.rating}</p>
        <p className="mb-1"><strong>When:</strong> {fmtDate(movie.screeningDateTime)}</p>
        <p className="mb-3"><strong>Venue:</strong> {movie.venue.name} · <a href={movie.venue.mapUrl} target="_blank" rel="noreferrer">View on Map</a></p>
        <div className="mb-3" aria-label="Accessibility notes">
          {movie.accessibility.captions && <Badge bg="secondary" className="me-2">Captions</Badge>}
          {movie.accessibility.ad && <Badge bg="secondary" className="me-2">Audio Description</Badge>}
        </div>
        <p>{movie.synopsis}</p>
        <div className="d-flex gap-2 mt-3">
          {!saved ? (
            <Button variant="primary" onClick={() => add(movie.id)}>Add to Watchlist</Button>
          ) : (
            <Button variant="outline-danger" onClick={() => remove(movie.id)}>Remove from Watchlist</Button>
          )}
        </div>
      </Col>
    </Row>
  )
}
