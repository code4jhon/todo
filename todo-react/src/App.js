import './App.css';
import ButtonAppBar from './components/AppBar';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import TodoItem from './components/TodoItem'

function App() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div className='app-body'>
        <TextField id="outlined-basic" fullWidth label="What needs to be done" variant="outlined" style={{'marginTop': '16px'}} />
        <Button variant="contained" fullWidth component="span" style={{'marginTop': '8px'}}>Add new task</Button>
        <ul style={{'marginTop': '20px'}}>
          <TodoItem name="react" completed={true}></TodoItem>
          <TodoItem name="vuejs" completed={true}></TodoItem>
          <TodoItem name="svelte" completed={false}></TodoItem>
          <TodoItem name="ios" completed={false}></TodoItem>
          <TodoItem name="android" completed={false}></TodoItem>
        </ul>
      </div>
    </div>
  );
}

export default App;
