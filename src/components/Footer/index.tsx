import { Container, Content, Copy, Link, Links, SectionTitle } from './styles'

import iconeInstragram from '../../images/instagram.svg'
import iconeFacebook from '../../images/facebook.svg'
import iconeX from '../../images/x.svg'
import logo from '../../images/logo.png'

const Footer = () => (
    <Container>
        <Content>
            <SectionTitle>
                <img src={logo} alt="EPLAY" />
            </SectionTitle>

            <Links>
                <li>
                    <Link href="#">
                        <img src={iconeInstragram} alt="Instagram" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <img src={iconeFacebook} alt="Facebook" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <img src={iconeX} alt="X" />
                    </Link>
                </li>
            </Links>

            <Copy>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade dos produtos é toda do
                estabelecimento contratado.
            </Copy>
        </Content>
    </Container>
)

export default Footer
