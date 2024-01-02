import { useSelector } from 'react-redux';
import './CatNav.css';
import { categorySlice } from '../../store/slices/category/categorySlice';
export function CatNav() {
    const categories = useSelector(categorySlice.getInitialState);
    return(
        <>
        <div className=' cat-nav-container header'>
            <ul className='list'>
                {categories.map((category,index) => <li key={index}><a href="/">{category}</a></li>)}  
            </ul>
        </div>
        </>
    );
};