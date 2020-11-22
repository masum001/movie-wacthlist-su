import React,{ useState, useEffect } from 'react'
import  axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core'
import ResultCard from './ResultCard';


const useStyles = makeStyles(()=>({
    textFieldStyle : {
        marginTop : 25
    }
}))
const AddMovie = () => {

    const classes = useStyles();

    const API_KEY = '3bd6b1ed7fdf4aceb71550a869538c5a';
     
    const [ query, setQuery ] = useState("");
    const [ movies, setMovies ]  =  useState([])

   
    useEffect(()=>{
        const getData=async()=>{
          const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&include_adult=false&query=${query}`)
          console.log(data.results)
          setMovies(data.results);
          
        }
        getData()
    
      },[query])

    return (
        <div>
           <TextField
                    className={classes.textFieldStyle}
                    id="standard-basic" 
                    fullWidth 
                    label="Search for a movie" 
                    onChange={(e)=>setQuery(e.target.value)}/>

            {
                movies.length > 0 && movies.map(movie=>
                <ResultCard movie={movie} key={movie.id}/> 
                )}
        </div>
    )
}

export default AddMovie
