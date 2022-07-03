import { Checkbox, FormControlLabel } from '@mui/material';

export default function TodoItem() {
  return (
    <div>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Learn React" />
    </div>
  )
}
