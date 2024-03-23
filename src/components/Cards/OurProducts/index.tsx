import Button from '../../Button'
import { CardOurProductsInterface } from './interface'
import Image from 'next/image';
import './style.css'

function CardOurProducts(props: CardOurProductsInterface) {
    return (
        <div className='flex cardOurProducts threeCards flex-wrap'>
            <div className="info-product flex">
                <h3 className='text-lg'>{props.title}</h3>
                <p className='text-base'>{props.paragraph}</p>
                <Button class='small' link={props.buttonLink}text="Saiba Mais"/>
            </div>
            <Image className='image-peaple' src={props.img}
                alt={props.alt} width={200} height={200}/>
        </div>
    )
}

export default CardOurProducts;