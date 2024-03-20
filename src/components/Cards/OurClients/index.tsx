import { CardOurClientsInterface } from "./interface"
import './style.css'
import Image from 'next/image'
function CardOurClients(props:CardOurClientsInterface) {
    return (
        <div className='card card-client'>
            <Image className="imageCardClient" src={props.img} alt={props.alt} width={300} height={230} />
            <h3 className=''>{props.title}</h3>
            <div className='text-center'>
                <h4>Indústria</h4>
                <p>{props.paragraph}</p>
            </div>
            <a href={props.link}>Veja a História</a>
        </div>
    )
}

export default CardOurClients;