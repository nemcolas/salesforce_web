import './style.css';
import {ButtonProps} from '../interface/interface';
import Link from 'next/link';

export default function button(props: ButtonProps){
    return (
        <Link className={'btn ' + props.class} href={props.link}>{props.text}</Link>
    )
}