import ExpenseForm from '../src/components/Expenses/ExpenseForm/ExpenseForm.jsx';
import AllExpeseItems from './components/Expenses/AllExpeseItems/AllExpeseItems.jsx';
import { expenses } from './assets/expenses.js';

function App() {

  return (
    <div className="App">
      <ExpenseForm/>
      <AllExpeseItems expenses={expenses} />
    </div>
  );
}

export default App;
