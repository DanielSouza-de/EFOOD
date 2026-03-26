import styled from 'styled-components'
import { cores } from '../../styles'

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.7);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1000;
`

export const ModalContent = styled.div`
    background: ${cores.rose};
    color: ${cores.fundo2};

    padding: 32px;
    display: flex;
    gap: 24px;

    max-width: 1024px;
    width: 100%;

    position: relative;
`

export const Image = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;
    flex-shrink: 0;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.h2`
    font-size: 18px;
    margin-bottom: 16px;
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
`

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    background: transparent;
    right: 16px;
    border: none;
    font-size: 18px;

    cursor: pointer;
`

export const AddButton = styled.button`
    background: ${cores.fundo2};
    color: ${cores.rose};
    border: none;
    padding: 8px 12px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    align-self: flex-start;

    &:hover {
        opacity: 0.9;
    }
`

export const Info = styled.span`
    display: block;
    font-size: 14px;
    margin-top: 8px;
    opacity: 0.9;
    margin-top: 16px;
`
