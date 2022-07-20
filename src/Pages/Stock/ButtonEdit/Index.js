import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import { Form } from './Style';
import Input from '../../../Components/Form/Input';
import { StockContext } from '../../../Contexts/StockFunctions';

export default function RegisterDialog(props) {
    const [open, setOpen] = React.useState(false);
    const { editItem } = useContext(StockContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = async (data) => {
        const type = data.type
        const description = data.description
        const stock = data.stock
        const stockMin = data.stockMin
        const place = data.place

        await editItem(type, description, stock, stockMin, place)

    }

    return (
        <div>
            <IconButton aria-label="edit" onClick={handleClickOpen} size="small">
                <EditRoundedIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Editar: <b>{props.description}</b> </DialogTitle>
                <DialogContent>
                    <Form onSubmit={handleEdit}>
                        <label>Tipo:</label>
                        <Input name="type" type="text" required value={props.type}/>
                        <label>Item:</label>
                        <Input name="description" type="text" required placeholder={props.description}/>
                        <label>Estoque:</label>
                        <Input name="stock" type="text" required placeholder={props.stock}/>
                        <label>Estoque Minimo:</label>
                        <Input name="stockMin" type="text" required placeholder={props.stockMin}/>
                        <label>Local:</label>
                        <Input name="place" type="text" required placeholder={props.place}/>
                        
                        <button type="submit">Registrar</button>
                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
