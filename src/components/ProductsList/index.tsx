import { Product as ProductType } from '../../models/Product'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
    title?: string
    items: ProductType[]
    showRating?: boolean
    columns?: number
    buttonLabel?: string
    onButtonClick?: (item: ProductType) => void
    variant?: 'default' | 'category'
}

const ProductsList = ({
    title,
    items,
    showRating = true,
    columns = 2,
    buttonLabel,
    onButtonClick,
    variant = 'default'
}: Props) => (
    <Container>
        <div className="container">
            {title && <h2>{title}</h2>}

            <List columns={columns}>
                {items.map((item) => (
                    <Product
                        key={item.id}
                        product={item}
                        showRating={showRating}
                        buttonLabel={buttonLabel}
                        variant={variant}
                        onButtonClick={
                            onButtonClick
                                ? () => onButtonClick(item)
                                : undefined
                        }
                    />
                ))}
            </List>
        </div>
    </Container>
)

export default ProductsList
