import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
    background-color: ${cores.fundo2};
    padding: 40px 0;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SectionTitle = styled.h4`
    margin-bottom: 16px;

    img {
        width: 120px;
    }
`

export const Links = styled.ul`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;

    li {
        list-style: none;
    }

    img {
        width: 24px;
        height: 24px;
    }
`

export const Link = styled.a`
    display: inline-block;
`

export const Copy = styled.p`
    max-width: 600px;
    text-align: center;
    color: ${cores.rose};
    font-size: 12px;
`
