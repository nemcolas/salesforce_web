import BtnLearnMoreProps from "./interface";
import "./styles.css";

function BtnLearnMore(props: BtnLearnMoreProps) {
    return(
        <a href={props.link}>{props.text}</a>
    );
};

export default BtnLearnMore;


