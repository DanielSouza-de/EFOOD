import styled from 'styled-components'

import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.div`
    padding: 32px 0;
    background-color: ${colors.background};

    ${Card} {
        background-color: ${colors.white};
        color: ${colors.pink};
    }
`

type ListProps = {
    columns?: number
}

export const List = styled.ul<ListProps>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns || 2}, 1fr);
    gap: 24px;
    margin-top: 40px;
    align-items: stretch;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
`
