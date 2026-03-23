import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

import prato3 from '../../images/prato3.png'
import banner from '../../images/prato2.png'

const promocoes: Game[] = [
    {
        id: 1,
        description: 'A clássica Marguerita...',
        title: 'Pizza Marguerita',
        image: prato3
    },
    {
        id: 2,
        description: 'A clássica Marguerita...',
        title: 'Pizza Marguerita',
        image: prato3
    },
    {
        id: 3,
        description: 'A clássica Marguerita...',
        title: 'Pizza Marguerita',
        image: prato3
    },
    {
        id: 4,
        description: 'A clássica Marguerita...',
        title: 'Pizza Marguerita',
        image: prato3
    },
    {
        id: 5,
        description: 'A clássica Marguerita...',
        title: 'Pizza Marguerita',
        image: prato3
    },
    {
        id: 6,
        description: 'A clássica Marguerita...',
        title: 'Pizza Marguerita',
        image: prato3
    }
]

const Categories = () => (
    <>
        <Header variant="categories" />

        <Hero
            image={banner}
            title="La Dolce Vita Trattoria"
            category="Italiana"
        />

        <ProductsList
            games={promocoes}
            title="Promoções"
            showRating={false}
            columns={3}
            buttonLabel="Adicionar ao carrinho"
        />
    </>
)

export default Categories
