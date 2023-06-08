import ExpenseForm from '../src/components/ExpenseForm/ExpenseForm.jsx';
import AllExpeseItems from './components/AllExpeseItems/AllExpeseItems.jsx';
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
