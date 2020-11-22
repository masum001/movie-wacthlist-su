import React,{ useState, useContext } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { MovieContext } from '../context/MovieContext';




const ResultCard = ({movie}) => {

    const { dispatch, watchList } = useContext(MovieContext);
    
    let  listed = watchList.find(mo=> mo.id === movie.id);
    const disabled = listed ? true : false
    return (
        <Card style={{marginTop : 15}}>
            <CardContent>
            <Grid container>
                <Grid item sm={6}>
                {
                    (movie.poster_path) ? (<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`poster of ${movie.title}`}/>) : (<p>Poster Not Found</p>)
                }
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="h5" component="h2" align= "center">
                        {movie.title}
                    </Typography>
                    <Typography  style={{ marginTop : 15}}>
                        {movie.overview}
                    </Typography>
                    <Button variant="contained" 
                                    fullWidth 
                                    style={{background : "crimson", marginTop: 20 }} 
                                    onClick={()=>dispatch({ type : "ADD_TO_WATCHLIST", movie : movie})}
                                    disabled={disabled}
                                    >
                                Add To Watchlist
                    </Button>
                </Grid>
            </Grid> 
            </CardContent>
        </Card>
    )
}

export default ResultCard
