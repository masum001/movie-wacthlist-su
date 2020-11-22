import { Grid } from '@material-ui/core';
import Header from './componets/Header';
import { Route, Switch } from 'react-router-dom';
import AddMovie from './componets/AddMovie';
import WatchList from './componets/WatchList';
import Wacthed from './componets/Watched';
import MovieContextProvider from './context/MovieContext';

function App() {
  return (
    <div className="App">
    <MovieContextProvider>
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item sm={2} xs={false}/>
          <Grid item sm={8} xs={12}>
              <Switch>
                <Route exact path='/' component={AddMovie}/>
                <Route path="/watchList" component={WatchList}/>
                <Route path='/watched' component={Wacthed}/>
              </Switch>
          </Grid>
        <Grid item sm={2} xs={false}/>
      </Grid>
    </Grid>
    </MovieContextProvider>
    </div>
  );
}

export default App;
