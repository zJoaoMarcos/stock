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

export default function TableShop(props) {
  return (
    <TableContainer component={Paper}>
      <Table /* sx={{ minWidth: 200 }} */ aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">Tipo</StyledTableCell>
            <StyledTableCell align="right">Estoque</StyledTableCell>
            <StyledTableCell align="right">Estoque Min</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.purchases.map((purchase) => (
            <StyledTableRow key={purchase.id}>
              <StyledTableCell component="th" scope="row">
                {purchase.description}
              </StyledTableCell>
              <StyledTableCell align="right">{purchase.type}</StyledTableCell>
              <StyledTableCell align="right">{purchase.stock}</StyledTableCell>
              <StyledTableCell align="right">{purchase.stockMin}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
