import React from 'react'
import { Row, Col } from 'react-bootstrap'
import MovieCard from './MovieCard.jsx'

export default function MovieGrid({ movies }) {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-3">
      {movies.map(m => (
        <Col key={m.id}><MovieCard movie={m} /></Col>
      ))}
    </Row>
  )
}
