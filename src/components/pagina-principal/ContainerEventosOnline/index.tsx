import CardsOurEvents from '../CardOurEvents'
import './style.css'


// Componente responsável por criar um container que terá os cards de eventos online
export default function ContainerEventosOnline() {
    return (
        <section className='mb-40 containerEventosOnline'>
            <h2 className='text-center'>Eventos online e Aprendizado</h2>
            <div className='flex justify-center flex-wrap'>
                <CardsOurEvents img='/image-index/home-news-bar-evergreen-events.webp' alt='pessoas sorridentes batendo palma em um fundo de nuvem' paragraphTop='Eventos'
                    paragraph='Mergulhe em paixão, aprendizado e conhecimento' bottomLinkText='Explore os eventos' bottomLink='https://www.salesforce.com/br/events/' />

                <CardsOurEvents img='/image-index/php-sf-blog.webp' alt='Astro acenando com uma bengala na mao a frente de uma floresta' paragraphTop='Blog'
                    paragraph='Aprenda tudo sobre o Customer 360 em workshops práticos(Inglês)' bottomLinkText='Saiba mais' bottomLink='https://cs.salesforce.com/?_ga=2.246456652.970257102.1710510944-2068240218.1707590733' />

                <CardsOurEvents img='/image-index/salesforce-inteligencia-artificial.webp' alt='Einstein atras de uma mesa com livros em cima dela, e mostrando calculos na lousa ao fundo' paragraphTop='Webinars'
                    paragraph='Descubra como impulsionar o crescimento com o Salesforce gratuitamente' bottomLinkText='Assista aos webinars' bottomLink='https://www.salesforce.com/br/resources/webinars/?d=cta-events-3-ungated-webinars#!page=1' />
            </div>
        </section>
    )
}    