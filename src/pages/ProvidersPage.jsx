import { useEffect } from 'react';
import { useProviders } from '../context/ProvidersContext';
import { useNavigate } from 'react-router-dom';
import ProviderCard from '../components/ProviderCard';

function ProvidersForm(){
    const {register, handleSubmit} = useForm();
    const {createProvider} = useProviders();
    const navigate = useNavigate();
    
    const onSubmit = handleSubmit((data)=>{
        createProvider(data);
        navigate('/providers');

    })
}

function ProvidersPage() {
    const { getProviders, providers } = useProviders();

    useEffect(() => {
        getProviders();
    }, []);

    if(providers.length === 0) {
        return <h1>No hay proveedores para listar</h1>;
    }

    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
            {
                providers.map((provider) => (
                <ProviderCard provider={provider} 
                key={provider._id} 
                />
            ))}
        </div>
    );
}

export default ProvidersPage;
