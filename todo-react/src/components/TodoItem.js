import { Checkbox, FormControlLabel } from '@mui/material';

export default function TodoItem(props) {
  return (
    <div>
      <FormControlLabel control={<Checkbox defaultChecked />} label={props.name} />
    </div>
  )
}
