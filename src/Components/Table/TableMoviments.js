import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function TableMoviments(props) {
  return (
    <TableContainer component={Paper}>
      <Table /* sx={{ minWidth: 200 }} */ aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Movimento</StyledTableCell>
            <StyledTableCell align="right">Item</StyledTableCell>
            <StyledTableCell align="right">Quant.</StyledTableCell>
            <StyledTableCell align="right">Técnico</StyledTableCell>
            <StyledTableCell align="right">Data</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.movements.map((movement) => (
            <StyledTableRow key={movement.id}>
              <StyledTableCell component="th" scope="row">
                {movement.movement}
              </StyledTableCell>
              <StyledTableCell align="right">{movement.item}</StyledTableCell>
              <StyledTableCell align="right">{movement.quantity}</StyledTableCell>
              <StyledTableCell align="right">{movement.technician}</StyledTableCell>
              <StyledTableCell align="right">{movement.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
