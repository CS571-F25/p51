import React from 'react'
import Badge from 'react-bootstrap/Badge'

export default function AccessibilityBadges({ captions, ad }) {
  return (
    <p className="mb-0">
      {captions ? <Badge bg="secondary" className="me-2">Captions</Badge> : null}
      {ad ? <Badge bg="secondary" className="me-2">Audio Description</Badge> : null}
      {!captions && !ad ? <span className="text-muted">Accessibility info not provided</span> : null}
    </p>
  )
}
