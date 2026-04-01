import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { Logo, Imagem, Titulo, Bar } from './styles'
import fundoImg from '../../images/fundo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

type Props = {
    variant?: 'home' | 'categories'
}

const Header = ({ variant = 'home' }: Props) => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return (
        <Imagem
            variant={variant}
            style={{ backgroundImage: `url(${fundoImg})` }}
        >
            <div className="container">
                {variant === 'home' ? (
                    <>
                        <Link to="/">
                            <Logo src={logo} alt="EFOOD" variant={variant} />
                        </Link>

                        <Titulo>
                            Viva experiências gastronômicas no conforto da sua
                            casa
                        </Titulo>
                    </>
                ) : (
                    <Bar>
                        <Link to="/">
                            <span>Restaurantes</span>
                        </Link>

                        <Link to="/">
                            <Logo src={logo} alt="EFOOD" variant={variant} />
                        </Link>

                        <span onClick={openCart}>
                            {items.length} produto(s) no carrinho
                        </span>
                    </Bar>
                )}
            </div>
        </Imagem>
    )
}

export default Header
