import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, {useState,useEffect} from "react";
import makeStyles from "./styles";
import { useDispatch } from "react-redux";
import { SALARY } from "../../constants/actionType";

const Salary = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [mysalary,setMysalary] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('Salary');
    if (savedValue) {
        setMysalary(savedValue);
    }
  }, []);

  const handleSubmit = () => {
    // dispatch({type: SALARY, mysalary})
    localStorage.setItem('Salary', mysalary);
    console.log(mysalary);
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
      <Typography component="h1" variant="h5">
          My Salary
        </Typography>
        <form
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <TextField
              name="salary"
              label="Enter your Salary"
              type='number'
              value={mysalary}
              onChange={(e) => setMysalary( e.target.value)}
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
        </form>
      </Paper>
    </Container>
  );
};

export default Salary;
