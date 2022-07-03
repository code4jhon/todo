import './App.css';
import ButtonAppBar from './components/AppBar';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import TodoItem from './components/TodoItem'
import { useState } from "react";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [name, setName] = useState('');


  const taskList = tasks.map(task => (
    <TodoItem key={task.id} name={task.name} completed={task.completed}/>
  ));

  const addNewTask = function () {
    const uniqueId =  name + Math.random() + Math.random()
    const newTask = { id: uniqueId, name: name, completed: false };

    setTasks([...tasks, newTask]);
  }

  const onTextFieldChange = function (e) {
    setName(e.target.value);
  }

  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div className='app-body'>
        <TextField fullWidth label="What do I want to learn ?" variant="outlined" style={{'marginTop': '16px'}} onChange={onTextFieldChange}/>
        <Button variant="contained" fullWidth component="span" style={{'margin': '8px 0 20px'}} onClick={addNewTask}>Add to the list</Button>
        {taskList}
      </div>
    </div>
  );
}

export default App;
