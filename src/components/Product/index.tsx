import { Link } from 'react-router-dom'
import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

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
    onButtonClick
}: Props) => (
    <Card>
        <div className="image-container">
            <img src={image} alt={title} />

            <div className="tags">
                {category && <Tag>{category}</Tag>}
                {system && <Tag>{system}</Tag>}
            </div>
        </div>

        <div className="content">
            <div className="header">
                <Titulo>{title}</Titulo>
                {showRating && rating && <span>⭐ {rating}</span>}
            </div>

            <Descricao>{description}</Descricao>

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
