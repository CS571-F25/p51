import React from 'react'
import { useParams } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import WatchToggle from '../components/WatchToggle.jsx'
import WatchlistButton from '../components/WatchlistButton.jsx'
import RatingStars from '../components/RatingStars.jsx'
import VenueBadge from '../components/VenueBadge.jsx'
import AccessibilityBadges from '../components/AccessibilityBadges.jsx'
import ScreeningMeta from '../components/ScreeningMeta.jsx'
import { films, VENUES } from '../data/films.js'

export default function FilmDetails() {
  const { id } = useParams()
  const film = films.find(f => f.id === id)

  if (!film) return <Alert variant="warning">Film not found.</Alert>

  const venue = film.venue === 'marquee' ? VENUES.MARQUEE : VENUES.CINEMATHEQUE

  return (
    <article>
      <h1 className="mb-3">{film.title} <small className="text-muted">({film.year})</small></h1>
      <div className="row g-3">
        <div className="col-md-4">
          <img src={film.poster} className="img-fluid rounded" alt={`${film.title} (${film.year}) poster`} />
        </div>
        <div className="col-md-8">
          <VenueBadge venueId={film.venue} />
          <p className="mb-1"><strong>Address:</strong> {venue.address} — <a href={venue.maps} target="_blank" rel="noreferrer">Map</a></p>
          <p className="mb-1"><strong>Screening:</strong> {film.date} at {film.time}</p>
          <ScreeningMeta director={film.director} runtime={film.runtime} mpaa={film.rating} />
          <AccessibilityBadges captions={film.captions} ad={film.ad} />

          <p className="mt-3">{film.synopsis}</p>

          <div className="d-flex gap-2 align-items-center my-3">
            <WatchlistButton id={film.id} />
            <WatchToggle id={film.id} />
            <Button href="#/" variant="outline-secondary">Back</Button>
          </div>

          <div className="d-flex align-items-center justify-content-between border rounded p-2" aria-label="Your rating">
            <strong>Rate</strong>
            <RatingStars filmId={film.id} />
          </div>
        </div>
      </div>
    </article>
  )
}
