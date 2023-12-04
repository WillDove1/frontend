import { createContext, useContext, useState } from "react";
import {
  createProviderRequest,
  getProvidersRequest,
  deleteProviderRequest,
  getProviderRequest,
  updateProviderRequest
} from '../api/providers';

const ProvidersContext = createContext();

export const useProviders = () => {
  const context = useContext(ProvidersContext);

  if (!context) {
    throw new Error("useProviders debe estar dentro de un ProvidersProvider");
  }

  return context;
};

export function ProvidersProvider({ children }) {
  const [providers, setProviders] = useState([]);

  const createProvider = async (provider) => {
    try {
      await createProviderRequest(provider);
      getProviders(); // Llama a la función getProviders después de crear un proveedor
    } catch (error) {
    }
  };

  const getProviders = async () => {
    try {
      const res = await getProvidersRequest();
      setProviders(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProvider = async (id) => {
    try {
      await deleteProviderRequest(id);
      setProviders(providers.filter(provider => provider._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const getProviderById = async (id) => {
    try {
      const res = await getProviderRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const editProvider = async (id, provider) => {
    try {
      await updateProviderRequest(id, provider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProvidersContext.Provider
      value={{
        providers,
        createProvider,
        getProviders,
        deleteProvider,
        getProviderById,
        editProvider
      }}
    >
      {children}
    </ProvidersContext.Provider>
  );
}
