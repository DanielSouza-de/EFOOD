import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../images/lixeira.png'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const Sidebar = styled.aside`
    background-color: ${cores.rose};
    z-index: 1;
    padding: 32px 8px 0 8px;
    max-width: 360px;
    width: 100%;

    ${ButtonContainer} {
        max-width: 100%;
        width: 100%;
        background: ${cores.fundo2};
        color: ${cores.rose};
        border: none;
        padding: 8px 12px;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        align-self: flex-start;
        border-radius: 0;
    }
`

export const Prices = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${cores.fundo2};
    margin-top: 32px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
`

export const CartItem = styled.li`
    display: flex;
    background-color: ${cores.fundo2};
    padding: 8px;
    margin-bottom: 16px;
    position: relative;

    img {
        height: 80px;
        width: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    h3 {
        color: ${cores.rose};
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 4px;
    }

    span {
        margin-top: 24px;
        display: block;
        color: ${cores.rose};
        font-weight: bold;
        font-size: 14px;
    }

    button {
        background-image: url(${lixeira});
        background-size: contain;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        bottom: 8px;
        right: 8px;
        cursor: pointer;
    }
`
