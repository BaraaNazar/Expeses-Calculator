
import { useState } from 'react';
import './App.css';

function App() {
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
    <div className="App">
      <input type="text" placeholder='Name' value={name} onChange={handleNameChange}/>
      <input type="number" placeholder='Age' value={age} onChange={handleAgeChange}/>
      <button type='submit' onClick={handleAddUser}>Add User</button>
      
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

export default App;
