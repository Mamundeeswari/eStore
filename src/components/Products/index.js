import './Products.css';
export function Products(){
    const products=[
        {
            id:1,
            pName:'Jacket',
            price:'£70',
            image:require('./coat.jpg'),
            rating:4
        },
        {
            id:2,
            pName:'Jacket',
            price:'£70',
            image:require('./coat.jpg'),
            rating:4
        },
        {
            id:3,
            pName:'Jacket',
            price:'£70',
            image:require('./coat.jpg'),
            rating:3
        },
        {
            id:3,
            pName:'Jacket',
            price:'£70',
            image:require('./coat.jpg'),
            rating:3
        },
        {
            id:3,
            pName:'Jacket',
            price:'£70',
            image:require('./coat.jpg'),
            rating:3
        },
        {
            id:3,
            pName:'Jacket',
            price:'£70',
            image:require('./coat.jpg'),
            rating:3
        },
        {
            id:3,
            pName:'Jacket',
            price:'£70',
            image:require('./coat.jpg'),
            rating:3
        },
    ]
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