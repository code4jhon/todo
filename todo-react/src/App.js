import './App.css';
import ButtonAppBar from './components/AppBar';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

function App() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div className='app-body'>
        <TextField id="outlined-basic" fullWidth label="What needs to be done" variant="outlined" style={{'marginTop': '16px'}} />
        <Button variant="contained" fullWidth component="span" style={{'marginTop': '8px'}}>Add new task</Button>
      </div>
    </div>
  );
}

export default App;
