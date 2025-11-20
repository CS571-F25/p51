export function fmtDate(dt) {
  const d = new Date(dt)
  return d.toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })
}
