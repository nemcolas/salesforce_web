import { CardsInterface } from './interface';
import './style.css';

function Cards(props: CardsInterface) {
    return (
        <div className='card threeCards'>
            <img className='imgPrincipalCard' src={props.imgCard} alt={props.altImgCard} />
            <div className='contentCard'>
                <p className='mb-4'>{props.paragraph}</p>
                <a href={props.link}>{props.textLink}</a>
            </div>
        </div>
    );
}

export default Cards;