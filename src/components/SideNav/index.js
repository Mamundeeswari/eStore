import './SideNav.css';

export function SideNav() {
    return(
    <div className='side-nav'>
    <div className='section-title'>
        <h3>Categories</h3>
    </div>
    
    <div className="accordion">
        <div className="accordion-item individual-category">
            <div className="accordion-header">
                <button className="accordion-button" href="#accordion-heading-one" data-bs-target="#accordion-heading-one" data-bs-toggle="collapse" aria-expanded="false" aria-controls="#accordion-heading-one" > Men<span className="accordion-icon">▼</span></button>
            </div>
        </div>
    </div>
    <div className="accordion-collapse collapse show" id="accordion-heading-one">
                <div className="accordion-body">
                     <ul className="accordion-list">
                          <li className='sub-items'><a href="/">Shirts</a></li>
                          <li className='sub-items'><a href="/">Pants</a></li>
                          <li className='sub-items'><a href="/">Shoes</a></li>
                          <li className='sub-items'><a href="/">Accessories</a></li>
                     </ul>
                </div>
           
        </div>
        <div className="accordion">
        <div className="accordion-item individual-category">
            <div className="accordion-header">
                <button className="accordion-button" href="#accordion-heading-two" data-bs-target="#accordion-heading-two" data-bs-toggle="collapse" aria-expanded="false" aria-controls="#accordion-heading-two" > Women<span className="accordion-icon">▼</span></button>
            </div>
        </div>
    </div>
    <div className="accordion-collapse collapse show" id="accordion-heading-two">
                <div className="accordion-body">
                     <ul className="accordion-list">
                          <li className='sub-items'><a href="/">Shirts</a></li>
                          <li className='sub-items'><a href="/">Pants</a></li>
                          <li className='sub-items'><a href="/">Shoes</a></li>
                          <li className='sub-items'><a href="/">Accessories</a></li>
                     </ul>
                </div>
           
        </div>
        <div className="accordion">
        <div className="accordion-item individual-category">
            <div className="accordion-header">
                <button className="accordion-button" href="#accordion-heading-three" data-bs-target="#accordion-heading-three" data-bs-toggle="collapse" aria-expanded="false" aria-controls="#accordion-heading-three" > Boys<span className="accordion-icon">▼</span></button>
            </div>
        </div>
    </div>
    <div className="accordion-collapse collapse show" id="accordion-heading-three">
                <div className="accordion-body">
                     <ul className="accordion-list">
                          <li className='sub-items'><a href="/">Shirts</a></li>
                          <li className='sub-items'><a href="/">Pants</a></li>
                          <li className='sub-items'><a href="/">Shoes</a></li>
                          <li className='sub-items'><a href="/">Accessories</a></li>
                     </ul>
                </div>
           
        </div>
        <div className="accordion">
        <div className="accordion-item individual-category">
            <div className="accordion-header">
                <button className="accordion-button" href="#accordion-heading-four" data-bs-target="#accordion-heading-four" data-bs-toggle="collapse" aria-expanded="false" aria-controls="#accordion-heading-four" > Girls<span className="accordion-icon">▼</span></button>
            </div>
        </div>
    </div>
    <div className="accordion-collapse collapse show" id="accordion-heading-four">
                <div className="accordion-body">
                     <ul className="accordion-list">
                          <li className='sub-items'><a href="/">Shirts</a></li>
                          <li className='sub-items'><a href="/">Pants</a></li>
                          <li className='sub-items'><a href="/">Shoes</a></li>
                          <li className='sub-items'><a href="/">Accessories</a></li>
                     </ul>
                </div>
           
        </div>
    </div>);
}