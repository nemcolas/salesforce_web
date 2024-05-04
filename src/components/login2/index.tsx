import Image from 'next/image';
import Button from '../Button';
import loginProps from './interface';
import './style.css';

// Componente responsável por criar um bloco de login
export default function Login(props: loginProps) {
    return (
        <section className='flex login mb-10'>
            <div className='flex gap-4'>
                <Image className='imgLogoSalesforce' src="/salesforce-logo.svg" alt="logo da salesforce" width={80} height={80} />
                <div>
                    <h1 className='login-title'>Faça login com <span>{props.typeLogin}</span></h1>
                    <p>
                        {props.paragraph}
                    </p>
                </div>
                <Button class='large' text='Login' link={props.linkButton} />
            </div>
            <div>
                <Image src="public\image-login\Astro-login2.png" alt={props.altImgLogin} width={400} height={300} />
            </div>
        </section>
    )
}