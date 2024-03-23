import EspecialistaEApps from "@/components/ProductPage/EspecialistaEApps";
import Customer360Card from "../../components/ProductPage/Customer360";
import LearnMorePrices from "../../components/ProductPage/LearnMorePrices";
import ProductCard from "../../components/ProductPage/ProductCard/";
import '../../style/products.css';

export default function Produtos() {
  return (
    <main className="product-page">
      <Customer360Card title="Customer 360"
        paragraph="Conecte dados em tempo real, facilite colaboração entre equipes e encante clientes com nossa plataforma na nuvem"
        img="/image-products/customer360-products.webp"
        altImg="Imagem do produto Customer 360 com uma mulher e um fundo com uma floresta e algumas arvores"
        link="https://www.salesforce.com/br/products/"
      />
      <section className="product-section">
        <h2 className="text-4xl mb-10 titleGallery">Galeria de produtos</h2>
        <div className="flex gap-2 flex-wrap justify-between">
        <ProductCard
        img="/image-products/vendas 2.svg"
        altImg="Pagina web da plataforma Sales Cloud"
        title="Vendas"
        paragraph="Eficiência máxima com automação, dados e inteligência melhores. Como? Com automação da força de vendas impulsionada por IA."
        link='https://www.salesforce.com/br/products/sales/'
      />
      <ProductCard
        img="/image-products/atendimento-ao-cliente-salesforce 1.svg"
        altImg="Pagina web mostrando as funcionalidades do atendimento ao cliente"
        title="Atendimento ao cliente"
        paragraph="Maximize o ROI e impulsione a eficiência, desde a central de contatos ao atendimento externo, tudo em uma unica plataforma."
        link="https://www.salesforce.com/br/products/service/"
        />
        <ProductCard
        img="/image-products/marketing.svg"
        altImg="Pagina web mostrando funcionalidades e metricas do Sales Cloud"
        title="Marketing"
        paragraph="Atraia clientes. Gere mais engajamento.Construa relações duradouras.Tudo isso graças ao marketing digital baseado em dados"
        link="https://www.salesforce.com/br/products/marketing-cloud/overview/"
        />
        <ProductCard
        img="/image-products/commerce.svg"
        altImg="Astro, mascote da Salesforce caminhando sobre a pagina de vendas da Salesforce"
        title="Commerce"
        paragraph="Obtenha valor rapidamente, da descoberta à entrega na plataforma que já conquistou a confianças das maiores marcas do mercado."
        link="https://www.salesforce.com/br/products/commerce/"
        />
        <ProductCard
        img="/image-products/data_cloud.svg"
        altImg="Mulher utiizando o celular para ver graficos com mascote Astro a frente"
        title="Data cloud"
        paragraph="Capacite as equipes a envolver os clientes, em cada ponto de contato, com insights relevantes e dados contextuais no fluxo do trabalho"
        link="https://www.salesforce.com/br/products/data/"
        />
        <ProductCard
        img="/image-products/Tableau.svg"
        altImg="Mulher utiizando o celular para ver graficos com mascote Astro a frente"
        title="Data cloud"
        paragraph="Capacite as equipes a envolver os clientes, em cada ponto de contato, com insights relevantes e dados contextuais no fluxo do trabalho"
        link="https://www.salesforce.com/br/products/analytics/"
        />
        <ProductCard
        img="/image-products/mulesoft 1.svg"
        altImg="Astro, a mascote da Salesforce, segurando o logo da Mulesoft, à frente de uma página web. Ao lado, um chat exibe a mensagem: 'Equipe, aqui está o novo mapa da implantação."
        title="MuleSoft"
        paragraph="Automatize tudo, capacite todos. Integre dados de qualquer sistema e automatize tarefas complexas para fornecer experiências do cliente conectadas mais rapidamente."
        link="https://www.salesforce.com/br/products/integration/overview/"
        />
        <ProductCard
        img="/image-products/slack.svg"
        altImg="Astro, a mascote da Salesforce, segurando o logo do Slack, à frente de uma página web. com diversos chats abertos ao lado representando chats da plataforma Slack"
        title="Slack"
        paragraph="Descubra um jeito flexível de conectar pessoas, parceiros e aplicativos. Integrado ao Customer 360, o Slack impulsiona a produtividade e faz funcionar o trabalho colaborativo"
        link="https://www.salesforce.com/br/products/slack/"
        />
        <ProductCard
        img="/image-products/plataforma.svg"
        altImg="Representação visual da pagina web Salesforce Plataform, com uma borboleta ao lado direito"
        title="Plataforma"
        paragraph="Crie apps, acelere a automação,e alcance o sucesso imediato. Com a Salesforce Platform você automatiza processos cria apps melhores e protege os seus dados"
        link="https://www.salesforce.com/br/products/platform/overview/"
        />
        <ProductCard
        img="/image-products/sustentabilidade.svg"
        altImg="pagina web exibindo o painel do Net Zero Cloud, com três gráficos diferentes, cada um deles representando uma métrica de sustentabilidade."
        title="Sustentabilidade"
        paragraph="Combine análises robustas, IA avançada e o ecossistema Salesforce para agilizar o gerenciamento ESG"
        link="https://www.salesforce.com/products/net-zero-cloud/overview/"
        />
        <ProductCard
        img="/image-products/pequenas_empresas.svg"
        altImg="Painel de uma plataforma de atendimento de recursos humanos, com diversos graficos"
        title="Pequenas empresas"
        paragraph="Desenvolva sua pequena empresa e conquiste relacionamentos duradouros com os clientes com a ajuda de uma plataforma unificada."
        link="https://www.salesforce.com/br/products/small-business/"
        />
        <ProductCard
        img="/image-products/servicoeseplanos.svg"
        altImg="homem sorrindo enquanto utiliza um laptop em frente a um circulo azul com uma borboleta voando ao fundo e uma atendente dentro de um circulo acima dele"
        title="Serviços e planos"
        paragraph="Receba ajuda e orientação para potencializar sua empresa. modernize e transforme suas operações com a ajuda dos especialistas do Salesforce"
        link="https://www.salesforce.com/br/services/overview/"
        />
        </div>
      </section>

      <EspecialistaEApps/> 
      
      <LearnMorePrices/>
    </main>
  );
}