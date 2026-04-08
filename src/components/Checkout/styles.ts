import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
    maxWidth?: string
}

type RowProps = {
    marginTop?: string
}

export const Container = styled.div`
    padding: 24px 16px;
    width: 100%;

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
        color: ${colors.background2};
    }
`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${colors.background2};
`

export const Row = styled.div<RowProps>`
    display: flex;
    gap: 12px;
    margin-top: ${(props) => props.marginTop || '12px'};
    align-items: flex-start;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        gap: 8px;
    }
`

export const InputGroup = styled.div<InputGroupProps>`
    flex: 1;
    max-width: ${(props) => props.maxWidth || 'auto'};

    label {
        font-size: 12px;
        margin-bottom: 6px;
        display: block;
        font-weight: bold;
        color: ${colors.background2};
    }

    input {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        font-size: 14px;
        border: none;
        background-color: ${colors.background2};

        &:focus {
            outline: none;
        }

        &.error {
            border: 3px solid red;
        }
    }
`

export const ButtonGroup = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    button {
        width: 100%;
        height: 32px;
        font-size: 12px;
    }
`
