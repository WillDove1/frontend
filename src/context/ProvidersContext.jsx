import {createContext, useContext, useState} from "react";
import {createProviderRequest, getProvidersRequest, deleteProviderRequest, getProviderRequest, updateProviderRequest} from '../api/providers'

const ProvidersContext = createContext();

export const useProviders = ()=>{
    const context = useContext(ProvidersContext);

    if(!context){
        throw new Error("useProviders debe estar dentro de un ProvidersProvider")
    }

    return context;
}

export function ProvidersProvider( {children}){
    const [providers, setProviders] = useState([])

    const createProvider = async (provider) =>{
        try {
            //console.log(product);
            await createProviderRequest(provider);
            getProvider();
        } catch (error) {
            
        }
    }

    const getProviders = async ()=>{
        try{
            const res = await getProvidersRequest();
            setProviders(res.data);
            //console.log(res);
        }catch(error){
            console.log(error);
        }
    }

    const deleteProvider = async (id) => {
        try {
            const res = await deleteProviderRequest(id);
            //console.log(res.data);
            if(res.status == 200)
                setProviders(providers.filter(provider => provider._id != id));
        } catch (error) {
            console.log(error)
        }
    }

    const getProvider = async(id)=>{
        try {
            const res = await getProviderRequest(id)
            //console.log(res);
            return res.data
            
        } catch (error) {
            console.log(error)
            
        }
    }

    const updateProvider = async (id, provider)=>{
        try{
            await updateProviderRequest(id,provider);
        }catch(error){
            console.log(error)
        }
    }

    return(
        <ProvidersContext.Provider value={{
            providers,
            createProvider,
            getProviders,
            deleteProvider,
            getProvider,
            updateProvider
        }}>
            {children}
        </ProvidersContext.Provider>
    )
}