import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState} from 'react';
import HomePage from './pages/HomePage';
import AllLineItems from './pages/AllLineItems';
import BalanceSheet from './pages/BalanceSheet';
import AddLineItem from './pages/AddLineItem';
import EditLineItem from './pages/EditLineItem';
import ExpenseVisual from './pages/ExpenseVisual';


function App() {
  const [lineItemToEdit, setLineItemToEdit] = useState();
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/BalanceSheet">
              <BalanceSheet />
            </Route>
            <Route path="/ExpenseVisual">
                <ExpenseVisual/>
            </Route>
            <Route path="/AllLineItems">
              <AllLineItems setLineItemToEdit={setLineItemToEdit}/>
            </Route>
            <Route path="/AddLineItem">
                <AddLineItem/>
            </Route>
            <Route path="/EditLineItem">
                <EditLineItem lineItemToEdit={lineItemToEdit}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
} 
 
export default App;