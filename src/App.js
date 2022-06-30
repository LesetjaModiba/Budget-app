
import './App.css';
import React, {useState} from 'react';
import Home from './home';
import Login from './components/login';
import SignUp  from './components/signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [transaction, setTransaction] = useState ([]);

const addTransaction= ((amount, item, transactionType)=>
{
  setTransaction((items)=> [...items, { 
    amount:amount,
    item:item,
    transactionType:transactionType
  
  }])
  //  useEffect(()=>
  //  {
  //   console.log(transaction);
  //  }),[item]);
})
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/login" component={Login}></Route>

    <div className="App">
    <Home list={transaction} Add={addTransaction}/>
    </div>
    </Switch>
    
  </Router>

  );
}
export default App;
