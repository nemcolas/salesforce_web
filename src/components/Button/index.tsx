import './style.css';
import {ButtonProps} from '../interface/interface';

export default function button(props: ButtonProps){
    return (
        <a className='btn' href={props.link}>{props.text}</a>
    )
}