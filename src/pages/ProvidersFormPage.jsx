import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { IoBagAdd } from 'react-icons/io5';
import { useProviders } from '../context/ProvidersContext';

const ProvidersFormPage = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      price: 0.0
    }
  });
  const { createProvider, getProviderById, editProvider } = useProviders();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProvider() {
      if (id) {
        const providerData = await getProviderById(id);
        setValue('name', providerData.name);
        setValue('price', providerData.price);
        setValue('productName', providerData.productName);
      }
    }
    loadProvider();
  }, [id, getProviderById, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (id) {
        await editProvider(id, data);
      } else {
        await createProvider(data);
      }
      navigate('/providers');
    } catch (error) {
      console.error('Error al actualizar el proveedor:', error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <h1 className="text-3xl font-bold my-2">Proveedores</h1>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre del proveedor"
            {...register('name', { required: true })}
            autoFocus
          />
          {errors.name && <div className="text-red-500">Nombre del proveedor es requerido</div>}

          <label htmlFor="price">Precio</label>
          <input
            type="number"
            step="0.10"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Precio del proveedor"
            {...register('price', {
              required: true,
              min: 0.0,
              valueAsNumber: true,
            })}
          />
          {errors.price && <div className="text-red-500">Precio del proveedor es requerido</div>}
          {errors.price?.type === 'min' && <div className="text-red-500">El precio mínimo es 0</div>}

          <label htmlFor="productName">Nombre del producto</label>
          <input
            type="text"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre del producto"
            {...register('productName', { required: true })}
          />
          {errors.productName && <div className="text-red-500">Nombre del producto es requerido</div>}

          <button className="bg-zinc-700 px-3 py-3 rounded-md" type="submit">
            <IoBagAdd size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProvidersFormPage;
