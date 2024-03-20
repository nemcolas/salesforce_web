import { CardOurProductsInterface, CardOurClientsInterface } from '../interface/homePageInterfaces'
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

function CardOurClients(props:CardOurClientsInterface) {
    return (
        <div className='card card-client'>
            <img src={props.img} alt={props.alt} />
            <h3 className=''>{props.title}</h3>
            <div className='text-center'>
                <h4>Indústria</h4>
                <p>{props.paragraph}</p>
            </div>
            <a href={props.link}>Veja a História</a>
        </div>
    )
}

export { CardOurProducts, CardOurClients }