const KEY = {
  WATCHLIST: 'cff_watchlist',
  WATCHED: 'cff_watched',
  RATINGS: 'cff_ratings'
}

const read = (k, def) => {
  try { return JSON.parse(localStorage.getItem(k)) ?? def } catch { return def }
}
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v))

export const getWatchlist = () => Object.keys(read(KEY.WATCHLIST, {}))
export const toggleWatchlist = (id) => {
  const m = read(KEY.WATCHLIST, {})
  m[id] ? delete m[id] : (m[id] = true)
  write(KEY.WATCHLIST, m)
  return !!m[id]
}

export const isWatched = (id) => !!read(KEY.WATCHED, {})[id]
export const setWatched = (id, val) => {
  const m = read(KEY.WATCHED, {}); m[id] = !!val; write(KEY.WATCHED, m)
}

export const getRating = (id) => Number(read(KEY.RATINGS, {})[id] || 0)
export const setRating = (id, score) => {
  const m = read(KEY.RATINGS, {}); m[id] = Number(score); write(KEY.RATINGS, m)
}

export const getAllWatched = () => read(KEY.WATCHED, {})
export const getAllRatings = () => read(KEY.RATINGS, {})
