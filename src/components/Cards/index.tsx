import { CardOurProductsInterface} from '../interface/homePageInterfaces'
import './style.css'
import Button from '../Button'

function CardOurProducts(props: CardOurProductsInterface) {
    return (
        <div className='flex cardOurProducts threeCards'>
            <div className="info-product flex">
                <h3 className='text-lg'>{props.title}</h3>
                <p className='text-base'>{props.paragraph}</p>
                <Button link={props.buttonLink}text="Saiba Mais"/>
            </div>
            <img src={props.img}
                alt={props.alt}/>
        </div>
    )
}

export { CardOurProducts }