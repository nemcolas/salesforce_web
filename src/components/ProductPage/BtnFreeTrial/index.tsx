import Link from "next/link";
import BtnFreeTrialProps from "./interface";
function BtnFreeTrial(props:BtnFreeTrialProps) {
  return(
    <Link href={props.link}>{props.text}</Link>
  );
};

export default BtnFreeTrial;