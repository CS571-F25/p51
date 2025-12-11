// Synopses paraphrased from Letterboxd pages noted in your check-in writeup.
export const VENUES = {
  MARQUEE: {
    id: 'marquee',
    name: 'WUD Film — The Marquee, Union South',
    address: '1308 W Dayton St, Madison, WI 53715',
    maps: 'https://www.google.com/maps?q=Union+South+Marquee+Madison'
  },
  CINEMATHEQUE: {
    id: 'cinematheque',
    name: 'UW–Madison Cinematheque',
    address: 'Vilas Hall, 821 University Ave, Madison, WI 53706',
    maps: 'https://www.google.com/maps?q=UW+Madison+Cinematheque'
  }
}

export const films = [
  // ——— WUD Film / Marquee ———
  {
    id: 'nosferatu-2024',
    title: 'Nosferatu',
    year: 2024,
    venue: 'marquee',
    director: 'Robert Eggers',
    runtime: 132,
    rating: 'PG-13',
    date: '2026-03-15',
    time: '7:00 PM',
    poster: 'posters/Nosferatu.jpg',
    captions: true,
    ad: false,
    genre: 'Horror',
    synopsis:
      'A gothic tale of obsession: a haunted young woman becomes the focus of a terrifying vampire whose fixation brings ruin in his wake.'
  },
  {
    id: 'frozen-2013',
    title: 'Frozen',
    year: 2013,
    venue: 'marquee',
    director: 'Chris Buck, Jennifer Lee',
    runtime: 102,
    rating: 'PG',
    date: '2026-03-16',
    time: '5:00 PM',
    poster: 'posters/Frozen.jpg',
    captions: true,
    ad: true,
    genre: 'Family',
    synopsis:
      'After Elsa’s coronation plunges Arendelle into eternal winter, Anna teams with Kristoff, Sven, and Olaf to restore summer and discovers what love and courage really mean.'
  },
  {
    id: 'titanic',
    title: 'Titanic',
    year: 1997,
    venue: 'marquee',
    director: 'James Cameron',
    runtime: 194,
    rating: 'PG-13',
    date: '2026-03-21',
    time: '7:00 PM',
    poster: 'posters/Titanic.jpg',
    captions: true,
    ad: false,
    genre: 'Romance',
    synopsis:
      'Elderly Rose recounts her 1912 voyage aboard the RMS Titanic and her brief, life-altering romance with Jack, set against the ship’s tragic sinking.'
  },
  {
    id: 'in-the-mood-for-love',
    title: 'In the Mood for Love',
    year: 2000,
    venue: 'marquee',
    director: 'Wong Kar-wai',
    runtime: 98,
    rating: 'PG',
    date: '2026-03-22',
    time: '7:00 PM',
    poster: 'posters/InTheMoodForLove.jpg',
    captions: false,
    ad: false,
    genre: 'Drama',
    synopsis:
      'In 1962 Hong Kong, two neighbors suspect their spouses are having an affair. Drawn together, they nurture restrained feelings while preserving propriety.'
  },
  {
    id: 'pride-prejudice-2005',
    title: 'Pride & Prejudice',
    year: 2005,
    venue: 'marquee',
    director: 'Joe Wright',
    runtime: 129,
    rating: 'PG',
    date: '2026-03-23',
    time: '6:00 PM',
    poster: 'posters/PrideAndPrejudice.jpg',
    captions: true,
    ad: false,
    genre: 'Romance',
    synopsis:
      'In Georgian-era England, the Bennet family’s future hinges on good matches. Elizabeth Bennet clashes with Mr. Darcy, challenging class, pride, and first impressions.'
  },
  {
    id: 'wedding-banquet-2025',
    title: 'The Wedding Banquet',
    year: 2025,
    venue: 'marquee',
    director: 'Andrew Ahn',
    runtime: 110,
    rating: 'PG-13',
    date: '2026-03-28',
    time: '7:00 PM',
    poster: 'posters/TheWeddingBanquet.jpg',
    captions: false,
    ad: false,
    genre: 'Comedy',
    synopsis:
      'Min proposes a green-card marriage with his friend Angela to solve multiple family pressures, only for plans to unravel when a lavish surprise banquet is arranged.'
  },
  {
    id: 'romeo-juliet-1996',
    title: 'Romeo + Juliet',
    year: 1996,
    venue: 'marquee',
    director: 'Baz Luhrmann',
    runtime: 120,
    rating: 'PG-13',
    date: '2026-03-29',
    time: '7:00 PM',
    poster: 'posters/Romeo+Juliet.jpg',
    captions: true,
    ad: false,
    genre: 'Drama',
    synopsis:
      'A modern-set, neon-bright retelling of Shakespeare’s tragedy: star-crossed lovers defy their feuding families in Verona Beach while the original dialogue remains.'
  },

  // ——— UW–Madison Cinematheque ———
  {
    id: 'secret-agent-2025',
    title: 'The Secret Agent',
    year: 2025,
    venue: 'cinematheque',
    director: 'Kleber Mendonça Filho',
    runtime: 95,
    rating: 'NR',
    date: '2025-12-11',
    time: '7:00 PM',
    poster: 'posters/TheSecretAgent.jpg',
    captions: false,
    ad: false,
    genre: 'Crime',
    synopsis:
      'In 1977 Recife, Marcelo, a technology expert in his early forties, returns in the midst of Carnaval to reunite with his son and plot a dangerous escape under the ever-watchful eyes of Brazil’s repressive military regime.'
  },
  {
    id: 'kisapmata-1981',
    title: 'Kisapmata',
    year: 1981,
    venue: 'cinematheque',
    director: 'Mike de Leon',
    runtime: 98,
    rating: 'NR',
    date: '2025-12-12',
    time: '7:00 PM',
    poster: 'posters/Kisapmata.jpg',
    captions: false,
    ad: false,
    genre: 'Thriller',
    synopsis:
      'After marriage, a young woman remains trapped under the control of her domineering ex-cop father, whose escalating tyranny turns the home into a prison.'
  }
]
