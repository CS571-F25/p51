import React, { useId } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function FiltersBar({ query, onQuery, venue, onVenue, watched, onWatched, minRating, onMinRating }) {
  const qId = useId(), vId = useId(), wId = useId(), rId = useId()
  return (
    <Form className="mb-3" role="search" aria-label="Filter screenings">
      <Row className="gy-2">
        <Col md>
          <Form.Label htmlFor={qId} className="fw-semibold">Search (title/director)</Form.Label>
          <Form.Control id={qId} value={query} onChange={e=>onQuery(e.target.value)} placeholder="e.g., Titanic" />
        </Col>
        <Col sm={6} md={3}>
          <Form.Label htmlFor={vId} className="fw-semibold">Venue</Form.Label>
          <Form.Select id={vId} value={venue} onChange={e=>onVenue(e.target.value)}>
            <option value="">All venues</option>
            <option value="marquee">WUD Film — The Marquee</option>
            <option value="cinematheque">UW–Madison Cinematheque</option>
          </Form.Select>
        </Col>
        <Col sm={6} md={3}>
          <Form.Label htmlFor={wId} className="fw-semibold">Watched</Form.Label>
          <Form.Select id={wId} value={watched} onChange={e=>onWatched(e.target.value)}>
            <option value="any">Any</option>
            <option value="watched">Watched only</option>
            <option value="unwatched">Unwatched only</option>
          </Form.Select>
        </Col>
        <Col sm={6} md={3}>
          <Form.Label htmlFor={rId} className="fw-semibold">Min. rating</Form.Label>
          <Form.Select id={rId} value={minRating} onChange={e=>onMinRating(Number(e.target.value))}>
            <option value={0}>Any</option>
            {[1,2,3,4,5].map(n=> <option key={n} value={n}>{n}★ & up</option>)}
          </Form.Select>
        </Col>
      </Row>
    </Form>
  )
}
