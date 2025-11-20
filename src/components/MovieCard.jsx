import React from 'react'
import { Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { fmtDate } from '../utils/date.js'

export default function MovieCard({ movie }) {
  const { id, title, poster, screeningDateTime, venue, accessibility, rating } = movie
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={poster} alt={`${title} poster`} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h6 mb-1">{title}</Card.Title>
        <div className="mb-2 small text-muted">{fmtDate(screeningDateTime)}</div>
        <div className="mb-2 small">
          <strong>Venue:</strong> {venue.name} · <a href={venue.mapUrl} target="_blank" rel="noreferrer">Map</a>
        </div>
        <div className="mb-3 small" aria-label="Accessibility notes">
          {accessibility.captions && <Badge bg="secondary" className="me-1">Captions</Badge>}
          {accessibility.ad && <Badge bg="secondary" className="me-1">Audio Description</Badge>}
          <Badge bg="light" text="dark">{rating}</Badge>
        </div>
        <Button as={Link} to={`/film/${id}`} variant="primary" className="mt-auto">Details</Button>
      </Card.Body>
    </Card>
  )
}
