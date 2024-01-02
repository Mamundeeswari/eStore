import { useSelector } from 'react-redux';
import './SideNav.css';
import { accordionSlice } from '../../store/slices/accordion/accordionSlice';

export function SideNav() {
    const categories = useSelector(accordionSlice.getInitialState);
    return(
    <div className='side-nav'>
    <div className='section-title'>
        <h3>Categories</h3>
    </div>
    {categories.map((category,index) => {
        return(
            <>
            <div className="accordion">
        <div className="accordion-item individual-category">
            <div className="accordion-header">
                <button className="accordion-button" href={`#accordion-heading-${index}`} data-bs-target={`#accordion-heading-${index}`} data-bs-toggle="collapse" aria-expanded="false" aria-controls={`#accordion-heading-${index}`} > {category.category}<span className="accordion-icon">▼</span></button>
            </div>
        </div>
    </div>
    <div className="accordion-collapse collapse show" id={`accordion-heading-${index}`}>
                <div className="accordion-body">
                     <ul className="accordion-list">
                        {category.subCategories.map((subCategory,index)=><li key={index} className='sub-items'><a href="/">{subCategory}</a></li>)}
                     </ul>
                </div>
           
        </div>
        </>
        );
    })}
    </div>);
}