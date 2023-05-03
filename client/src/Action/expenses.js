import * as api from "../Api/index.js";
import { CREATE, GET, DELETE } from "../constants/actionType.js";

export const addExpenses = (expenseData) => async (dispatch) => {
  try {
    const { data } = await api.addexpenses(expenseData);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const viewExpenses = () => async (dispatch) => {
  try {
    const { data } = await api.viewexpenses();
    dispatch({ type: GET, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeExpenses = (id) => async (dispatch) => {
  try {
    const data = await api.removeexpenses(id);
    dispatch({ type: DELETE, payload: data });
  } catch (error) {}
};
