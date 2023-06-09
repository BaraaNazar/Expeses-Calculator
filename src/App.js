import ExpenseForm from '../src/components/Expenses/ExpenseForm/ExpenseForm.jsx';
import AllExpeseItems from './components/Expenses/AllExpeseItems/AllExpeseItems.jsx';
import { expenses } from './assets/expenses.js';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ExpenseForm/>
      <AllExpeseItems expenses={expenses} />
    </div>
  );
}

export default App;
