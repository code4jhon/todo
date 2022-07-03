import './App.css';
import ButtonAppBar from './components/AppBar';
import BottomBar from './components/BottomBar';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import TodoItem from './components/TodoItem'
import { useState } from "react";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [name, setName] = useState('');


  const addNewTask = function () {
    // TODO implement functionality that prevents adding duplicated entries (with the same name)
    const uniqueId =  name + Math.random();
    const newTask = { id: uniqueId, name: name, completed: false };

    setTasks([...tasks, newTask]); // updates the state of the app
  }

  const deleteTask = function (taskName) {
    // find the index of the task to delete
    const index = tasks.findIndex(function (task) {
      return task.name === taskName
    })

    if (index > -1) { // if there was an item found
      const remainingTasks = [...tasks]

      remainingTasks.splice(index, 1)
      setTasks(remainingTasks) // update the state of the component
    }
  }

  const deleteAll = function () {
    setTasks([]);
  }

  // uses state.task to create a list of todo items
  const taskList = tasks.map(task => (
    <TodoItem key={task.id} name={task.name} completed={task.completed} deleteTask={deleteTask}/>
  ));

  const onTextFieldChange = function (e) {
    setName(e.target.value); // call setName to keep state.name updated
  }

  return (
    <div style={{height: '100%'}}>
      <ButtonAppBar></ButtonAppBar>
      <div className='app-body'>
        <TextField fullWidth label="What do I want to learn ?" variant="outlined" style={{'marginTop': '16px'}} onChange={onTextFieldChange}/>
        <Button variant="contained" fullWidth component="span" style={{'margin': '8px 0 20px'}} onClick={addNewTask}>Add to the list</Button>
        {taskList}

        <Button variant="outlined" color="error" style={{position: 'absolute', bottom: '64px', right: '16px'}} onClick={deleteAll}>Delete All</Button>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
