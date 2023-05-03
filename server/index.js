import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from './routes/user.js';
import expenseRoutes from './routes/expense.js';
import viewExpenses from './routes/viewExpenses.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);
app.use('/viewexpenses', viewExpenses);

const CONNECTION_URL =
  "mongodb+srv://Sami98:Sami1998@cluster0.ydfjd4e.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is Running on Port ${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
