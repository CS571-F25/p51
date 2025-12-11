import React from 'react'

export default function ScreeningMeta({ director, runtime, mpaa }) {
  return (
    <ul className="list-unstyled mb-2">
      <li><strong>Director:</strong> {director || '—'}</li>
      <li><strong>Runtime:</strong> {runtime} min</li>
      <li><strong>Rating:</strong> {mpaa}</li>
    </ul>
  )
}
