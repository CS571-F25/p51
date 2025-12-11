import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import WatchlistButton from './WatchlistButton.jsx'
import WatchToggle from './WatchToggle.jsx'
import RatingStars from './RatingStars.jsx'
import VenueBadge from './VenueBadge.jsx'
import AccessibilityBadges from './AccessibilityBadges.jsx'

export default function MovieCard({ film }) {
  return (
    <Card className="h-100">
      <img src={film.poster} className="card-img-top" alt={`${film.title} (${film.year}) poster`} />
      <Card.Body>
        <Card.Title as="h3" className="h5">{film.title} <small className="text-muted">({film.year})</small></Card.Title>
        <VenueBadge venueId={film.venue} />
        <p className="mb-1"><strong>When:</strong> {film.date} at {film.time}</p>
        <AccessibilityBadges captions={film.captions} ad={film.ad} />
        <div className="d-flex gap-2 align-items-center mt-2" aria-label="Quick actions">
          <WatchlistButton id={film.id} />
          <WatchToggle id={film.id} />
          <Button as={Link} to={`/film/${film.id}`} variant="outline-secondary">Details</Button>
        </div>
      </Card.Body>
      <Card.Footer className="bg-body">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-semibold">Rate</span>
          <RatingStars filmId={film.id} />
        </div>
      </Card.Footer>
    </Card>
  )
}
