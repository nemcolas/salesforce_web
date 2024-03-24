import CardOurClients from '../../Cards/OurClients'
import './style.css'
export default function NossosClientes() {
    return (
        <section className='mb-40 containerNossosClientes'>
            <h2 className='text-center'>Nossos clientes</h2>
            <div className='flex justify-center flex-wrap'>
                <CardOurClients title='Sumup' img='/image-index/sumup-customers-home.webp' alt='logo da empresa Sumup com flores e arbustos ao fundo' paragraph='Serviços Finaceiros' link='https://www.salesforce.com/br/customer-success-stories/sumup/' />
                <CardOurClients title='Gympass' img='/image-index/gympass-customers-home.webp' alt='logo da empresa Gympass com flores e arbustos ao fundo' paragraph='Saúde' link='https://www.salesforce.com/br/customer-success-stories/gympass/' />

                <CardOurClients title='Vipal Borrachas' img='/image-index/vipal-customers-home.webp' alt='logo da empresa Vipal com flores e arbustos ao fundo' paragraph='Manufatura' link='https://www.salesforce.com/br/customer-success-stories/vipal-borrachas/' />

                <CardOurClients title='Grupo Tigre' img='/image-index/tigre-customers-home.webp' alt='logo da empresa Grupo Tigre com flores e arbustos ao fundo' paragraph='Construção civil' link='https://www.salesforce.com/br/customer-success-stories/grupo-tigre/' />
            </div>
        </section>
    )
}