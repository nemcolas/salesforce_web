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
    country: string,
    sizeCompany: string,
    languague: string
}

interface porteEmpresaProps{
    idPorteEmpresa: string,
    descricao: string
}

interface paisProps{
    idPais:string,
    descricao:string
}

interface idiomaProps{
    idIdioma: string,
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


export type {modalTesteGratisProps, inputProps, selectsProps, testeGratisProps, porteEmpresaProps, paisProps, idiomaProps};