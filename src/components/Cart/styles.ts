import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../images/lixeira.png'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
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
    background-color: ${colors.pink};
    z-index: 1;
    padding: 32px 8px 0 8px;
    max-width: 360px;
    width: 100%;
    height: 100vh;
    overflow-y: auto;

    ${ButtonContainer} {
        max-width: 100%;
        width: 100%;
        background: ${colors.background2};
        color: ${colors.pink};
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
    color: ${colors.background2};
    margin-top: 32px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
`

export const CartItem = styled.li`
    display: flex;
    background-color: ${colors.background2};
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
        color: ${colors.pink};
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 4px;
    }

    span {
        margin-top: 24px;
        display: block;
        color: ${colors.pink};
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
export const EmptyMessage = styled.p`
    text-align: center;
    font-size: 16px;
    color: ${colors.background2};
    margin-top: 40px;
    line-height: 22px;
    padding: 0 16px;
`
