export const movieReducer=( state, action ) =>{
    switch(action.type){
        case "ADD_TO_WATCHLIST":
            return {
                ...state,
                watchList : [ action.movie, ...state.watchList]
            }
        case "ADD_TO_WATCHED":
            return{
                ...state,
                watchList : state.watchList.filter(movie=> movie.id !== action.id),
                watched : [ action.movie, ...state.watched]
            }
        case "REMOVE_MOVIE":
            return {
                ...state,
                watchList : state.watchList.filter(movie=> movie.id !== action.id)
            }

            
        default :
            return state
    }
}