'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const lastMovie = prompt('Один из последних просмотренных фильмов?', ''),
    rateOfMovie = prompt('На сколько оцените его?', ''),
    lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    rateOfFilm = prompt('На сколько оцените его?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        lastMovie: rateOfMovie,
        lastFilm: rateOfFilm,
    },
    actors: {},
    genres: [],
    privat: false,
};

console.log(personalMovieDB);
