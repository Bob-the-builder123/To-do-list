import react, {useState} from 'react';
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return(
  <div className="App">
    <h1>To-Do List</h1>
    <input 
      type='text'
      placeholder='Add New Tasks'
      value={newTask}
      onChange={handleChange}
      />
    <button onClick={handleAddTask}>Add</button>
    <ul>
      {tasks.map((task, index) => (
    <li key={index}>
      {task}
      <button onClick={() => handleDeleteTask()}>Delete</button>
    </li>
      ))}
      </ul>
  </div>
);
}