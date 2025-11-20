import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const WatchlistCtx = createContext()
const STORAGE_KEY = 'cff_watchlist_v1'

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [] } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist))
  }, [watchlist])

  const api = useMemo(() => ({
    items: watchlist,
    isSaved: id => watchlist.includes(id),
    add: id => setWatchlist(w => (w.includes(id) ? w : [...w, id])),
    remove: id => setWatchlist(w => w.filter(x => x !== id)),
    clear: () => setWatchlist([])
  }), [watchlist])

  return <WatchlistCtx.Provider value={api}>{children}</WatchlistCtx.Provider>
}

export const useWatchlist = () => useContext(WatchlistCtx)
