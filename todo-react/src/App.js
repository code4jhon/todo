import './App.css';
import ButtonAppBar from './components/AppBar';
import BottomBar from './components/BottomBar';
import { TextField, Snackbar, Alert, Stack } from '@mui/material';
import { Button } from '@mui/material';
import TodoItem from './components/TodoItem';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from "react";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const percent = (tasks.filter(task => task.completed).length * 100) / tasks.length

  const addNewTask = function () {
    // TODO implement functionality that prevents adding duplicated entries (with the same name)
    const uniqueId =  name + Math.random();
    const newTask = { id: uniqueId, name: name, completed: false };
    const text = document.getElementById('foo')

    setTasks([...tasks, newTask]); // updates the state of the app
    text.value = ''
    setName('')
  }

  const updateCompletedState = function (taskName, checked) {
    const currentTasks = [...tasks]

    currentTasks.forEach(function (task) {
      if (task.name === taskName) {
        task.completed = checked
      }
    })

    if (currentTasks.length && currentTasks.filter(task => !task.completed).length === 0) {
      setOpen(true)
    }

    setTasks(currentTasks)
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
    <TodoItem key={task.id} name={task.name} completed={task.completed} deleteTask={deleteTask} updateCompletedState={updateCompletedState}/>
  ));

  const onTextFieldChange = function (e) {
    setName(e.target.value); // call setName to keep state.name updated
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{height: '100%'}}>
      <ButtonAppBar></ButtonAppBar>
      <LinearProgress variant="determinate" color='success' value={percent} />
      <div style={{padding: '8px'}}>
        <TextField id="foo" fullWidth label="What do I want to learn ?" variant="outlined" style={{'marginTop': '16px'}} onChange={onTextFieldChange}/>
        <Button variant="contained" fullWidth component="span" style={{'margin': '8px 0 20px'}} onClick={addNewTask}>Add to the list</Button>
        {taskList}
        <Button variant="outlined" color="error" style={{position: 'absolute', bottom: '64px', right: '16px'}} onClick={deleteAll}>Delete All</Button>
      </div>

      <Stack spacing={20} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          🐣 🎉 You made it!
          </Alert>
        </Snackbar>
      </Stack>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
