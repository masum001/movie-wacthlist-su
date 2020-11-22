import React,{ createContext, useReducer } from 'react';
import { movieReducer } from '../reducer/movieReducer';

export const MovieContext = createContext();

const initialState = {
    watchList : [],
    watched : []
}
const MovieContextProvider=(props)=>{

    const [ state, dispatch ] = useReducer( movieReducer, initialState)

    return (
        <MovieContext.Provider value={{ watchList: state.watchList, watched : state.watched , dispatch }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;