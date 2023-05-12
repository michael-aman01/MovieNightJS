
export function loadBookmarks(){
    //return bookmarks in local storage
    const current = localStorage.getItem("movie-bookmarks")
    
    return JSON.parse(current)

}

export const addBookmarkToStorage = (movieDetails) => dispatch => {
    //add to local storage

    const current = loadBookmarks()
    movieDetails["watched"] = false
    if(current === null){

        localStorage.setItem("movie-bookmarks", JSON.stringify([movieDetails]))
        return dispatch(addBookmark(movieDetails))
    
    }else if(current.filter(movie => movie.imdbID === movieDetails.imdbID).length === 0){
        localStorage.setItem("movie-bookmarks", JSON.stringify([...current, movieDetails]))
        return dispatch(addBookmark(movieDetails))
    }
}


export const updateBookmarkInStorage = (bookmark) => dispatch => {
    const current = loadBookmarks()

     if(current === null){
        const newBM = [bookmark]
        localStorage.setItem("movie-bookmarks", JSON.stringify(newBM))

        return dispatch(updateBookmark(newBM))
    
    }else{
        let index = current.indexOf(current.filter(movie => movie.imdbID === bookmark.imdbID)[0])
        console.log(current)
        const newBM = [...current.slice(0, index),bookmark,...current.slice(index+1,)]
        console.log(newBM)
        localStorage.setItem("movie-bookmarks", JSON.stringify(newBM))
        return dispatch(updateBookmark(newBM))
    }

}



const ADD_BOOKMARK = 'bookmarks/ADD_BOOKMARK'
const REMOVE_BOOKMARK = 'bookmarks/REMOVE_BOOKMARK'
const UPDATE_BOOKMARK = "bookmarks/UPDATE_BOOKMARK"

export const updateBookmark = bookmark => {
    return (
        {
            type: UPDATE_BOOKMARK,
            bookmark
        }
    )
}
export const addBookmark = bookmark => {
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
            let current = JSON.parse(localStorage.getItem("movie-bookmarks"))
            if(current){
                current.forEach(movie => movie["watched"] = false)
                return {"current": current}
            }else{
                return newState
            }
        
        case UPDATE_BOOKMARK:
            return {"current":action.bookmark}

        case REMOVE_BOOKMARK:
            let currentBM = loadBookmarks()
            let newBookMarks = currentBM.filter(movie => movie.imdbID !== action.bookmarkID)
            localStorage.setItem("movie-bookmarks", JSON.stringify(newBookMarks))
            return {"current": newBookMarks}

        default:
            return newState
    }
}