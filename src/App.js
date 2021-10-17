import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/SharedComponent/Footer/Footer';
import Header from './Pages/SharedComponent/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/home"></Route>
          <Route path="/services"></Route>
          <Route path="/pricing"></Route>
          <Route path="/news"></Route>
          <Route path="/login"></Route>
          <Route path="/signup"></Route>
          <Route path="*"></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
