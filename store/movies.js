
const ADD_MOVIE = "ADD_MOVIE/movies"

export const addMovies = movies => {
    return {
        type: ADD_MOVIE,
        movies
    }
}

export default function MovieReducer(initialState={}, action){
    const newState = Object.freeze(initialState)
    switch(action.type){
        case ADD_MOVIE:
            return {movies: action.movies}
        default:
            return {...newState}
    }
}