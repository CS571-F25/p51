// Demo data; replace with real campus feeds later.
export const movies = [
  {
    id: 'cff-001',
    title: 'Moonrise over Bascom',
    director: 'A. Filmmaker',
    runtime: 104,
    rating: 'PG-13',
    genre: 'Drama',
    synopsis: 'A small-town story about community, change, and the magic of campus at night.',
    poster: 'posters/placeholder.jpg',
    screeningDateTime: '2025-11-30T19:00:00-06:00',
    venue: { name: 'Cinematheque (Vilas Hall)', mapUrl: 'https://maps.google.com/?q=Vilas+Hall' },
    accessibility: { captions: true, ad: false }
  },
  {
    id: 'cff-002',
    title: 'Union by the Lake',
    director: 'B. Director',
    runtime: 92,
    rating: 'PG',
    genre: 'Documentary',
    synopsis: 'A reflective, student-made documentary on gatherings and traditions by the water.',
    poster: 'posters/placeholder.jpg',
    screeningDateTime: '2025-12-02T20:30:00-06:00',
    venue: { name: 'WUD Film (Marquee Theater)', mapUrl: 'https://maps.google.com/?q=Marquee+Theater' },
    accessibility: { captions: false, ad: true }
  },
  {
    id: 'cff-003',
    title: 'Science on Screen: Signals',
    director: 'C. Researcher',
    runtime: 118,
    rating: 'R',
    genre: 'Sci-Fi',
    synopsis: 'A gripping look at communication and consequence when a strange signal interrupts campus life.',
    poster: 'posters/placeholder.jpg',
    screeningDateTime: '2025-12-05T18:00:00-06:00',
    venue: { name: 'Chemistry Building, Room 121', mapUrl: 'https://maps.google.com/?q=Chemistry+121' },
    accessibility: { captions: true, ad: true }
  }
]
