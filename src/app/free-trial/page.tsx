import React from 'react';
import Image from 'next/image';
export default function FreeTrial() {
    return (
        <main>
            <section>
                <h1>
                    Experimente nossa solução completa de CRM e vendas, grátis por 30 dias
                </h1>
                <h2>Com o Sales Cloud Edition, você tem acesso a:</h2>
                <ul>
                    <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
                    <li>Processos, relatórios e dashboards pré-configurados;</li>
                    <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
                    <li>Guias e outros materiais sobre boas práticas de vendas;</li>
                    <li>Onboarding integrado, treinamentos e webinars online;</li>
                    <li>Configuração de pontuação e roteamento de leads;</li>
                    <li>Ferramentas para automação de tarefas recorrentes;</li>
                    <li>Uma visão completa da performance de seus representantes e equipes de vendas.</li>
                </ul>
                <Image src="/image-free-trial/what-is-astro-product-family.png" alt="tabelas de graficos da salesforce cloud software" width={600} height={600} />
            </section>
            <div>
                <h2>Inscreva-se para comecar sua avaliação gratuita</h2>
                <h3>Preencha o formulário abaixo e em breve entraremos em contato sobre seu teste gratuito</h3>
                <form action="">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" placeholder="Nome" />
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" />
                    <label htmlFor="cargo">Cargo:</label>
                    <input type="text" name="cargo" id="cargo" placeholder="Cargo" />
                    <label htmlFor="email corporativo">Email corporativo:</label>
                    <input type="text" name="email corporativo" id="email corporativo" placeholder="Email corporativo" />
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" name="telefone" id="telefone" placeholder="telefone" />
                    <label htmlFor="tamanho da empresa">Tamanho da empresa:</label>
                    <select name="tamanho da empresa" id="tamanho da empresa">
                        <option value="" disabled selected>Tamanho da empresa:</option>
                        <option value="1-50">1-50 funcionários</option>
                        <option value="51-300">51-300 funcionários</option>
                        <option value="301-1000">301-1000 funcionários</option>
                        <option value="1001-2000">1001-2000 funcionários</option>
                        <option value="2000+">2000+ funcionários</option>
                    </select>
                    <label htmlFor="pais/regiao">País/Região:</label>
                    <select name="pais/regiao" id="pais/regiao">
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="Canada">Canadá</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Reino Unido">Reino Unido</option>
                        <option value="Franca">França</option>
                        <option value="Alemanha">Alemanha</option>
                        <option value="Japao">Japão</option>
                        <option value="Australia">Austrália</option>
                        <option value="India">Índia</option>
                    </select>
                    <label htmlFor="idioma">Idioma:</label>
                    <select name="idioma" id="idioma">
                        <option value="Ingles">Inglês</option>
                        <option value="Holandes">Holândes</option>
                        <option value="Frances">Francês</option>
                        <option value="Alemão">Alemão</option>
                        <option value="Italiano">Italiano</option>
                        <option value="Espanhol">Espanhol</option>
                        <option value="Sueco">Sueco</option>
                        <option value="Portugues(Brasil)">Português (Brasil)</option>
                        <option value="Japones">Japonês</option>
                        <option value="Chines(simplificado)">Chinês (simplificado)</option>
                        <option value="Chines(tradicional)">Chinês (tradicional)</option>
                        <option value="Coreano">Coreano</option>
                        <option value="Tailandes">Tailandês</option>
                        <option value="Filandes">Filandês</option>
                        <option value="Russo">Russo</option>
                    </select>
                    <input type="checkbox" name="aceita termos" id="aceita termos" /><span>Estou de acordo com o <a
                        href="https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/salesforce_MSA.pdf"
                        target="_blank">Main Services Agreement</a></span>
                    <p>Sua avaliação gratuita pode ser provisionada ou migrada para o Hyperforce, a infraestrutura de nuvem pública
                        do Salesforce.</p>
                    <p>Ao inscrever-se, você confirma que concorda com o processamento de seus dados pessoais pela Salesforce,
                        conforme descrito na <a href="https://www.salesforce.com/br/company/privacy/full_privacy/">Declaração de
                            privacidade</a></p>
                    <input type="submit" value="Iniciar Teste gratuito" />
                </form>
            </div>
        </main>
    );
}