const number0fFilms = +prompt("Сколько фильмов ты посмотрел?", "");

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = promt("Один из последних просмотренных  фильмов?", ""),
      b = promt("На сколько оцените его?", ""),
      c = promt("Один из последних просмотренных  фильмов?", ""),
      d = promt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);