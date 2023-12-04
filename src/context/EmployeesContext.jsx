import { createContext, useContext, useState } from "react";
import {
  createEmployeeRequest,
  getEmployeesRequest,
  deleteEmployeeRequest,
  getEmployeeRequest,
  updateEmployeeRequest
} from '../api/employees';

const EmployeesContext = createContext();

export const useEmployees = () => {
  const context = useContext(EmployeesContext);

  if (!context) {
    throw new Error("useEmployees debe estar dentro de un EmployeesProvider");
  }

  return context;
};

export function EmployeesProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  const createEmployee = async (employee) => {
    try {
      await createEmployeeRequest(employee);
      getEmployees(); // Llama a la función getProviders después de crear un proveedor
    } catch (error) {
    }
  };

  const getEmployees = async () => {
    try {
      const res = await getEmployeesRequest();
      setEmployees(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await deleteEmployeeRequest(id);
      setEmployees(employees.filter(employee => employee._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const getEmployeeById = async (id) => {
    try {
      const res = await getEmployeeRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const editEmployee = async (id, employee) => {
    try {
      await updateEmployeeRequest(id, employee);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        createEmployee,
        getEmployees,
        deleteEmployee,
        getEmployeeById,
        editEmployee
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}
