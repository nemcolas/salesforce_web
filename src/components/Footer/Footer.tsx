'use client'
import { usePathname } from 'next/navigation';
import './footer.css'
import Image from 'next/image';

// Componente responsável por criar o footer de todas as páginas
export default function Footer() {
    return (
        <footer>
            <div className={usePathname() == '/' || usePathname() == '/products'? 'footer-top flex' : 'hidden' + ' footer-top'}>
                <div className="flex footer-contact-info">
                    <a className="logo-salesforce" href="/"><img src="/salesforce-logo.svg" alt="logo da salesforce" /></a>
                    <div className="flex container-social-links">
                        <a href="https://www.facebook.com/SalesforceBrasil/" target="_blank"><img src="facebook.svg" alt="logo do Facebook" /></a>
                        <a href="https://twitter.com/salesforce" target="_blank"><img src="twitter.svg"
                            alt="logo do X (antigo twitter)" /></a>
                        <a href="https://www.linkedin.com/company/salesforce/" target="_blank"><img
                            src="linkedin.svg" alt="logo do Linkedin" /></a>
                        <a href="https://www.instagram.com/salesforcebrasil/" target="_blank"><img
                            src="instagram.svg" alt="logo do Instagram" /></a>
                        <a href="https://www.youtube.com/SalesforceBrasil" target="_blank"><img src="youtube.svg"
                            alt="logo do Youtube" /></a>
                    </div>
                    <p>Entre em contato 1-800-664-9073</p>
                </div>

                <nav className="footer-navigation flex">
                    <div className="intro-links">
                        <h3>Ainda não conhece a Salesforce ?</h3>
                        <ul>
                            <li>
                                <a href="https://www.salesforce.com/br/products/what-is-salesforce/?d=70130000000i7zF">O que
                                    é a Salesforce ?</a>
                            </li>
                            <li>
                                <a href="https://www.salesforce.com/br/products/?d=70130000000i7zU">Explorar todos os
                                    produtos</a>
                            </li>
                            <li>
                                <a href="https://www.salesforce.com/br/editions-pricing/overview/?d=70130000000i7ze">Edições
                                    e preços</a>
                            </li>
                            <li>
                                <a href="https://trailhead.salesforce.com/pt-BR">Trailhead</a>
                            </li>
                            <li>
                                <a href="https://www.salesforce.com/br/customer-success-stories/?d=70130000000i7zZ#!page=1">Histórias
                                    de cliente</a>
                            </li>
                            <li>
                                <a href="https://www.salesforce.com/br/company/privacy/">Política de privacidade</a>
                            </li>
                        </ul>
                    </div>
                    <div className="about-links">
                        <h3>Sobre a Salesforce</h3>
                        <ul>
                            <li><a href="https://www.salesforce.com/br/company/our-story/">Nossa história</a></li>
                            <li><a href="https://www.salesforce.com/br/blog/?d=70130000000i80c">Blog</a></li>
                            <li><a href="https://careers.salesforce.com/en/?d=70130000000i80S">Carreiras(Inglês)</a></li>
                            <li><a href="https://trust.salesforce.com/?d=cta-glob-footer-5"
                                target="_blank">Segurança(Inglês)</a></li>
                            <li><a href="https://www.salesforce.org/?_ga=2.184795497.1783706095.1641930650-1075927308.1636734687"
                                target="_blank">Salesforce.org(Inglês)</a></li>
                            <li><a href="https://www.salesforce.com/company/sustainability/?d=70130000000i80J"
                                target="_blank">Sustentabilidade(Inglês)</a></li>
                            <li><a href="https://investor.salesforce.com/overview/default.aspx?d=cta-glob-footer-7"
                                target="_blank">Investidores(Inglês)</a></li>
                            <li><a href="https://www.salesforce.com/company/feedback/?d=cta-glob-footer-9"
                                target="_blank">Dê-nos o seu feedback(Inglês)</a></li>
                        </ul>
                    </div>
                    <div className="popular-links">
                        <h3>Links populares</h3>
                        <ul>
                            <li><a href="https://www.salesforce.com/products/innovation/">Lançamentos e novos
                                recursos(inglês)</a></li>
                            <li><a href="https://www.salesforce.com/br/solutions/small-business-solutions/overview/">CRM
                                para pequenas empresas</a></li>
                            <li><a href="https://www.salesforce.com/partners/">Parceiros(Inglês)</a></li>
                            <li><a href="https://www.salesforce.com/br/crm/?d=70130000000i80D">O que é CRM ?</a></li>
                            <li><a href="https://www.salesforce.com/video/?d=70130000000i80I">Salesforce live(Inglês)</a>
                            </li>
                            <li><a href="https://www.salesforce.com/dreamforce/?d=70130000000i808"
                                target="_blank">Dreamforce(Inglês)</a></li>
                            <li><a href="https://www.salesforce.com/br/solutions/mobile/overview/?d=70130000000i7zy">Salesforce
                                Mobile</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={usePathname() == '/free-trial' ? 'py-7 px-3 text-center justify-center text-sm flex flex-wrap' : 'hidden'}>
                <p className="mr-3">Saiba mais sobre o nosso compromisso com a proteção de privacidade</p>
                <a className='no-underline text-blue-500' href="https://www.salesforce.com/br/company/privacy/">Destaque de Declaração de privacidade</a>
            </div>
            <div className="footer-bottom flex">
                <div tabIndex={0} className="region-switcher flex flex-wrap">
                    <Image src="/earth-icon.svg" alt="icone do globo terreste em linhas pretas" width={50} height={50}/>
                    <p>Mudar região</p>
                </div>
                <div className="bottom">
                    <nav className="footer-bottom-info">
                        <ul className="flex gap-2 flex-wrap">
                            <li><a href="https://www.salesforce.com/company/legal/">Legal</a></li>
                            <li><a href="https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/">Termos de
                                serviços</a></li>
                            <li><a href="https://www.salesforce.com/br/company/privacy/">Declaração de privacidade</a></li>
                            <li><a href="https://www.salesforce.com/br/company/disclosure/">Divulgação responsável</a></li>
                            <li><a href="https://trust.salesforce.com/">Segurança</a></li>
                            <li><a href="https://www.salesforce.com/br/form/contact/contactme/?d=cta-glob-footer-11">Contato</a>
                            </li>
                        </ul>
                    </nav>
                    <p>&copy; Direitos autorais 2022 Salesforce, Inc. <a
                        href="https://www.salesforce.com/company/legal intellectual/">Todos os direitos reservados</a>.
                        Várias marcas registradas são de
                        propriedade de seus respectivos proprietários. Salesforce, Inc. Salesforce Tower, 415 Mission
                        Street, 3º andar,
                        São Francisco, CA 94105, Estados Unidos</p>
                </div>
            </div>
        </footer>
    )
}
