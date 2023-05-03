import {CREATE,GET,DELETE} from '../constants/actionType'

const expenses = (expenses=[], action) => {
    switch (action.type) {
        case CREATE:
            return [...expenses, action.payload];
        case GET:
            return action.payload;
        case DELETE:
            return expenses.filter((p) => p._id !== action.payload)
        default:
            return expenses;
           
    }
}

export default expenses;