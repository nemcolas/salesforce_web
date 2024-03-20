import Image from 'next/image';
import Button from '../../Button';
import ProductCardProps from './interface';
import './styles.css';


function ProductCard(props: ProductCardProps){ 
    return ( <div className="card">
    <Image className='CardImage' src={props.img} alt={props.altImg} width={500} height={300} />
    <h3 >{props.title}</h3>
    <p>{props.paragraph}</p>
    <Button text='Saiba mais' link='#'></Button>
  </div>

    )
};

export default ProductCard;