import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { red } from '@mui/material/colors';
import { StockContext } from '../../../Contexts/StockFunctions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ButtonDelete(props) {
  const [open, setOpen] = React.useState(false);
  const { deleteItem } = useContext(StockContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteItem(props.id);
    setOpen(false);
  }

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen} size="small">
        <DeleteIcon sx={{ color: red[700] }} />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle color="error">{"Alerta"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Tem certeza que deseja excluir: <b>{props.description}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} sx={{ color: red[700] }}>Deletar</Button>
          <Button onClick={handleClose} color="info">Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
