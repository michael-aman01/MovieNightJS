
export function loadBookmarks(){
    //return bookmarks in local storage
    const current = localStorage.getItem("movie-bookmarks")
    
    return JSON.parse(current)

}

export const addBookmarkToStorage = (movieDetails) => dispatch => {
    //add to local storage

    const current = loadBookmarks()

    if(current === null){

        localStorage.setItem("movie-bookmarks", JSON.stringify([movieDetails]))
        return dispatch(addBookmark(movieDetails))
    
    }else if(current.filter(movie => movie.imdbID === movieDetails.imdbID).length === 0){
        localStorage.setItem("movie-bookmarks", JSON.stringify([...current, movieDetails]))
        return dispatch(addBookmark(movieDetails))
    }
}


const ADD_BOOKMARK = 'bookmarks/ADD_BOOKMARK'
const REMOVE_BOOKMARK = 'bookmarks/REMOVE_BOOKMARK'
const addBookmark = bookmark => {
    return (
        {
            type: ADD_BOOKMARK,
            bookmark
        }
    )
}

export const removeBookmark = bookmarkID => {
    return (
        {
            type: REMOVE_BOOKMARK,
            bookmarkID
        }
    )
}




export default function bookmarksReducer(initialState={"current":[]}, action){
    let newState = Object.freeze({...initialState})
    switch(action.type){
        case ADD_BOOKMARK:
            let current = localStorage.getItem("movie-bookmarks")
            if(current){
                return {"current": current}
            }else{
                return newState
            }


        case REMOVE_BOOKMARK:
            let currentBM = loadBookmarks()
            let newBookMarks = currentBM.filter(movie => movie.imdbID !== action.bookmarkID)
            localStorage.setItem("movie-bookmarks", JSON.stringify(newBookMarks))
            return {"current": newBookMarks}
        default:
            return newState
    }
}