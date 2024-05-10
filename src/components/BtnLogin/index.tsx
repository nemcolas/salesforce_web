import {BtnLoginProps} from './interface'
import './style.css'
export default function BtnLogin(props: BtnLoginProps) {
    return (
        <a aria-label={props.arialabel} className='btn-login' href={props.linkBtn}><img src={props.linkImg} alt={props.altImg}/><p>{props.textoBtn}</p></a>
    )
}