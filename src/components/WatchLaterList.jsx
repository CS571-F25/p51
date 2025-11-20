import React from 'react'
import { Alert, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { movies } from '../data/movies.js'
import { useWatchlist } from '../context/WatchlistContext.jsx'
import { fmtDate } from '../utils/date.js'

export default function WatchLaterList() {
  const { items, remove } = useWatchlist()
  const saved = movies.filter(m => items.includes(m.id))

  if (!saved.length) {
    return (
      <Alert variant="secondary">
        No saved screenings yet. Browse the <Alert.Link as={Link} to="/">Home page</Alert.Link> to add some!
      </Alert>
    )
  }

  return (
    <ListGroup>
      {saved.map(m => (
        <ListGroup.Item key={m.id} className="d-flex justify-content-between align-items-start">
          <div>
            <div className="fw-semibold"><Link to={`/film/${m.id}`}>{m.title}</Link></div>
            <div className="small text-muted">{fmtDate(m.screeningDateTime)} · {m.venue.name}</div>
          </div>
          <div>
            <Button size="sm" variant="outline-danger" onClick={() => remove(m.id)}>Remove</Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
