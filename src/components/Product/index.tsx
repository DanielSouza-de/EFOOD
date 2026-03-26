import { Link } from 'react-router-dom'
import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'
import estrela from '../../images/estrela.png'

import { Product as ProductType } from '../../models/Product'

type Props = {
    product: ProductType
    showRating?: boolean
    buttonLabel?: string
    onButtonClick?: () => void
    variant?: 'default' | 'category'
}

const Product = ({
    product,
    showRating = true,
    buttonLabel = 'Saiba mais',
    onButtonClick,
    variant = 'default'
}: Props) => (
    <Card variant={variant}>
        <div className="image-container">
            <img src={product.foto} alt={product.nome} />

            <div className="tags">
                {product.categoria && <Tag>{product.categoria}</Tag>}
            </div>
        </div>

        <div className="body">
            <div className="content">
                <div className="header">
                    <Titulo>{product.nome}</Titulo>

                    {showRating && product.avaliacao && (
                        <span>
                            {product.avaliacao}
                            <img src={estrela} alt="estrela" />
                        </span>
                    )}
                </div>

                <Descricao>{product.descricao}</Descricao>
            </div>

            {onButtonClick ? (
                <button onClick={onButtonClick}>{buttonLabel}</button>
            ) : (
                <Link to="/categories">
                    <button>{buttonLabel}</button>
                </Link>
            )}
        </div>
    </Card>
)

export default Product
