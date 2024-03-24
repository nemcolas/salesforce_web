import Image from 'next/image';
import OurEventsProps from './interface';
import './cardOurEvents.css'
export default function CardsOurEvents(props: OurEventsProps) {
    return (
        <div className="cardOurEvents card">
            <Image src={props.img} alt={props.alt} width={500} height={200} />
            <p className='paragraphTop'>{props.paragraphTop}</p>
            <p>{props.paragraph}</p>
            <a className="learning-events-redirect" href={props.bottomLink}>{props.bottomLinkText}</a>
        </div>
    )
}