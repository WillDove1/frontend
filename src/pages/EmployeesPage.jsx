import { useEffect } from 'react';
import { useEmployees } from '../context/EmployeesContext';
import { useNavigate } from 'react-router-dom';
import EmployeeCard from '../components/EmployeeCard';

function EmployeesForm(){
    const {register, handleSubmit} = useForm();
    const {createEmployee} = useEmployees();
    const navigate = useNavigate();
    
    const onSubmit = handleSubmit((data)=>{
        createEmployee(data);
        navigate('/employees');

    })
}

function EmployeesPage() {
    const { getEmployees, employees } = useEmployees();

    useEffect(() => {
        getEmployees();
    }, []);

    if(employees.length === 0) {
        return <h1>No hay empleados para listar</h1>;
    }

    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
            {
                employees.map((employee) => (
                <EmployeeCard employee={employee} 
                key={employee._id} 
                />
            ))}
        </div>
    );
}

export default EmployeesPage;
