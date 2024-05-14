'use client'
import '@/style/analise-ia.css'

export default function AnaliseIa() {

    function buildInfo() {
        const inputsChecked= document.querySelectorAll('input[type="radio"]:checked')
        return {
            "De 0 a 5, o quanto voce sabe sobre o que e CRM?":inputsChecked[0].value,
            "De 0 a 5, o quanto voce conhece sobre Salesforce (Considere 0 como nao conheco e 5 como conheco muito)":inputsChecked[1].value,
            "Qual o tamanho da sua empresa? (Considere 1 como pequena empresa de 0 a 9 funcionarios, 2 como media empresa de 10 a 50 funcionarios e 3 como grande empresa, acima de 50 funcionarios)":inputsChecked[2].value,
            "O Quão importante voce considera o uso de CRM para a sua empresa?":inputsChecked[3].value
        }
    }

    async function sendInfoToIa() {
        
        const res = await fetch('/backend-ia/call_predict', {
            method: 'POST',
            body:JSON.stringify(buildInfo)
        })
        console.log(await res.json())
    }

    return (
        <main>
            <h1>Análise de propensão</h1>
            <form className='container--form'>
                <h2>Preencha os dados abaixo para verificarmos se você é propenso a realizar nosso teste grátis</h2>

                <section>
                    <h3>De 0 a 5, o quanto voce sabe sobre o que e CRM?</h3>
                    <input type="radio" name="sabe sobre crm" id="q1-1" value={1}/><label htmlFor="q1-1">1</label>
                    <input type="radio" name="sabe sobre crm" id="q1-2" value={2}/><label htmlFor="q1-2">2</label>
                    <input type="radio" name="sabe sobre crm" id="q1-3" value={3}/><label htmlFor="q1-3">3</label>
                    <input type="radio" name="sabe sobre crm" id="q1-4" value={4}/><label htmlFor="q1-4">4</label>
                    <input type="radio" name="sabe sobre crm" id="q1-5" value={5}/><label htmlFor="q1-5">5</label>
                </section>

                <section>
                    <h3>De 0 a 5, o quanto voce conhece sobre Salesforce (Considere 0 como nao conheco e 5 como conheco muito)</h3>
                    <input type="radio" name="sabe sobre salesforce" id="q2-1" value={1}/><label htmlFor="q2-1">1</label>
                    <input type="radio" name="sabe sobre salesforce" id="q2-2" value={2}/><label htmlFor="q2-2">2</label>
                    <input type="radio" name="sabe sobre salesforce" id="q2-3" value={3}/><label htmlFor="q2-3">3</label>
                    <input type="radio" name="sabe sobre salesforce" id="q2-4" value={4}/><label htmlFor="q2-4">4</label>
                    <input type="radio" name="sabe sobre salesforce" id="q2-5" value={5}/><label htmlFor="q2-5">5</label>
                </section>


                <section>
                    <h3>Qual o tamanho da sua empresa? (Considere 1 como pequena empresa de 0 a 9 funcionarios, 2 como media empresa de 10 a 50 funcionarios e 3 como grande empresa, acima de 50 funcionarios)</h3>
                    <input type="radio" name="tamanho empresa" id="q3-1" value={1}/><label htmlFor="q3-1">1</label>
                    <input type="radio" name="tamanho empresa" id="q3-2" value={2}/><label htmlFor="q3-2">2</label>
                    <input type="radio" name="tamanho empresa" id="q3-3" value={3}/><label htmlFor="q3-3">3</label>
                </section>

                <section>
                    <h3>O Quão importante voce considera o uso de CRM para a sua empresa?</h3>
                    <input type="radio" name="crm e importante" id="q4-1" value={1}/><label htmlFor="q4-1">1</label>
                    <input type="radio" name="crm e importante" id="q4-2" value={2}/><label htmlFor="q4-2">2</label>
                    <input type="radio" name="crm e importante" id="q4-3" value={3}/><label htmlFor="q4-3">3</label>
                    <input type="radio" name="crm e importante" id="q4-4" value={4}/><label htmlFor="q4-4">4</label>
                    <input type="radio" name="crm e importante" id="q4-5" value={5}/><label htmlFor="q4-5">5</label>
                </section>

                <input type="button" value="Realizar análise" onClick={buildInfo}/>
            </form>
        </main>
    )
}