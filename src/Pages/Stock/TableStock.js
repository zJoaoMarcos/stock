import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ButtonEdit from './ButtonEdit/Index';
import ButtonUpdate from '../../Components/Popup/ButtonUpdate/Index';
import ButtonDelete from '../../Components/Popup/ButtonDelete/Index';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const dbName = "estoque";

export default function TableStock(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="left">Tipo</StyledTableCell>
            <StyledTableCell align="center">Estoque</StyledTableCell>
            <StyledTableCell align="center">Local</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.description}
              </StyledTableCell>
              <StyledTableCell align="left">{item.type}</StyledTableCell>
              <StyledTableCell align="center">{item.stock}</StyledTableCell>
              <StyledTableCell align="center">{item.place}</StyledTableCell>
              <StyledTableCell align="left"><ButtonEdit description={item.description} type={item.type} stock={item.stock} stockMin={item.stockMin} id={item.id} place={item.place}/></StyledTableCell>
              <StyledTableCell align="left"><ButtonUpdate stockCurrent={item.stock} description={item.description} id={item.id} dataBase={dbName} /></StyledTableCell>
              <StyledTableCell align="left"><ButtonDelete description={item.description} id={item.id}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
