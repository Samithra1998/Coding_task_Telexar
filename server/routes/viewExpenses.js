import express from 'express';
import { viewExpenses, deleteExpenses } from '../controlers/expenses.js';

const routes = express.Router();

routes.get('/', viewExpenses);
routes.delete('/:id', deleteExpenses);

export default routes;