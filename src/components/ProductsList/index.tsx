import Game from '../../models/Game'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
    title: string
    games: Game[]
    showRating?: boolean
    columns?: number
    buttonLabel?: string
    onButtonClick?: (game: Game) => void
}

const ProductsList = ({
    games,
    showRating,
    columns,
    buttonLabel,
    onButtonClick
}: Props) => (
    <Container>
        <div className="container">
            <List columns={columns}>
                {games.map((game) => (
                    <Product
                        key={game.id}
                        category={game.category}
                        description={game.description}
                        image={game.image}
                        system={game.system}
                        title={game.title}
                        showRating={showRating}
                        rating={game.rating}
                        buttonLabel={buttonLabel}
                        onButtonClick={
                            onButtonClick
                                ? () => onButtonClick(game)
                                : undefined
                        }
                    />
                ))}
            </List>
        </div>
    </Container>
)

export default ProductsList
