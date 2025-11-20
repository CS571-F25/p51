import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

export default function FiltersBar({ query, setQuery, filters, setFilters, venues, genres }) {
  const onChange = (key) => (e) => setFilters(f => ({ ...f, [key]: e.target.value }))

  return (
    <Form className="mb-3" role="search" aria-label="Quick Search and Filters">
      <Row className="g-2">
        <Col md={4}>
          <Form.Control
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title or director"
            aria-label="Search by title or director"
          />
        </Col>
        <Col xs={6} md={2}>
          <Form.Control type="date" value={filters.start} onChange={onChange('start')} aria-label="Start date" />
        </Col>
        <Col xs={6} md={2}>
          <Form.Control type="date" value={filters.end} onChange={onChange('end')} aria-label="End date" />
        </Col>
        <Col md={2}>
          <Form.Select value={filters.venue} onChange={onChange('venue')} aria-label="Filter by venue">
            <option value="">All Venues</option>
            {venues.map(v => <option key={v} value={v}>{v}</option>)}
          </Form.Select>
        </Col>
        <Col md={1}>
          <Form.Select value={filters.genre} onChange={onChange('genre')} aria-label="Filter by genre">
            <option value="">All</option>
            {genres.map(g => <option key={g} value={g}>{g}</option>)}
          </Form.Select>
        </Col>
        <Col md={1}>
          <Form.Select value={filters.rating} onChange={onChange('rating')} aria-label="Filter by rating">
            <option value="">Any</option>
            {['G','PG','PG-13','R','NC-17'].map(r => <option key={r} value={r}>{r}</option>)}
          </Form.Select>
        </Col>
      </Row>
    </Form>
  )
}
