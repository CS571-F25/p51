import React, { useEffect, useId, useState } from 'react'
import { getRating, setRating } from '../utils/storage.js'

export default function RatingStars({ filmId }) {
  const [score, setScore] = useState(0)
  const group = useId()

  useEffect(() => { setScore(getRating(filmId)) }, [filmId])

  const setAndSave = (n) => { setRating(filmId, n); setScore(n) }

  return (
    <fieldset className="m-0 border-0 p-0" aria-labelledby={`${group}-label`}>
      <legend id={`${group}-label`} className="visually-hidden">Rate</legend>
      {[1, 2, 3, 4, 5].map(n => (
        <span key={n} className="me-1">
          <input
            className="visually-hidden"
            type="radio"
            id={`${group}-${n}`}
            name={group}
            value={n}
            checked={score === n}
            // normal selection (keyboard & mouse when changing value)
            onChange={() => score !== n && setAndSave(n)}
            // if the same star is clicked again, clear to 0
            onClick={() => score === n && setAndSave(0)}
          />
          <label
            htmlFor={`${group}-${n}`}
            style={{ cursor: 'pointer' }}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
          >
            {n <= score ? '★' : '☆'}
          </label>
        </span>
      ))}
    </fieldset>
  )
}
