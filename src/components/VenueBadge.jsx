import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { VENUES } from '../data/films.js'

export default function VenueBadge({ venueId }) {
  const v = venueId === 'marquee' ? VENUES.MARQUEE : VENUES.CINEMATHEQUE
  return (
    <p className="mb-1">
      <Badge bg="primary" className="me-2">{v.name}</Badge>
      <a href={v.maps} target="_blank" rel="noreferrer">Map</a>
    </p>
  )
}
