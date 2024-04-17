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

export type {modalTesteGratisProps, inputProps, selectsProps};