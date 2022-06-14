import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Form  } from '@unform/web';
import Input from '../Form/Input';

export default function ButtonUpdate(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  
  const handleUpdate = (data) => {
    
    const id = props.id
    const stock = data.stock

    props.update(id, stock)
    setOpen(false);
  }

  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Movimento
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Movimento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
          <Form onSubmit={handleUpdate}>
            <Input name="stock" type="number" required placeholder="Quantidade"/>
            <button type="submit">Registrar</button>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
