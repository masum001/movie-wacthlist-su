import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';




const WatchList = () => {

    const { watchList, dispatch } = useContext(MovieContext);

    return  (
       <div>
       { (watchList.length > 0) ?
            <Grid container spacing={3} style={{marginTop : 10}}>
                {    watchList.map(movie=>
                        <Grid item sm={3} xs={12}>
                        <Card>
                                <CardContent>
                                     {(movie.poster_path) ? (<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`poster of ${movie.title}`}/>) : (<p>Poster Not Found</p>)}
                                     <Typography variant="h5" component="h2" align= "center">
                                         {movie.title}
                                     </Typography>
                                     <Typography  style={{ marginTop : 15}}>
                                          {movie.overview}
                                    </Typography>
                                    <Button variant="contained"  
                                                    style={{background : "crimson", marginTop: 20 }} 
                                                    size='small'
                                                    onClick={()=>dispatch({type: "ADD_TO_WATCHED", movie : movie, id : movie.id})} >
                                                Watched
                                    </Button>
                                    <Button variant="contained"  
                                            style={{background : "red", marginTop: 20 }} 
                                            size='small'
                                            onClick={()=>dispatch({ type: "REMOVE_MOVIE", id : movie.id})}>
                                             Remove
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                )
                   }
                    </Grid> 
                : <h2 align='center'> No Movies in  Watch List, Go to +Add Movies to Add Movies</h2>
        }
       </div>

    ) 
}

export default WatchList
