import Button from '../../Button';
import EspecialistaEAppsProps from './interface';
import './style.css';

function EspecialistaEApps(props: EspecialistaEAppsProps) {
    return (
        <section className='flex container-EspecialistaEApps'>
            <img src="/image-products/appy.svg" alt="Appy, mascote da Salesforce saltitante." className='image' />
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <h2>{props.title}</h2>
                    <p>{props.paragraph}</p>
                </div>
                <div className='buttonContainer'>
                    <Button text='Saiba mais' link={props.link} />
                </div>
            </div>
        </section>
    );
};
export default EspecialistaEApps;


