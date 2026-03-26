import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { Product as ProductType } from '../../models/Product'
import closeIcon from '../../images/close.png'
import {
    Modal,
    ModalContent,
    Image,
    Content,
    Title,
    Description,
    CloseButton,
    AddButton,
    Info
} from './styles'

type Produto = {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
}

type Restaurante = {
    id: number
    titulo: string
    tipo: string
    capa: string
    cardapio: Produto[]
}

const Categories = () => {
    const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
    const [produtoSelecionado, setProdutoSelecionado] =
        useState<ProductType | null>(null)

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data) => {
                setRestaurante(data[0])
            })
    }, [])

    if (!restaurante) return <h3>Carregando...</h3>

    const formatarPreco = (valor: number) => {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }

    const produtosAdaptados: ProductType[] = restaurante.cardapio.map(
        (item) => ({
            id: item.id,
            nome: item.nome,
            descricao: item.descricao,
            foto: item.foto,
            preco: item.preco,
            porcao: item.porcao
        })
    )

    return (
        <>
            {produtoSelecionado && (
                <Modal onClick={() => setProdutoSelecionado(null)}>
                    <ModalContent
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <CloseButton
                            onClick={() => setProdutoSelecionado(null)}
                        >
                            <img src={closeIcon} alt="Fechar" />
                        </CloseButton>

                        <Image
                            src={produtoSelecionado.foto}
                            alt={produtoSelecionado.nome}
                        />

                        <Content>
                            <div>
                                <Title>{produtoSelecionado.nome}</Title>
                                <Description>
                                    {produtoSelecionado.descricao}
                                </Description>

                                <Info>
                                    Serve de {produtoSelecionado.porcao}
                                </Info>
                            </div>

                            <AddButton>
                                Adicionar ao carrinho -{' '}
                                {formatarPreco(produtoSelecionado.preco ?? 0)}
                            </AddButton>
                        </Content>
                    </ModalContent>
                </Modal>
            )}

            <Header variant="categories" />

            <Hero
                image={restaurante.capa}
                title={restaurante.titulo}
                category={restaurante.tipo}
            />

            <ProductsList
                items={produtosAdaptados}
                showRating={false}
                columns={3}
                buttonLabel="Adicionar ao carrinho"
                variant="category"
                onButtonClick={(item) => setProdutoSelecionado(item)}
            />
        </>
    )
}

export default Categories
