import { CardsInterface } from './interface';
import './style.css';
import Image from 'next/image';

// Componente responsável por criar o card da página inicial (WhatNew)
function CardWhatNew(props: CardsInterface) {
    return (
        <div className='card card-whats-new'>
            <Image className='imgPrincipalCard' src={props.imgCard} alt={props.altImgCard} width={500} height={350} />
            <div className='contentCard'>
                <p className='mb-4'>{props.paragraph}</p>
                <a className='linkcard' href={props.link}>{props.textLink}</a>
            </div>
        </div>
    );
}

export default CardWhatNew;