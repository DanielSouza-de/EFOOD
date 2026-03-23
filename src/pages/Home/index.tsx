import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import prato1 from '../../images/prato1.png'
import prato2 from '../../images/prato2.png'

const promocoes: Game[] = [
    {
        id: 1,
        category: 'Destaque da semana',
        description: 'Peça já o melhor da culinária japonesa...',
        title: 'Hioki Sushi',
        system: 'Japonesa',
        image: prato1,
        rating: 4.9
    },
    {
        id: 2,
        description: 'A La Dolce Vita Trattoria leva...',
        title: 'La Dolce Vita Trattoria',
        system: 'Italiana',
        image: prato2,
        rating: 4.6
    },
    {
        id: 3,
        description: 'A La Dolce Vita Trattoria leva...',
        title: 'La Dolce Vita Trattoria',
        system: 'Italiana',
        image: prato2,
        rating: 4.6
    },
    {
        id: 4,
        description: 'A La Dolce Vita Trattoria leva...',
        title: 'La Dolce Vita Trattoria',
        system: 'Italiana',
        image: prato2,
        rating: 4.6
    },
    {
        id: 5,
        description: 'A La Dolce Vita Trattoria leva...',
        title: 'La Dolce Vita Trattoria',
        system: 'Italiana',
        image: prato2,
        rating: 4.6
    },
    {
        id: 6,
        description: 'A La Dolce Vita Trattoria leva...',
        title: 'La Dolce Vita Trattoria',
        system: 'Italiana',
        image: prato2,
        rating: 4.6
    }
]

const Home = () => (
    <>
        <Header variant="home" />

        <ProductsList
            games={promocoes}
            title="Promoções"
            columns={2}
            buttonLabel="Saiba mais"
        />
    </>
)

export default Home
