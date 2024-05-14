import CardOurProducts from "../CardOurProducts"
import './style.css'

// Componente responsável por criar um bloco (container) do Nossos Produtos (OurProducts)
function ContainerNossosProdutos() {
    return (
      <section className='mb-40 containerNossosProdutos'>
        <h2 className='text-center'>Nossos Produtos são feitos para você</h2>
        <div className='flex justify-center flex-wrap gap-3'>
        <CardOurProducts
          title='Pequenas empresas'
          paragraph='Venda de forma inteligente e forneça suporte rápido em um só app'
          img='/image-index/php-products-small-business.webp'
          alt='homem com camisa listrada sorrindo com um fundo azul'
          buttonLink='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'
          arialabelButton="Saiba mais sobre as soluções para pequenas empresas"
        />
        <CardOurProducts
          title='Atendimento'
          paragraph='Gaste menos com serviços escaláveis que os clientes adoram'
          img='/image-index/php-products-service-generic.webp'
          alt='homem com camisa rosa e um fone com a mão na orelha sorrindo em um fundo rosa'
          buttonLink='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'
          arialabelButton="Saiba mais sobre as soluções para atendimento ao cliente"
        />

        <CardOurProducts
          title='Vendas' paragraph='Feche mais negócios e acelere o crescimento com o CRM nº1'
          img='/image-index/php-products-sales-generic.webp'
          alt='mulher com cabelo grisalho, com camisa de botão com um tom de verde e uma pasta na mão sorrindo'
          buttonLink='https://www.salesforce.com/br/solutions/small-business-solutions/overview/'
          arialabelButton="Saiba mais sobre as soluções para vendas"
        />
        </div>
      </section>
    )
}

export default ContainerNossosProdutos