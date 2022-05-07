function Movie(title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;
}

const movies = [
    new Movie('x', 2018, 5.0),
    new Movie('a', 2018, 4.5),
    new Movie('b', 2018, 4.7),
    new Movie('c', 2018, 3),
    new Movie('d', 2017, 4.5)
];

// all the moves in 2018
// with rating > 4
// sort them by their rating in descending order
// pick their title
// result should be 'b' 'a'

filteredMovies = movies
    .filter(m => m.year === 2018 && m.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

