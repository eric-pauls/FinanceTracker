import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllLineItems from './pages/AllLineItems';
import BalanceSheet from './pages/BalanceSheet';
import AddLineItem from './pages/AddLineItem';
import EditLineItem from './pages/EditLineItem';



function App() {
  return (
    <div>
      <Router>
        <header>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/BalanceSheet">
            <BalanceSheet />
          </Route>
          <Route path="/AllLineItems">
            <AllLineItems/>
          </Route>
          <Route path="/AddLineItem">
              <AddLineItem/>
          </Route>
          <Route path="/EditLineItem">
              <EditLineItem/>
          </Route>
        </header>
      </Router>
    </div>
  );
} 

export default App;