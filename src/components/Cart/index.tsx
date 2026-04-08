import { useState } from 'react'
import {
    Overlay,
    CartContainer,
    Sidebar,
    Prices,
    CartItem,
    EmptyMessage
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'
import Button from '../Button'
import Checkout from '../Checkout'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()
    const [isCheckout, setIsCheckout] = useState(false)

    const closeCart = () => {
        dispatch(close())
        setIsCheckout(false)
    }

    const getTotalPrice = () => {
        return items.reduce((acc, item) => {
            return acc + (item.preco ?? 0)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />

            <Sidebar>
                {isCheckout ? (
                    <Checkout onBackToCart={() => setIsCheckout(false)} />
                ) : (
                    <>
                        {items.length === 0 ? (
                            <EmptyMessage>
                                O carrinho está vazio, adicione pelo menos um
                                produto para continuar com a compra
                            </EmptyMessage>
                        ) : (
                            <>
                                <ul>
                                    {items.map((item) => (
                                        <CartItem key={item.id}>
                                            <img
                                                src={item.foto}
                                                alt={item.nome}
                                            />
                                            <div>
                                                <h3>{item.nome}</h3>
                                                <span>
                                                    {formataPreco(item.preco)}
                                                </span>
                                            </div>

                                            <button
                                                onClick={() =>
                                                    removeItem(item.id)
                                                }
                                                type="button"
                                            />
                                        </CartItem>
                                    ))}
                                </ul>

                                <Prices>
                                    <span>Valor total</span>
                                    <span>{formataPreco(getTotalPrice())}</span>
                                </Prices>

                                <Button
                                    type="button"
                                    title="Clique aqui para continuar com a entrega"
                                    onClick={() => setIsCheckout(true)}
                                >
                                    Continuar com a entrega
                                </Button>
                            </>
                        )}
                    </>
                )}
            </Sidebar>
        </CartContainer>
    )
}

export default Cart
