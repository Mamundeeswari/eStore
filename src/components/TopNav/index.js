import './TopNav.css';
export function TopNav() {
    return(
        <div>
         <div className='header bg-dark'>
      <div className='row'>
        <div className='brand my-1'>
          <h1>eStore</h1>
        </div>
        <div className='inp-container p-0 my-4 w-50 h-25 bg-white'>
          <div className='dropdown m-0 p-0'>
            <select className='select-btn w-100 p-0 m-0'>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>
            </div>
          <input className='form-control' placeholder='Search'/>
          <button> <i className='fa fa-search'/></button>
        </div>
        <div className='login-container'>
          <i className='fa fa-user-circle user-icon'/>
          <h5><a href="/">Login</a> /<a href="/">Register</a></h5>
        </div>
        <div className='cart-container'>
        <i className='fa fa-heart heart-icon'/>
          <i className='fa fa-shopping-cart cart-icon'/>
          </div>
      </div>
      </div>   
        </div>
    );
}