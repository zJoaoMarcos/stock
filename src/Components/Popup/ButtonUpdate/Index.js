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
import { red } from '@mui/material/colors';

import { Form } from './Style';
import Input from '../../Form/Input';
import Select from '../../Form/Select';
import { StockContext } from '../../../Contexts/StockFunctions';

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
    { value: 'Entrada', label: 'Entrada' },
    { value: 'Saida', label: 'Saída' }
  ]
  
  const selectDepartament = [
    { value: 'Recursos Humanos', label: 'Recursos Humanos' },
    { value: 'Suprimentos', label: 'Suprimentos' },
    { value: 'Orçamentos', label: 'Orçamentos' },
    { value: 'Aprovações', label: 'Aprovações' },
    { value: 'Novos Negócios', label: 'Novos Negócios' },
    { value: 'Stand & Decorado', label: 'Stand & Decorado' },
    { value: 'Júridico', label: 'Júridico' },
    { value: 'Controladoria', label: 'Controladoria' },
    { value: 'Contas a Pagar', label: 'Contas a Pagar' },
    { value: 'Contas a Receber', label: 'Contas a Receber' },
    { value: 'Obra', label: 'Obra' },
    { value: 'Instalações', label: 'Instalações' },
    { value: 'Área Comum', label: 'Área Comum' },
    { value: 'Governança Corporativa', label: 'Governança Corporativa' },
    { value: 'Projetos', label: 'Projetos' },
    { value: 'Produtos', label: 'Produtos' },
    { value: 'Comercial', label: 'Comercial' },
    { value: 'Tecnologia da Informação', label: 'Tecnologia da Informação' },
    { value: 'Facilities', label: 'Facilities' },
    { value: 'Decora', label: 'Decora' },

  ]

  const handleUpdate =  async (data) => {
    const stockCurrent = props.stockCurrent;
    const id = props.id;
    const stock = Number(data.stock);
    const dbName = props.dataBase;
    const typeMovement = data.movement;
    const technician = data.technician;
    const requester = data.requester;
    const departament = data.departament;
    
    if (typeMovement === "Entrada") {
      
      await inputStock(dbName, id, stock, stockCurrent);
      movement(props.description, stock, typeMovement, technician, departament, requester)
    } else {
      await outputStock(dbName, id, stock, stockCurrent);
      movement(props.description, stock, typeMovement, technician, departament, requester)
    }
    setOpen(false);
  }


  return (
    <div>
      <IconButton aria-label="update" onClick={handleClickOpen} size="small">
        <ImportExportRoundedIcon />
      </IconButton>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Movimento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b>{props.description}</b>
          </DialogContentText>
          <Form onSubmit={handleUpdate}>
            <Input name="stock" type="number" required placeholder="Quantidade" />
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
            <Input name="technician" type="text" required placeholder="Técnico" />
            <Input name="requester" type="text" required placeholder="Solicitante/Fornecedor" />

            <Select
              name="departament"
              label="Departamento"
              options={selectDepartament} >
              {selectDepartament.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>

            <button type="submit">Registrar</button>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: red[700] }}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
