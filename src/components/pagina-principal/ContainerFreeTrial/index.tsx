import Button from '@/components/Button';
import Image from 'next/image';
import './style.css';
import ContainerFreeTrialProps from './interface';
export default function ContainerFreeTrial(props: ContainerFreeTrialProps) {
    return (
        <section className="container-free-trial flex mb-16">
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
            <Button class='large' link='/free-trial' text={props.textButton} />
            <Image className="imgFreeTrial" src='/image-index/experiemente-gratuitamente.webp' alt={props.altImgContainer} width={1000} height={1000} layout="responsive"/>
        </section>
    );
};