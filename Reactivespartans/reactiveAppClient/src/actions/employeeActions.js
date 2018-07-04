import * as types from './actionTypes';
import employeeApi from '../services/api/empApi';

export const readEmployee = (id) => {
  return dispatch => {
    dispatch(sendRequest());
    employeeApi.readEmployee(id).then(response => {      
      if (!response.ok) {
        return response.json().then(error => {
          dispatch(requestEmployeesError(errorMsg))
          notification.error({
            message: errorMsg
          });
        });
      }
      response.json().then(employee => {        
        employee = convertedEmployee(employee);
        dispatch(readEmployeeSuccess(employee, history));
      })
    }).catch(error => {
      const errorMsg = `Error in sending data to server: ${error.message}`;
      dispatch(requestEmployeesError(errorMsg))
    });
  }
};
