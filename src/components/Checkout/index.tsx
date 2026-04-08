import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import * as S from './styles'

import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

type Props = {
    onBackToCart: () => void
}

const Checkout = ({ onBackToCart }: Props) => {
    const [step, setStep] = useState(1)

    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

    const form = useFormik({
        initialValues: {
            fullName: '',
            address: '',
            city: '',
            cep: '',
            number: '',
            complement: '',
            cardName: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: ''
        },

        validationSchema: Yup.object({
            fullName: Yup.string().required('Obrigatório'),
            address: Yup.string().required('Obrigatório'),
            city: Yup.string().required('Obrigatório'),
            cep: Yup.string().required('Obrigatório'),
            number: Yup.string().required('Obrigatório'),

            // 💳 valida só no step 2
            cardName: Yup.string().when([], {
                is: () => step === 2,
                then: (schema) => schema.required('Obrigatório')
            }),

            cardNumber: Yup.string().when([], {
                is: () => step === 2,
                then: (schema) =>
                    schema.min(19, 'Número inválido').required('Obrigatório')
            }),

            cardCode: Yup.string().when([], {
                is: () => step === 2,
                then: (schema) =>
                    schema.min(3, 'CVV inválido').required('Obrigatório')
            }),

            expiresMonth: Yup.string().when([], {
                is: () => step === 2,
                then: (schema) => schema.required('Obrigatório')
            }),

            expiresYear: Yup.string().when([], {
                is: () => step === 2,
                then: (schema) => schema.required('Obrigatório')
            })
        }),

        onSubmit: (values) => {
            purchase({
                products: items.map((item) => ({
                    id: item.id,
                    price: Number(item.preco)
                })),
                delivery: {
                    receiver: values.fullName,
                    address: {
                        description: values.address,
                        city: values.city,
                        zipCode: values.cep,
                        number: Number(values.number) || 0,
                        complement: values.complement
                    }
                },
                payment: {
                    card: {
                        name: values.cardName,
                        number: values.cardNumber,
                        code: Number(values.cardCode),
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear)
                        }
                    }
                }
            })
        }
    })

    const hasError = (field: string) => {
        return form.touched[field as keyof typeof form.touched] &&
            form.errors[field as keyof typeof form.errors]
            ? 'error'
            : ''
    }

    const goToPayment = async () => {
        const errors = await form.validateForm()

        if (Object.keys(errors).length === 0) {
            setStep(2)
        } else {
            form.setTouched({
                fullName: true,
                address: true,
                city: true,
                cep: true,
                number: true
            })
        }
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

    return (
        <S.Container>
            {isSuccess && data ? (
                <>
                    <S.Title>Pedido realizado - {data.orderId}</S.Title>

                    <p>
                        Estamos felizes em informar que seu pedido já está em
                        processo de preparação e, em breve, será entregue no
                        endereço fornecido.
                    </p>
                    <p>
                        Gostaríamos de ressaltar que nossos entregadores não
                        estão autorizados a realizar cobranças extras.
                    </p>
                    <p>
                        Lembre-se da importância de higienizar as mãos após o
                        recebimento do pedido, garantindo assim sua segurança e
                        bem-estar durante a refeição.
                    </p>
                    <p>
                        Esperamos que desfrute de uma deliciosa e agradável
                        experiência gastronômica. Bom apetite!
                    </p>

                    <Button type="button" onClick={onBackToCart}>
                        Concluir
                    </Button>
                </>
            ) : (
                <form onSubmit={form.handleSubmit}>
                    {step === 1 && (
                        <>
                            <S.Title>Entrega</S.Title>

                            <S.Row>
                                <S.InputGroup>
                                    <label>Quem irá receber</label>
                                    <input
                                        name="fullName"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('fullName')}
                                    />
                                </S.InputGroup>
                            </S.Row>

                            <S.Row>
                                <S.InputGroup>
                                    <label>Endereço</label>
                                    <input
                                        name="address"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('address')}
                                    />
                                </S.InputGroup>
                            </S.Row>

                            <S.Row>
                                <S.InputGroup>
                                    <label>Cidade</label>
                                    <input
                                        name="city"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('city')}
                                    />
                                </S.InputGroup>
                            </S.Row>

                            <S.Row>
                                <S.InputGroup>
                                    <label>CEP</label>
                                    <InputMask
                                        mask="99999-999"
                                        name="cep"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('cep')}
                                    />
                                </S.InputGroup>

                                <S.InputGroup>
                                    <label>Número</label>
                                    <input
                                        name="number"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('number')}
                                    />
                                </S.InputGroup>
                            </S.Row>

                            <S.Row>
                                <S.InputGroup>
                                    <label>Complemento (opcional)</label>
                                    <input
                                        name="complement"
                                        onChange={form.handleChange}
                                    />
                                </S.InputGroup>
                            </S.Row>

                            <S.ButtonGroup>
                                <Button type="button" onClick={goToPayment}>
                                    Continuar com pagamento
                                </Button>

                                <Button type="button" onClick={onBackToCart}>
                                    Voltar
                                </Button>
                            </S.ButtonGroup>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <S.Title>Pagamento</S.Title>

                            <S.Row>
                                <S.InputGroup>
                                    <label>Nome no cartão</label>
                                    <input
                                        name="cardName"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('cardName')}
                                    />
                                </S.InputGroup>
                            </S.Row>

                            <S.Row>
                                <S.InputGroup>
                                    <label>Número do cartão</label>
                                    <InputMask
                                        mask="9999 9999 9999 9999"
                                        name="cardNumber"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('cardNumber')}
                                    />
                                </S.InputGroup>

                                <S.InputGroup maxWidth="80px">
                                    <label>CVV</label>
                                    <InputMask
                                        mask="999"
                                        name="cardCode"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('cardCode')}
                                    />
                                </S.InputGroup>
                            </S.Row>

                            <S.Row>
                                <S.InputGroup>
                                    <label>Mês</label>
                                    <InputMask
                                        mask="99"
                                        name="expiresMonth"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('expiresMonth')}
                                    />
                                </S.InputGroup>

                                <S.InputGroup>
                                    <label>Ano</label>
                                    <InputMask
                                        mask="99"
                                        name="expiresYear"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={hasError('expiresYear')}
                                    />
                                </S.InputGroup>
                            </S.Row>

                            <S.ButtonGroup>
                                <Button
                                    type="button"
                                    onClick={() => setStep(1)}
                                >
                                    Voltar
                                </Button>

                                <Button type="submit" disabled={isLoading}>
                                    {isLoading
                                        ? 'Finalizando...'
                                        : 'Finalizar pedido'}
                                </Button>
                            </S.ButtonGroup>
                        </>
                    )}
                </form>
            )}
        </S.Container>
    )
}

export default Checkout
