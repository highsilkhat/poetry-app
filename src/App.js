import './App.css';
import Haiku from './views/Haiku';
import Main from './views/Main';
import Poetry from './views/Poetry';
import ShakesSonnet from './views/ShakesSonnet';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path= "/">
          <Poetry />
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
