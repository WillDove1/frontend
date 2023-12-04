import React from 'react'
import { useEmployees } from '../context/EmployeesContext'
import {Link} from 'react-router-dom'
import { IoTrashBinSharp, IoPencilSharp} from 'react-icons/io5'

function EmployeeCard({ employee }) {
    const { deleteEmployee } = useEmployees();

    return (
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <header className='flex justify-between'>
                <h1 className='text-1xl font-bold'>{employee.name}</h1>
                <div className='flex gap-x-2 items-center'>
                    <button
                        className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'
                        onClick={() => {
                            deleteEmployee(employee._id);
                        }}
                    >
                        <IoTrashBinSharp />
                    </button>
                    <Link
                        to={`/employee/${employee._id}`}
                        className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg'
                    >
                        <IoPencilSharp />
                    </Link>
                </div>
            </header>
            <p className='text-slate-300 my-2'>
                Edad: {employee.age}
            </p>
            <p className='text-slate-300 my-2'>
                Puesto: {employee.position}
            </p>
            <p className='text-slate-300 my-2'>
                Salario: {employee.salary}
            </p>
            <p className='text-slate-300 my-2'>
                Horario: {employee.schedule}
            </p>
        </div>
    );
}

export default EmployeeCard;
