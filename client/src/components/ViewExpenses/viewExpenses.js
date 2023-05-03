import { Button, Container, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import makeStyles from "./styles";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import { removeExpenses, viewExpenses } from "../../Action/expenses";
import { useSelector } from "react-redux";
import moment from "moment";
import JsPDF from 'jspdf';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const generatePDF = () => {

  const report = new JsPDF('portrait','pt','a4');
  report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf');
  })};

const ViewExpenses = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(viewExpenses());
    console.log("Action dispatched");
  }, [dispatch]);

  console.log(expenses);

  // Genarating the total cost of expenses
  const subCost = (expenses) => {
    return expenses.map(({ amount }) => amount).reduce((sum, i) => sum + i, 0);
  };

  const TotalCost = subCost(expenses);

  //save total cost in local storage in order to reduce that cost from the salary
  localStorage.setItem('Cost', TotalCost)

  const ccyFormat = (num) => {
    return `${num.toFixed(2)}`;
  };

  return (
    <Container component="main" maxWidth="lg">
      <Paper className={classes.paper} elevation={3}>
        <Typography component="h1" variant="h5" spacing="10">
          Summary of Expenses
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Expense Name</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Note</StyledTableCell>
                <StyledTableCell align="center">Category</StyledTableCell>
                <StyledTableCell align="center">Cost</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((row, index) => (
                <StyledTableRow key={row.expenseName}>
                  <StyledTableCell align="center">
                    {row.expenseName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {moment(row.date).format("MMMM Do YYYY")}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.notes}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.category}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.amount}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => dispatch(removeExpenses(row._id))}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              <button onClick={generatePDF} type="button">Export PDF</button>
              <StyledTableRow>
                <StyledTableCell rowSpan={2} />
                <StyledTableCell colSpan={1}>
                  <h3>Total Cost</h3>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <h3>{ccyFormat(TotalCost)}</h3>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default ViewExpenses;
