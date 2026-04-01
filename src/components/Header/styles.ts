import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

type Props = {
    variant?: 'home' | 'categories'
}

export const Imagem = styled.div<Props>`
    width: 100%;
    height: ${(props) => (props.variant === 'home' ? '380px' : '185px')};
    padding: ${(props) => (props.variant === 'categories' ? '40px 0' : '0')};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: ${(props) =>
        props.variant === 'categories' ? 'flex-start' : 'center'};

    .container {
        max-width: 1024px;
        width: 100%;
        padding: 0 16px;

        display: flex;
        flex-direction: ${(props) =>
            props.variant === 'categories' ? 'row' : 'column'};

        align-items: center;
        justify-content: ${(props) =>
            props.variant === 'categories' ? 'space-between' : 'center'};
    }

    ${TagContainer} {
        position: absolute;
        top: 24px;
        left: 24px;
    }
`

export const Logo = styled.img<Props>`
    position: ${(props) =>
        props.variant === 'categories' ? 'static' : 'absolute'};

    top: ${(props) => (props.variant === 'categories' ? 'auto' : '32px')};

    left: ${(props) => (props.variant === 'categories' ? 'auto' : '50%')};

    transform: ${(props) =>
        props.variant === 'categories' ? 'none' : 'translateX(-50%)'};
`

export const Titulo = styled.h2`
    margin-top: 200px;
    font-size: 36px;
    max-width: 540px;
    width: 100%;
    color: ${cores.rose};
    text-align: center;
    font-weight: 900;
    line-height: 42px;
`

export const Bar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 14px;
        color: ${cores.rose};
        font-weight: bold;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: ${cores.rose};
        font-weight: bold;
    }
`
