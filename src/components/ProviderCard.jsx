import React from 'react'
import { useProviders } from '../context/ProvidersContext'
import {Link} from 'react-router-dom'
import { IoTrashBinSharp, IoPencilSharp} from 'react-icons/io5'

function ProviderCard({ provider }) {
    const { deleteProvider } = useProviders();

    return (
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <header className='flex justify-between'>
                <h1 className='text-1xl font-bold'>{provider.name}</h1>
                <div className='flex gap-x-2 items-center'>
                    <button
                        className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'
                        onClick={() => {
                            deleteProvider(provider._id);
                        }}
                    >
                        <IoTrashBinSharp />
                    </button>
                    <Link
                        to={`/provider/${provider._id}`}
                        className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg'
                    >
                        <IoPencilSharp />
                    </Link>
                </div>
            </header>
            <p className='text-slate-300 my-2'>
                {provider.productName}
            </p>
            <p className='text-slate-300 my-2'>
                {provider.price}
            </p>
        </div>
    );
}

export default ProviderCard;
