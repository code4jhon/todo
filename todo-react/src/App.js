import './App.css';
import ButtonAppBar from './components/AppBar';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import TodoItem from './components/TodoItem'

function App(props) {
  const taskList = props.tasks.map(task => (
    <TodoItem key={task.id} name={task.name} completed={task.completed}/>
  ));

  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div className='app-body'>
        <TextField id="outlined-basic" fullWidth label="What do I want to learn ?" variant="outlined" style={{'marginTop': '16px'}} />
        <Button variant="contained" fullWidth component="span" style={{'margin': '8px 0 20px'}}>Add to the list</Button>
        {taskList}
      </div>
    </div>
  );
}

export default App;
