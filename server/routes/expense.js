import express from 'express';
import { addExpenses } from '../controlers/expenses.js';

const routes = express.Router();

routes.post('/', addExpenses);

export default routes;