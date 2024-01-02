import { useSelector } from 'react-redux';
import './Products.css';
import { productSlice } from '../../store/slices/product/productSlice';
export function Products(){
    const products=useSelector(productSlice.getInitialState);
    return(
        <div className='product-component' >
        
            {products.map((product)=>(
                <div className=' mt-2 col-lg-3 col-md-6 product-card'>
                <div key={product.id} className='product-image'>
                    <img src={product.image} alt="coat"/>
                </div>
                <div key={product.id} className='product-info'>
                <h6><a href="/">{product.pName}</a></h6>
                <p>{product.price}</p>
            </div>
            <div className='product-rating'>
                <a href="/">Reviews</a>
                <div className='stars'>
                    {Array.from({ length: product.rating }, (_, i) => (
                        <i key={`filled_${i}`} className='fa fa-star filled'></i>
                    ))}
                    {Array.from({ length: 5 - product.rating }, (_, i) => (
                        <i key={`empty_${i}`} className='fa fa-star empty'></i>
                    ))}
                </div>
            </div>
             </div>
            ))}
       
        </div>
    )
}