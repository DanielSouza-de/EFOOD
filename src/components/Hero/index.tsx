import { Container, Overlay, Content, Tipo, Titulo } from './styles'

type Props = {
    image: string
    title: string
    category: string
}

const Hero = ({ image, title, category }: Props) => (
    <Container style={{ backgroundImage: `url(${image})` }}>
        <Overlay>
            <Content className="container">
                <Tipo>{category}</Tipo>
                <Titulo>{title}</Titulo>
            </Content>
        </Overlay>
    </Container>
)

export default Hero
