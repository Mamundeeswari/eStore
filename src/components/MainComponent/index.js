import { Products } from '../Products';
import { SideNav } from '../SideNav';
import './MainComponent.css';

export function MainComponent() {
    return(
    <>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-sm-2'>
        <SideNav/>
    </div>
   
    <div className='col-lg-10 col-md-4 col-sm-4 product-container'>
    <Products/>
    </div>
    </div>
    </div>
    </>);
}