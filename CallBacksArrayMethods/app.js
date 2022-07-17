const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 2000
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2009

    },
    {
        title: 'Parasite',
        score: 95,
        year: 1920
    },
    {
        title: 'Alien',
        score: 93,
        year: 1999
    },
    {
        title: 'Alien',
        score: 70,
        year: 1999
    },
    {
        title: 'Alien',
        score: 78,
        year: 1999
    }
]

/* const goodMovies = movies.filter(movie =>{
    return movie.score > 80 
}) */

//implicit return
/* const goodMovies = movies.filter(movie => movie.score > 80)
const goodTitles = goodMovies.map(m => m.title) */

//movies.filter(m => m.score > 80).map(m => m.title)
const badMovies = movies.filter(movie => movie.score < 80)