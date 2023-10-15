// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#27005d',
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Kratos Willy', 10000, 20000, 100),
//   createData('William Jones', 500, 1000, 100),
//   createData('Jen Rock', 50000, 100000, 100),
//   createData('Yensei Lu', 1000, 500, -50),
//   createData('Kyle Roy',100000,300000,200 ),
// ];

// export default function CustomizedTables() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="dense table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Client Name</StyledTableCell>
//             <StyledTableCell align="right">Invested Amount&nbsp;(Rs.)</StyledTableCell>
//             <StyledTableCell align="right">Current Value&nbsp;(Rs.)</StyledTableCell>
//             <StyledTableCell align="right">Returns&nbsp;(%)</StyledTableCell>
          
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
