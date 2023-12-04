import axios from './axios';

export const getEmployeesRequest = () => axios.get('/employees');
export const getEmployeeRequest = (id) =>axios.put('/employees/'+id);

export const createEmployeeRequest = (employee) => axios.post('/employees',employee);

export const deleteEmployeeRequest = (id) =>axios.delete('/employees/' + id);
export const updateEmployeeRequest = (id,employee) =>axios.put('/employees/' + id, employee);