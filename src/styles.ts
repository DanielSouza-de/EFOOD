import { createGlobalStyle } from 'styled-components'

export const cores = {
    branca: '#FFF',
    preta: '#111111',
    fundo: '#FFF8F2',
    cinza: 'red',
    fundo2: '#FFEBD9',
    verde: '#10AC84',
    cinzaClaro: '#A3A3A3',
    rose: '#E66767'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    body {
        background-color: ${cores.preta};
        color: ${cores.branca};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`
