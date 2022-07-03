import { Checkbox, FormControlLabel } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem(props) {
  const onDeleteTask = function () {
    props.deleteTask(props.name) // calls the function passed through the props, this function is defined in App.js
  }

  return (
    <div>
      <FormControlLabel control={<Checkbox defaultChecked={props.completed}/>} label={props.name} />
      <IconButton aria-label="delete" size="small" style={{position: 'absolute', right: '16px'}} onClick={onDeleteTask}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  )
}
