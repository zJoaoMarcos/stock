import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import IconButton from '@mui/material/IconButton';

import { Form } from './Style';
import Input from '../Form/Input';
import Select from '../Form/Select';
import { StockContext } from '../../Contexts/StockFunctions';

export default function ButtonUpdate(props) {
  const [open, setOpen] = React.useState(false);
  const { inputStock, outputStock , movement } = useContext(StockContext);
  

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
    const typeMovement = data.movement
    const technician = data.technician

    if (typeMovement === "entrada") {
      inputStock(id, stock, stockCurrent);
      movement(props.description, stock, typeMovement, technician)
    } else {
      outputStock(id, stock, stockCurrent);
      movement(props.description, stock, typeMovement, technician)
    }
    setOpen(false);
  }


  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen} size="small">
        <ImportExportRoundedIcon />
      </IconButton>
      
      <Dialog open={open} onClose={handleClose}>
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
