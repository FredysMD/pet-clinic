import { 
  BrowserRouter as Router,  
  Route,
  Switch
} from 'react-router-dom';
import { home } from'./Screens/home';
import { list } from'./Screens/list';
import { add } from'./Screens/add';
import { Header } from'./Components/Header';
import { Footer } from'./Components/Footer';


function App() {
  return (
    <Router>
        <Header />
        <div className="container">
          
            <Switch>
              <Route exact path="/" component = { home }/>
              <Route path="/add" component = { add }/>
              <Route path="/list" component = { list }/>
            </Switch>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
