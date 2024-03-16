import Image from 'next/image';
import ProductCardProps from './interface';
import './styles.css';


function ProductCard(props: ProductCardProps){ 
    return ( <div className="card">
    <Image src={props.img} alt={props.altImg} width={500} height={300} />
    <h3 >{props.title}</h3>
    <p>{props.paragraph}</p>
  </div>

    )
};

export default ProductCard;