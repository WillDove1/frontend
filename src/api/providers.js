import axios from './axios';

export const getProvidersRequest = () => axios.get('/providers');
export const getProviderRequest = (id) =>axios.put('/providers/'+id);

export const createProviderRequest = (provider) => axios.post('/providers',provider);

export const deleteProviderRequest = (id) =>axios.delete('/providers/' + id);
export const updateProviderRequest = (id,provider) =>axios.put('/providers/' + id, provider);