import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


const Wacthed = () => {
    const { watched, dispatch } = useContext(MovieContext);

    return  (
       <div>
       { (watched.length > 0) ?
            <Grid container spacing={3} style={{marginTop : 10}}>
                {    watched.map(movie=>
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
                                </CardContent>
                            </Card>
                        </Grid>
                )
                   }
                    </Grid> 
                : <h2 align='center'> No Movies in  Watched List</h2>
        }
       </div>

    ) 
}

export default Wacthed
