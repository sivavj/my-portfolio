import './product.css';
import LongImg from './../../img/long.jpg'

const Product = () =>{
    return(
        <div className='p'>
            <div className='p-browser'>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
                <div className='p-circle'></div>
            </div>
            <a href='https://www.google.com' target='_blank' rel='noreferrer'>
            <img src={LongImg} alt='' className='p-img'/></a>
        </div>
    )
}
export default Product;