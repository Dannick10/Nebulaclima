
export type mun = {
    id: number
    nome: string 
    sigla: string
}

export type state = {
    id: number 
    nome: string 
    regiao: mun
    sigla: string
}

export type municipio = {
    codigo_ibge: string
    nome: string
}