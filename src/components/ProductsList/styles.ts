import styled from 'styled-components'

import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.div`
    padding: 32px 0;
    background-color: ${cores.fundo};

    ${Card} {
        background-color: ${cores.branca};
        color: ${cores.rose};
    }
`

type ListProps = {
    columns?: number
}

export const List = styled.ul<ListProps>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns || 2}, 1fr);
    column-gap: 24px;
    margin-top: 40px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
`
