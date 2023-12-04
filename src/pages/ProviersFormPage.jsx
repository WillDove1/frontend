import {useForm} from 'react-hook-form';
import {useProviders} from '../context/ProvidersContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { IoBag, IoBagAdd } from 'react-icons/io5';

function ProviersFormPage() {
    const {register,handleSubmit, setValue, formState: {errors}} = useForm();
    {
        defaultValues:{
            year: new Date().getFullYear();
            price:0.0
        }
    }

    const {providers, createProvider, getProvider, updateProvider} = useProviders();
    const navigate = useNavigate();
    const params = useParams();
    console.log(providers);

    useEffect(()=>{
        async function loadProvider(){
            if(params.id){
                const provider = await getProvider(params.id);
                setValue('productName',provider.productName);
                setValue('price',provider.price);
                setValue('name',provider.name);
                
            }
        }
        loadProvider();
    }, [])

    const onSubmit = handleSubmit( (data)=>{
        if(params.id){
            updateProvider(params.id, data);
            console.log(data);
        }else{
            createProvider(data);
        }
        navigate('/products');
        
    })
    return (
        <div className='flex items-center justify-center h-screen'>
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>
            <h1 className='text-3xl font-bold my-2'>Proveedores</h1>
            <label htmlFor="nameProduct">Nombre del producto</label>
            <input type="text"
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Nombre del producto' 
                {
                    ...register("nameProduct", {required:true})
                }
                autoFocus
            />
            { errors.nameProduct && (
                <div className='text-red-500'>Nombre del producto es requerido</div>
            )}

            <label htmlFor="price">Precio</label>
            <input type="number" step = "0.10"
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Precio del producto'
                {
                    ...register("price",{
                        required:true,
                        min:0.0,
                        valueAsNumber: true,
                    })
                }
            />
            { errors.price && (
                <div className='text-red-500'>Precio del producto es requerido</div>
            )}
            {errors.price?.type === "min" && (
                <div className='text-red-500'>El precio minimo es 0</div>
            )

            }

            <label htmlFor="name">Proveedor</label>
            <input type="text"
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Nombre del proveedor'
                {
                    ...register("name", {required:true})
                }
            />
            { errors.name && (
                <div className='text-red-500'>Nombre del proveedor es requerido</div>
            )}

            <button className='bg-zinc-700 px-3 py-3 rounded-md' 
            type='submit'
            >
                <IoBagAdd size={30}/>
            </button>
        </form>
        </div>
        </div>
    )
}

export default ProviersFormPage