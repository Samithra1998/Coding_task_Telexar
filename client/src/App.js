import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";
import Expenses from "./components/Expenses/Expenses";
import ViewExpenses from "./components/ViewExpenses/viewExpenses";
import Salary from "./components/Salary/Salary";

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path='/expenses' exact element={<Expenses/>}/>
        <Route path='/viewexpenses' exact element={<ViewExpenses/>}/>
        <Route path='/mysalary' exact element={<Salary/>}/>
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
