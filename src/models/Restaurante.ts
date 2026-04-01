import { Product } from './Product'

export type Restaurante = {
    id: number
    titulo: string
    descricao: string
    capa: string
    tipo: string
    avaliacao: number
    destacado: boolean
    cardapio: Product[]
}
