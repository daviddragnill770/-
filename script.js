const number0fFilms = +prompt("Сколько фильмов ты посмотрел?", "");

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i = 0; i < 1; i++){
//     const a = prompt("Один из последних просмотренных  фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");

//     if (a != "" && b != "" && a != null && b != null && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }     
// }

let num = 0;

while (num < 2){
    console.log(num);
    const a = prompt("Один из последних просмотренных  фильмов?", ""),
          b = prompt("На сколько оцените его?", "");

    if (a != "" && b != "" && a != null && b != null && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log("done"); 
        num++;
    } else {
        console.log("error");
        num--;
    }   
}

if (personalMovieDB.count < 10){
    console.log("мало фильм посмотрел, сука");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("надо больше фильмов смотреть, петух");
    } else if (personalMovieDB.count > 30){
        console.log("средненькое колличество долбоеб");
    } else {
        console.log("ошибка нахуй")
    }



console.log(personalMovieDB);



