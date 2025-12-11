import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { toggleWatchlist, getWatchlist } from '../utils/storage.js'

export default function WatchlistButton({ id }) {
  const [on, setOn] = useState(false)
  useEffect(()=>{ setOn(getWatchlist().includes(id)) }, [id])
  const click = () => setOn(toggleWatchlist(id))
  return (
    <Button variant={on ? 'success' : 'primary'} onClick={click} aria-pressed={on}
      aria-label={on ? 'Remove from Watch Later' : 'Add to Watch Later'}>
      {on ? 'Saved' : 'Watch Later'}
    </Button>
  )
}
