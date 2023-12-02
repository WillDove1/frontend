import axios from './axios';

export const getProductsRequest = () => axios.get('/productos');
export const getProductRequest = (id) =>axios.put('/productos/'+id);

export const createProductRequest = (product) => axios.post('/productos',product);

export const deleteProductRequest = (id) =>axios.delete('/productos/' + id);
export const updateProductRequest = (id,product) =>axios.put('/productos/' + id, product);