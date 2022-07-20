import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ButtonUpdate from '../../Components/Popup/ButtonUpdate/Index';

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

const dbName = "impressoras";

export default function TablePrinters(props) {
  return (
    <TableContainer component={Paper}>
      <Table /* sx={{ maxWidth: 1000 }} */ aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="left">Impressora</StyledTableCell>
            <StyledTableCell align="left">Cor</StyledTableCell>
            <StyledTableCell align="left">Estoque</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.printers.map((printer) => (
            <StyledTableRow key={printer.id}>
              <StyledTableCell component="th" scope="row">
                {printer.type}
              </StyledTableCell>
              <StyledTableCell align="left">{printer.printer}</StyledTableCell>
              <StyledTableCell align="left">{printer.color}</StyledTableCell>
              <StyledTableCell align="center">{printer.stock}</StyledTableCell>
              <StyledTableCell align="right"><ButtonUpdate stockCurrent={printer.stock} description={printer.type + printer.color + printer.printer} id={printer.id} dataBase={dbName}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
