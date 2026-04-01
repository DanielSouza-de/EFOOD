import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ProductsList, { formataPreco } from '../../components/ProductsList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { Product as ProductType } from '../../models/Product'
import { useGetRestauranteQuery } from '../../services/api'
import closeIcon from '../../images/close.png'
import { useState } from 'react'
import { add, open } from '../../store/reducers/cart'

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

const Categories = () => {
    const dispatch = useDispatch()

    const { id } = useParams()

    const { data: restaurante, isLoading } = useGetRestauranteQuery(Number(id))

    const [produtoSelecionado, setProdutoSelecionado] =
        useState<ProductType | null>(null)

    if (isLoading || !restaurante) return <h3>Carregando...</h3>

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

                            <AddButton
                                onClick={() => {
                                    dispatch(add(produtoSelecionado))
                                    dispatch(open())
                                    setProdutoSelecionado(null)
                                }}
                            >
                                Adicionar ao carrinho -{' '}
                                {formataPreco(produtoSelecionado.preco ?? 0)}
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
