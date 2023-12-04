import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { IoBagAdd } from 'react-icons/io5';
import { useEmployees } from '../context/EmployeesContext';

const EmployeesFormPage = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      price: 0.0
    }
  });
  const { createEmployee, getEmployeeById, editEmployee } = useEmployees();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadEmployee() {
      if (id) {
        const employeeData = await getEmployeeById(id);
        setValue('name', employeeData.name);
        setValue('salary', employeeData.salary);
        setValue('age', employeeData.age);
        setValue('position', employeeData.position);
        setValue('schedule', employeeData.schedule);
      }
    }
    loadEmployee();
  }, [id, getEmployeeById, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (id) {
        await editEmployee(id, data);
      } else {
        await createEmployee(data);
      }
      navigate('/employees');
    } catch (error) {
      console.error('Error al actualizar el empleado:', error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <h1 className="text-3xl font-bold my-2">Empleados</h1>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre del empleado"
            {...register('name', { required: true })}
            autoFocus
          />
          {errors.name && <div className="text-red-500">Nombre del empleado es requerido</div>}

          <label htmlFor="salary">Salario</label>
          <input
            type="number"
            step="0.10"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Salario del empleado"
            {...register('salary', {
              required: true,
              min: 0.0,
              valueAsNumber: true,
            })}
          />
          {errors.salary && <div className="text-red-500">Salario del emleado es requerido</div>}
          {errors.salary?.type === 'min' && <div className="text-red-500">El salario mínimo es 0</div>}

          <label htmlFor="age">Edad del empleado</label>
          <input
            type="number"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Edad del empleado"
            {...register('age', { 
                required: true,
                min: 18.0,
                valueAsNumber: true,
            })}
          />
          {errors.age && <div className="text-red-500">Edad del empleado es requerido</div>}

          <label htmlFor="position">Puesto</label>
          <input
            type="text"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Puesto del empleado"
            {...register('position', { required: true })}
            autoFocus
          />
          {errors.position && <div className="text-red-500">Puesto del empleado es requerido</div>}

          <label htmlFor="schedule">Horario</label>
          <input
            type="text"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Horario del empleado"
            {...register('schedule', { required: true })}
            autoFocus
          />
          {errors.schedule && <div className="text-red-500">Horario del empleado es requerido</div>}

          <button className="bg-zinc-700 px-3 py-3 rounded-md" type="submit">
            <IoBagAdd size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeesFormPage;
