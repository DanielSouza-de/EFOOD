import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

type CardProps = {
    variant?: 'default' | 'category'
}

export const Card = styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 16px;
    position: relative;

    color: ${(props) =>
        props.variant === 'category' ? colors.background2 : colors.black};

    ${(props) =>
        props.variant === 'category' &&
        `
    ${Titulo} {
        color: ${colors.background2};
    }

    ${Descricao} {
        color: ${colors.background2};
    }
`}

    .image-container {
        position: relative;

        background-color: ${(props) =>
            props.variant === 'category' ? `${colors.pink}` : 'transparent'};

        padding: ${(props) => (props.variant === 'category' ? '8px' : '0')};
    }

    img {
        width: 100%;
        height: ${(props) =>
            props.variant === 'category' ? '160px' : '200px'};
        object-fit: cover;
        display: block;
    }

    .tags {
        position: absolute;
        top: 16px;
        right: 16px;
        display: flex;
        gap: 8px;
    }

    .body {
        border: ${(props) =>
            props.variant === 'category' ? 'none' : `1px solid ${colors.pink}`};

        border-top: none;

        background-color: ${(props) =>
            props.variant === 'category' ? colors.pink : colors.white};

        display: flex;
        flex-direction: column;
        flex: 1;

        padding: 8px;
    }

    .content {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-bottom: 8px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        img {
            width: 20px;
            height: 20px;
        }
    }

    button {
        margin-top: auto;
        width: 100%;

        background-color: ${(props) =>
            props.variant === 'category' ? colors.background2 : colors.pink};

        color: ${(props) =>
            props.variant === 'category' ? colors.pink : colors.white};

        border: none;
        padding: 8px;
        font-size: 12px;
        cursor: pointer;
    }

    ${TagContainer} {
        margin-right: 8px;
    }
`

export const Titulo = styled.h3`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
`

export const Descricao = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-top: 8px;
`
