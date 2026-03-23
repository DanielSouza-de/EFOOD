import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
    width: 100%;
    height: 280px;
    background-size: cover;
    background-position: center;
    position: relative;
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: flex-end;
`

export const Content = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 24px;
`

export const Tipo = styled.span`
    color: ${cores.branca};
    font-size: 18px;
    opacity: 0.7;
    display: block;
    margin-bottom: 8px;
`

export const Titulo = styled.h2`
    color: ${cores.branca};
    font-size: 32px;
    font-weight: bold;
`
