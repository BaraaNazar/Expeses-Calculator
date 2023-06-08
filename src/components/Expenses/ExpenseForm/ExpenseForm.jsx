import { useState } from 'react';
import AddExpenseButton from '../AddExpenseButton/AddExpenseButton';
import InputExpense from '../InputExpense.jsx/InputExpense';
import "./style.css"

function ExpenseForm() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [users, setUsers]=useState([])

  const handleNameChange = (event)=>{
    setName(event.target.value)
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleAddUser = () => {
    const newUser = {
      name: name,
      age: age
    };
    setUsers([...users, newUser]);
    setName('');
    setAge('');
  };
  return (
    <div className="flex">
      <InputExpense handleNameChange={handleNameChange} />
      <input type="number" placeholder='Age' value={age} onChange={handleAgeChange}/>
      <AddExpenseButton handleAddUser={handleAddUser}/>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Name: {user.name}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseForm;