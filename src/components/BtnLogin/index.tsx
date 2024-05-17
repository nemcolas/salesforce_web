import {BtnLoginProps} from './interface'
import './style.css'
export default function BtnLogin(props: BtnLoginProps) {
    return (
        <a aria-label={props.arialabel} className='btn-login' href={props.linkBtn}><p>{props.textoBtn}</p><img src={props.linkImg} alt={props.altImg}/></a>
    )
}