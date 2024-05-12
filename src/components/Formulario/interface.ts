interface modalTesteGratisProps {
    message: string,
} 

interface inputProps{
    name: string,
    lastName: string,
    position: string,
    emailCorporate: string,
    phone: string
}

interface selectsProps{
    pais: string,
    porteEmpresa: string,
    idioma: string
}

interface porteEmpresaProps{
    id: string,
    descricao: string
}

interface paisProps{
    id:string,
    descricao?:string
}

interface idiomaProps{
    id: string,
    idioma:string
}

interface testeGratisProps{
    nome:string,
    sobrenome:string,
    cargo:string,
    email:string,
    telefone:string,
    porteEmpresa: porteEmpresaProps,
    pais: paisProps,
    idioma: idiomaProps
}

interface backEndInfoProps{
    idioma:Array<idiomaProps>,
    pais:Array<idiomaProps>,
    porteEmpresa:Array<porteEmpresaProps>
}

export type {modalTesteGratisProps, inputProps, selectsProps, testeGratisProps, porteEmpresaProps, paisProps, idiomaProps, backEndInfoProps};