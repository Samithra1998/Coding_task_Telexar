import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  TextField,
  Container,
} from "@material-ui/core";

import makeStyles from "./styles";
import { useDispatch } from "react-redux";
import { addExpenses } from "../../Action/expenses";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Link } from "react-router-dom";

const initialExpenseValues = {
  expenseName: "",
  date: "",
  amount: "",
  notes: "",
  category: "",
};

const Expenses = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [formval, setFormval] = useState(initialExpenseValues);

  const handleSubmit = (e) => {
    // e.preventdefault();

    dispatch(addExpenses(formval));
    console.log(formval);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}><MonetizationOnIcon/></Avatar>
        <Typography component="h1" variant="h5">
          Add Expenses
        </Typography>
        <form
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <TextField
              name="expenseName"
              label="Expense Name"
              value={formval.expenseName}
              onChange={(e) =>
                setFormval({ ...formval, expenseName: e.target.value })
              }
              required
            />
          </Grid>
          <Grid container spacing={2}>
            <TextField
              name="date"
              label=""
              value={formval.date}
              onChange={(e) => setFormval({ ...formval, date: e.target.value })}
              type="date"
              required
            />
          </Grid>
          <Grid container spacing={2}>
            <TextField
              name="amount"
              label="Total Amount"
              value={formval.amount}
              onChange={(e) =>
                setFormval({ ...formval, amount: e.target.value })
              }
              type='number'
              required
            />
          </Grid>
          <Grid container spacing={2}>
            <TextField
              name="notes"
              label="Notes"
              value={formval.notes}
              onChange={(e) =>
                setFormval({ ...formval, notes: e.target.value })
              }
              required
            />
          </Grid>
          <Grid container spacing={2}>
            <TextField
              name="category"
              label="Category"
              value={formval.category}
              onChange={(e) =>
                setFormval({ ...formval, category: e.target.value })
              }
              required
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="Secondary"
            component={Link}
            to="/viewexpenses"
            className={classes.submit}
          >
            View Expenses
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Expenses;
