import {BtnLoginProps} from './interface'
import './style.css'
export default function BtnLogin(props: BtnLoginProps) {
    return (
        <a className='btn-login' href={props.linkBtn}><img src={props.linkImg}/><p>{props.textoBtn}</p></a>
    )
}