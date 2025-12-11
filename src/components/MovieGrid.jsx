import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from './MovieCard.jsx'

export default function MovieGrid({ films }) {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-3">
      {films.map(f => <Col key={f.id}><MovieCard film={f} /></Col>)}
    </Row>
  )
}
