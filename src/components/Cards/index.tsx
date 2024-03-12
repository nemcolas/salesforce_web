import { CardsInterface } from '../interface/interface'
import { CardOurProducts } from '../interface/homePageInterfaces'
import './style.css'
import Button from '../Button'


function Cards(props: CardsInterface) {
    const paginaPrincipal = props.homePage;
    return (
        <div className='card'>
            <img src={props.imgCard} alt={props.altImgCard} />
            <div className='contentCard'>
                {props.homePage ? props.children : null}
                <p className='mb-4'>{props.paragraph}</p>
                {props.homePage ? null : props.children}
            </div>
        </div>
    )
}

function CardOurProducts(props: CardOurProducts) {
    return (
        <div className='flex cardOurProducts'>
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

export { Cards, CardOurProducts }