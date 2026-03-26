import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { Restaurante } from '../../models/Restaurante'
import { Product as ProductType } from '../../models/Product'

const Home = () => {
    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

    useEffect(() => {
        fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((data: Restaurante[]) => setRestaurantes(data))
    }, [])

    const restaurantesAdaptados: ProductType[] = restaurantes.map((item) => ({
        id: item.id,
        nome: item.titulo,
        descricao: item.descricao,
        foto: item.capa,
        avaliacao: item.avaliacao
    }))

    return (
        <>
            <Header variant="home" />

            <ProductsList
                items={restaurantesAdaptados}
                columns={2}
                buttonLabel="Saiba mais"
            />
        </>
    )
}

export default Home
