// Componente responsável por criar o botão Solicite Demonstração

import Link from "next/link";
import './style.css';
import BtnSoliciteDemonstracaoProps from "./interface";
function BtnLearnMore(props: BtnSoliciteDemonstracaoProps) {
  return (
    <Link aria-label={props.arialabel} className="btnSolicitarDemonstracao flex button" href={props.linkSolicitarDemonstracao}>Solicitar Demonstração</Link>
  );
};

export default BtnLearnMore;