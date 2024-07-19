import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import close from '../../assets/icon/lixeira.svg'
import {
  Aside,
  Button,
  ButtonCard,
  Container,
  Content,
  Figure,
  FinalOrder,
  Form,
  InpuGroup,
  Order,
  Overlay,
  Row,
  RowCard
} from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useDispatch } from 'react-redux'
import { usePurchaseMutation } from '../../services/api'
import { activeTheCart, clear } from '../../store/reducers/Cart'
import { formatPrice } from '../../utils/function'
import { remove } from '../../store/reducers/Cart'
import { useFormik } from 'formik'

const Cart = () => {
  const { activeTheCart: activeTheCartValue, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const [viewsCartForms, setViewsCartForms] = useState(true)
  const [viewsForm, setViewsForm] = useState(true)
  const [active, setAcitve] = useState(false)
  const [viewaFinish, setViewaFinish] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    if (activeTheCartValue) {
      setTimeout(() => {
        setAcitve(true)
      }, 500)
    }
  }, [activeTheCartValue])

  function getActiveTheCart() {
    setAcitve(false)
    setTimeout(() => {
      dispatch(activeTheCart())
    }, 1000)
  }

  useEffect(() => {
    if (isSuccess) {
      setViewaFinish(false)
    }
  }, [isSuccess])

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const Clear = () => {
    dispatch(clear())
    getActiveTheCart()
    setViewsForm(true)
    setViewaFinish(true)
    setViewsCartForms(true)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  const Delivery = () => {
    if (items.length === 0) {
      alert('Adicione um pedido')
    } else {
      setViewsCartForms(false)
    }
  }

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: '',
      CardName: '',
      CardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Nome completo é obrigatório')
        .min(5, 'Minimo 5 caracteres'),
      address: Yup.string()
        .required('Digite o nome do endereço')
        .min(5, 'Minimo 5 caracteres'),
      city: Yup.string()
        .required('Digite o nome da cidade')
        .min(1, 'Minimo 1 caracteres'),
      cep: Yup.string()
        .required('Digite seu cep')
        .min(8, 'Minimo 8 caracteres'),
      addressNumber: Yup.string()
        .required('Digite o numero do endereço')
        .min(1, 'Minimo 1 caracteres'),
      complement: Yup.string().min(1, 'Minimo 1 caracteres'),
      CardName: Yup.string()
        .required('Digite o nome no cartão')
        .min(5, 'Minimo 1 caracteres'),
      CardNumber: Yup.string()
        .required('Digite o número do cartão')
        .min(5, 'Minimo 5 caracteres'),
      cvv: Yup.string().required('Digite o CVV').min(3, 'Minimo 3 caracteres'),
      expiresMonth: Yup.string()
        .required('Digite o mês de vencimento')
        .min(2, 'Minimo 2 caracteres'),
      expiresYear: Yup.string()
        .required('Digite o ano de vencimento')
        .min(2, 'Minimo 2 caracteres')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id as number,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.name,
          address: {
            description: '',
            city: values.city,
            zipCode: values.cep,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.CardName,
            number: values.CardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  return (
    <Container className={activeTheCartValue ? 'container--isactive' : ''}>
      <Aside className={active ? 'aside--isActive' : ''}>
        {viewsCartForms ? (
          <>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <Order>
                    <Figure>
                      <img src={item.foto} alt={item.nome} />
                    </Figure>
                    <Content>
                      <h2>{item.nome}</h2>
                      <p>R$ {item.preco}</p>
                    </Content>
                    <ButtonCard
                      onClick={() => removeItem(item.id)}
                      type="button"
                      title="Deletar pedido"
                    >
                      <img src={close} alt="Deletar pedido" />
                    </ButtonCard>
                  </Order>
                </li>
              ))}
            </ul>
            <FinalOrder>
              <div>
                <p>Valor Total</p>
                <p>{formatPrice(getTotalPrice())}</p>
              </div>
              <Button onClick={Delivery}>Continuar com a entrega</Button>
            </FinalOrder>
          </>
        ) : (
          <>
            {viewaFinish ? (
              <>
                <h3>
                  {viewsForm
                    ? 'Entrega'
                    : `Pagamento - Valor a pagar R$ ${getTotalPrice()}`}
                </h3>
                <Form onSubmit={form.handleSubmit}>
                  {viewsForm ? (
                    <>
                      <InpuGroup>
                        <label htmlFor="name">Quem irá receber</label>
                        <input
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={checkInputHasError('name') ? 'error' : ''}
                          value={form.values.name}
                          id="name"
                          type="text"
                        />
                      </InpuGroup>
                      <InpuGroup>
                        <label htmlFor="address">Endereço</label>
                        <input
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkInputHasError('address') ? 'error' : ''
                          }
                          value={form.values.address}
                          id="address"
                          type="text"
                        />
                      </InpuGroup>
                      <InpuGroup>
                        <label htmlFor="city">Cidade</label>
                        <input
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={checkInputHasError('city') ? 'error' : ''}
                          value={form.values.city}
                          id="city"
                          type="text"
                        />
                      </InpuGroup>
                      <Row>
                        <InpuGroup>
                          <label htmlFor="cep">CEP</label>
                          <InputMask
                            mask="99999-999"
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            className={checkInputHasError('cep') ? 'error' : ''}
                            value={form.values.cep}
                            id="cep"
                            type="text"
                          />
                        </InpuGroup>
                        <InpuGroup>
                          <label htmlFor="addressNumber">Número</label>
                          <input
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            className={
                              checkInputHasError('addressNumber') ? 'error' : ''
                            }
                            value={form.values.addressNumber}
                            id="addressNumber"
                            type="text"
                          />
                        </InpuGroup>
                      </Row>
                      <InpuGroup>
                        <label htmlFor="complement">
                          Complemento (opcional)
                        </label>
                        <input
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkInputHasError('complement') ? 'error' : ''
                          }
                          value={form.values.complement}
                          id="complement"
                          type="text"
                        />
                      </InpuGroup>
                      <Button
                        className="margin-top"
                        type="button"
                        onClick={() => {
                          const requiredFields = [
                            'name',
                            'address',
                            'city',
                            'cep',
                            'addressNumber'
                          ] as const
                          const isFormValid = requiredFields.every(
                            (field) => form.values[field] && !form.errors[field]
                          )

                          if (!isFormValid) {
                            alert('Preencha todos os campos obrigatórios')
                            form.setTouched(
                              requiredFields.reduce(
                                (acc, field) => ({ ...acc, [field]: true }),
                                {}
                              ),
                              true
                            )
                          } else {
                            setViewsForm(false)
                          }
                        }}
                      >
                        Continuar com o pagamento
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setViewsCartForms(true)}
                      >
                        Voltar para o carrinho
                      </Button>
                    </>
                  ) : (
                    <>
                      <InpuGroup>
                        <label htmlFor="CardName">Nome no cartão</label>
                        <input
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkInputHasError('CardName') ? 'error' : ''
                          }
                          value={form.values.CardName}
                          id="CardName"
                          type="text"
                        />
                      </InpuGroup>
                      <RowCard>
                        <InpuGroup>
                          <label htmlFor="CardNumber">Número no cartão</label>
                          <InputMask
                            mask="9999 9999 9999 9999"
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            className={
                              checkInputHasError('CardNumber') ? 'error' : ''
                            }
                            value={form.values.CardNumber}
                            id="CardNumber"
                            type="text"
                          />
                        </InpuGroup>
                        <InpuGroup>
                          <label htmlFor="cvv">CVV</label>
                          <InputMask
                            mask="999"
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            className={checkInputHasError('cvv') ? 'error' : ''}
                            value={form.values.cvv}
                            id="cvv"
                            type="text"
                          />
                        </InpuGroup>
                      </RowCard>
                      <Row>
                        <InpuGroup>
                          <label htmlFor="expiresMonth">
                            Mês do vencimento
                          </label>
                          <InputMask
                            mask="99"
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            className={
                              checkInputHasError('expiresMonth') ? 'error' : ''
                            }
                            value={form.values.expiresMonth}
                            id="expiresMonth"
                            type="text"
                          />
                        </InpuGroup>
                        <InpuGroup>
                          <label htmlFor="expiresYear">Ano do vencimento</label>
                          <InputMask
                            mask="99"
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                            className={
                              checkInputHasError('expiresYear') ? 'error' : ''
                            }
                            value={form.values.expiresYear}
                            id="expiresYear"
                            type="text"
                          />
                        </InpuGroup>
                      </Row>
                      <Button className="margin-top" type="submit">
                        Finalizar pagamento
                      </Button>
                      <Button type="submit" onClick={() => setViewsForm(true)}>
                        Voltar para a edição de endereço
                      </Button>
                    </>
                  )}
                </Form>
              </>
            ) : (
              <>
                <h3>Pedido realizado - {data?.orderId}</h3>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido. Gostaríamos de ressaltar que nossos entregadores
                  não estão autorizados a realizar cobranças extras. Lembre-se
                  da importância de higienizar as mãos após o recebimento do
                  pedido, garantindo assim sua segurança e bem-estar durante a
                  refeição. Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <Button type="button" onClick={Clear}>
                  Concluir
                </Button>
              </>
            )}
          </>
        )}
      </Aside>
      <Overlay onClick={getActiveTheCart}></Overlay>
    </Container>
  )
}

export default Cart
