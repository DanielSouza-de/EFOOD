import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
    width: 100%;
    height: 280px;

    background-size: cover;
    background-position: center;

    position: relative;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
`

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    height: 100%; /* ESSENCIAL */

    max-width: 1024px;
    width: 100%;
    padding: 32px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Tipo = styled.span`
    color: ${colors.white};
    font-size: 32px;
    opacity: 0.7;
    display: block;
`

export const Titulo = styled.h2`
    color: ${colors.white};
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
`
