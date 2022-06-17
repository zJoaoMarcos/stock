import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Form } from '@unform/web';
import Input from '../Form/Input';
import Select from '../Form/Select';

export default function ButtonUpdate(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectOptions = [
    { value: 'entrada', label: 'Entrada' },
    { value: 'saida', label: 'Saída' }
  ]

  const handleUpdate = (data) => {
    const stockCurrent = props.stockCurrent
    const id = props.id

    const stock = Number(data.stock)
    const movement = data.movement
    const technician = data.technician

    if (movement === "entrada") {
      props.inputStock(id, stock, stockCurrent)
      props.movement(props.description, stock, movement, technician)
    } else {
      props.outputStock(id, stock, stockCurrent)
      props.movement(props.description, stock, movement, technician)
    }
    setOpen(false);
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Movimento
      </Button>
      <Dialog open={open} onClose={handleClose}>S
        <DialogTitle>Movimento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
          <Form onSubmit={handleUpdate}>
            <Input name="stock" type="number" required placeholder="Quantidade" />
            <Input name="technician" type="text" required placeholder="Técnico" />

            <Select
              name="movement"
              label="Tipo de Movimento"
              options={selectOptions} >
              {selectOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>

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
