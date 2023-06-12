import React,{useState} from 'react';
import AllExpeseItems from './components/Expenses/AllExpeseItems/AllExpeseItems.jsx';
import { expenses } from './assets/expenses.js';
import Navbar from './components/Navbar/Navbar.jsx';
import NewExpense from './components/Expenses/ExpenseForm/NewExpense.jsx';

function App() {
  const [expenseItems, setExpenseItems] = useState(expenses);
  const addExpesneHandler=(expense)=>{
    console.log("in app.js file")
    console.log(expense)
    setExpenseItems((prevExpenseItems) => [expense, ...prevExpenseItems]);
  }

  return (
    <div className="App">
      <Navbar/>
      <NewExpense addExpesneHandler={addExpesneHandler}/>
      <AllExpeseItems items={expenseItems} />
    </div>
  );
}

export default App;
