import { Checkbox } from '@mui/material';

export default function TodoItem(props) {
  return (
    <div>
      <Checkbox checked={props.completed} /> {props.name}
    </div>
  )
}
