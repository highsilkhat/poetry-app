import './App.css';
import Haiku from './views/Haiku';
import Main from './views/Main';
import ShakesSonnet from './views/ShakesSonnet';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path= "/">
          <Main />
        </Route>
        <Route exact path= "/haiku">
        <Haiku />
        </Route>
        <Route exact path= "/shakespeareanSonnet">
        <ShakesSonnet />
        </Route>
      </Switch>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
