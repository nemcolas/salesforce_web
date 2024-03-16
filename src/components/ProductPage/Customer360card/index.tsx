import BtnLearnMore from '../BtnLearnMore';
import Customer360CardProps from './interface';
import './styles.css';



function Customer360Card(props: Customer360CardProps){
    return (
        <section className='flex containerContentLeft justify-between flex-wrap mb-16'>
            <div className='flex flex-col justify-evenly'>
                <h2>{props.title}</h2>
                <p>{props.paragraph}</p>
                <div>
                    <BtnLearnMore link={props.link} text={props.paragraph}/>
                </div>
            </div>
        </section>
    );
};

export default Customer360Card;