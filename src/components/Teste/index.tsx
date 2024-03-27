// // existe um delay para isso funcionar, por que o servidor demora para responder
// async function testeFetch() {
//     const resultado = await fetch('http://localhost:8080/testegratis/1')
//     const json = await resultado.json() // isso aqui retorna um objeto json
//     // console.log(json) // isso aqui é um objeto json, é o resultado da requisição transformado em json

//     // quando voce recebe uma requisição ela pode retornar um objeto ou um array de objetos, por isso é necessário tratar o json recebido

//     return (<>
//         <h1>Cargo: {json.cargo}</h1>
//         <h1>Nome: {json.nome}</h1>
//         <h1>Sobrenome: {json.sobrenome}</h1>
//         <h1>Email: {json.email}</h1>
//         <h1>Telefone: {json.telefone}</h1>
//     </>)
// }

// é necessário colocar a função que faz uma solicitação como async, para que o next.js entenda que é uma função assincrona e que ele deve esperar a resposta do servidor

// é necessário colocar o await antes da função fetch, para que o next.js entenda que ele deve esperar a resposta do servidor

// após isso é necessário trransformar a resposta em um json, para que o next.js entenda que ele deve transformar a resposta em um json

// -----------------------------------------------------------------------------------------------

// na função acima recebemos apenas um objeto, mas e se recebemos um array de objetos ? como tratar isso ?
// é isso que faremos na função abaixo

async function TesteFetch2() {
    const resultado = await fetch('http://localhost:8080/testegratis/') // não retorna apenas 1 objeto
    const json = await resultado.json()
    // fazemos um map em cada item e mostramos no console
    json.forEach((item: any) => {
        console.log(item)
    });

    return (
        // o que voce pode fazer com os resultado é fazer um map e retornar um componente para cada item do array
        <>
            {json.map((item:any) => {
                return (
                    <div key={item.id}> {/* é necessário colocar uma key para cada item do array e ele não pode se repetir */}
                        <h1>Cargo: {item.cargo}</h1>
                        <h1>Nome: {item.nome}</h1>
                        <h1>Sobrenome: {item.sobrenome}</h1>
                        <h1>Email: {item.email}</h1>
                        <h1>Telefone: {item.telefone}</h1>
                    </div>
                )
            })}
        </>
    )

}

// outra coisa que voce pode fazer é falar para ele não colocar em cache as informações, para que ele sempre faça uma nova requisição toda vez que a página for carregada ao invés de pegar do cache

export { TesteFetch2 }