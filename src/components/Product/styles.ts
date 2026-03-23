import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
    background-color: ${cores.branca};
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    color: ${cores.preta};
    position: relative;
    padding-bottom: 48px;

    .image-container {
        position: relative;
    }

    img {
        width: 100%;
        height: 200px;
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

    .content {
        padding: 8px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        position: absolute;
        bottom: 16px;
        left: 16px;

        background-color: ${cores.rose};
        color: white;
        border: none;
        padding: 6px 12px;
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
