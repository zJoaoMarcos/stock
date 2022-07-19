import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Form } from './Style';
import Input from '../../../Components/Form/Input';
import Select from '../../../Components/Form/Select';
import { StockContext } from '../../../Contexts/StockFunctions';

export default function RegisterDialog() {
    const [open, setOpen] = React.useState(false);
    const { registerMachines } = useContext(StockContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const selectPlace = [
        { value: '8º Andar', label: '8º Andar' },
        { value: 'C.P.D.', label: 'C.P.D.' },
        { value: 'VBG', label: 'VBG' }
    ]

    const selectType = [
        { value: 'Desktop', label: 'Desktop' },
        { value: 'Notebook', label: 'Notebook' }
    ]
    
    const selectStatus = [
        { value: 'OK', label: 'OK' },
        { value: 'Manutenção', label: 'Manutenção' }
    ]
    
    const selectStorage = [
        { value: 'HD 500GB', label: 'HD 500GB' },
        { value: 'HD 1TB', label: 'HD 1TB' },
        { value: 'SSD 240GB', label: 'SSD 240GB' },
        { value: 'SSD 120GB', label: 'SSD 120GB' }
    ]
    
    const selectMemory = [
        { value: '4GB', label: '4GB' },
        { value: '8GB', label: '8GB' },
        { value: '12GB', label: '12GB' },
        { value: '16GB', label: '16GB' }
    ]

    const handleSubmit = async (data) => {
        const type = data.type;
        const status = data.status; 
        const hostName = data.hostName;
        const memory = data.memory;
        const place = data.place;
        const cpu = data.cpu;
        const storage = data.storage;
        const graphicsCards = data.graphicsCards
        
        await registerMachines(cpu, hostName, memory, place, status, storage, type, graphicsCards);

        setOpen(false);
    }


    return (
        <div>
            <Button variant="text" onClick={handleClickOpen} color="inherit">
                Cadastrar
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cadastre o equipamento</DialogTitle>
                <DialogContent>
                    <Form onSubmit={handleSubmit}>
                    <Select
                        name="type"
                        label="Tipo"
                        options={selectType} >
                        {selectType.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Select>
                    <Select
                        name="status"
                        label="Status"
                        options={selectStatus} >
                        {selectStatus.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Select>
                    <Input name="hostName" type="text" required placeholder="Host Name" />
                    
                    <Select
                        name="place"
                        label="Local"
                        options={selectPlace} >
                        {selectPlace.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Select>

                    <DialogContentText>
                        <b>Configuração</b>
                    </DialogContentText>

                    <Input name="cpu" type="text" required placeholder="Processador" />
                    <Select
                        name="memory"
                        label="Armazenamento"
                        options={selectMemory} >
                        {selectMemory.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Select>
                    <Select
                        name="storage"
                        label="Armazenamento"
                        options={selectStorage} >
                        {selectStorage.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </Select>
                    <Input name="graphicsCards" type="text" required placeholder="Placa de Video" />

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
