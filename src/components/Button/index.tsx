import * as S from './styles'

export type Props = {
    type?: 'button' | 'link' | 'submit'
    title?: string
    to?: string
    onClick?: () => void
    children: React.ReactNode
    disabled?: boolean
}

const Button = ({
    type = 'button',
    title,
    to,
    onClick,
    children,
    disabled
}: Props) => {
    if (type === 'link') {
        return (
            <S.ButtonLink to={to as string} title={title}>
                {children}
            </S.ButtonLink>
        )
    }

    return (
        <S.ButtonContainer
            type={type}
            title={title}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </S.ButtonContainer>
    )
}

export default Button
