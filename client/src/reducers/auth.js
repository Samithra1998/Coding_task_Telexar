import { AUTH,LOGOUT,SALARY } from "../constants/actionType";

const authRed = (state = {authData : null},action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('Authentication', JSON.stringify({...action?.data}))
      return { ...state, authData: action?.data}
    // case SALARY:
    //     localStorage.setItem('Salary', JSON.stringify({...action?.data}))
    //     return {...state,salarayData: action?.data}
    case LOGOUT:
      localStorage.clear();
      return {...state,authData: null};
    default:
      return state;
      
  }
}

export default authRed;

