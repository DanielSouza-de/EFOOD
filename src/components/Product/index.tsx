import { Link } from 'react-router-dom'
import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'
import estrela from '../../images/estrela.png'

type Props = {
    title: string
    description: string
    image: string
    category?: string
    system?: string
    showRating?: boolean
    rating?: number
    buttonLabel?: string
    onButtonClick?: () => void
    variant?: 'default' | 'category'
}

const Product = ({
    title,
    category,
    system,
    description,
    image,
    showRating = true,
    rating,
    buttonLabel = 'Saiba mais',
    onButtonClick,
    variant = 'default'
}: Props) => (
    <Card variant={variant}>
        <div className="image-container">
            <img src={image} alt={title} />

            <div className="tags">
                {category && <Tag>{category}</Tag>}
                {system && <Tag>{system}</Tag>}
            </div>
        </div>

        <div className="body">
            <div className="content">
                <div className="header">
                    <Titulo>{title}</Titulo>

                    {showRating && rating && (
                        <span>
                            {rating}
                            <img src={estrela} alt="estrela" />
                        </span>
                    )}
                </div>

                <Descricao>{description}</Descricao>
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
