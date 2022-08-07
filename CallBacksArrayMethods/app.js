/* const movies = [
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
] */

/* const goodMovies = movies.filter(movie =>{
    return movie.score > 80 
}) */

//implicit return
/* const goodMovies = movies.filter(movie => movie.score > 80)
const goodTitles = goodMovies.map(m => m.title) */

//movies.filter(m => m.score > 80).map(m => m.title)
//const badMovies = movies.filter(movie => movie.score < 80)


	// JavaScript to illustrate findIndex() method
	/* function canVote(age) {
		return age >= 18;
	}

	function func() {
		var filtered = [24, 33, 16, 40].filter(canVote);
		document.write(filtered);
	}
	func(); */
    function validUserNames(usernames) {
    
        const result = usernames.filter(username => username.length < 10);
        
        console.log(result);
      // your code here
    }

validUserNames(["Kufre", "Jonathan", "Samanthanjay"])