import {useEffect} from 'react';
import {useProducts} from '../context/ProductsContext';
import {useNavigate} from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function ProductsForm(){
    const {register, handleSubmit} = useForm();
    const {createProduct} = useProducts();
    const navigate = useNavigate();
    
    const onSubmit = handleSubmit((data)=>{
        createProduct(data);
        navigate('/products');

    })
}

function ProductsPage() {
    const {getProducts, products} = useProducts();

    useEffect( ()=>{
        getProducts();
    }, [])

    if(products.lenght === 0)
        return (<h1>No hay productos para listar</h1>)
    
    return (
        <div className='grid sm:grid-cols-2 md:grid.cols-3 gap-2'>
            {
                products.map((product)=>(
                    <ProductCard product={product}
                                key={product._id}

                    />
                ))
            }
        </div>
    )
}

export default ProductsPage