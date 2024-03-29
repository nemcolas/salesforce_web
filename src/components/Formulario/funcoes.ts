'use client'
async function pegarIdioma(id: String) {
    try {
        const resultado = await fetch(`http://localhost:8080/idioma/${id}`)
        const json = await resultado.json()
        return json
    } catch (error) {
        console.log(error)
    }
}

async function pegarPorteEmpresa(id: String) {
    try{
        const resultado = await fetch(`http://localhost:8080/porteempresa/${id}`)
        const json = await resultado.json()
        return json
    }catch(error){
        console.log(error)
    }
}

async function pegarPais(id: String) {
    try{
        const resultado = await fetch(`http://localhost:8080/pais/${id}`)
        const json = await resultado.json()
        return json
    }catch(error){
        console.log(error)
    }
}

async function construirObjetoTesteGratis() {
    const inputs = document.querySelectorAll('input:not([type="button"]), select');
    const arrayInputs = Array.from(inputs)
    const valoresInputs = arrayInputs.map((input: any) => {
        return input.value
    })
    const objetoTesteGratis ={
        nome: valoresInputs[0],
        sobrenome: valoresInputs[1],
        cargo: valoresInputs[2],
        email: valoresInputs[3],
        telefone: valoresInputs[4],
        porteEmpresa: await pegarPorteEmpresa(valoresInputs[5]),
        pais: await pegarPais(valoresInputs[6]),
        idioma: await pegarIdioma(valoresInputs[7])
    }
    return objetoTesteGratis
} 

export { construirObjetoTesteGratis }