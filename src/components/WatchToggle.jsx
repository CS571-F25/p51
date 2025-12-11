import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { isWatched, setWatched } from '../utils/storage.js'

export default function WatchToggle({ id }) {
  const [watched, setW] = useState(false)
  useEffect(()=>{ setW(isWatched(id)) }, [id])
  const toggle = () => { setWatched(id, !watched); setW(!watched) }
  return (
    <Button variant={watched ? 'outline-success' : 'outline-secondary'} onClick={toggle}
      aria-pressed={watched} aria-label={watched ? 'Mark as not watched' : 'Mark as watched'}>
      {watched ? 'Watched' : 'Mark Watched'}
    </Button>
  )
}
