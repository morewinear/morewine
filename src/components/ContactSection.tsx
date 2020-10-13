import { Dispatch, SetStateAction, useCallback, useEffect, useReducer, useRef, useState, } from 'react'
import Axios, { AxiosRequestConfig } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons'

import Section from './Section'

import {
  ContactSectionContainer,
  Title,
  ContactForm,
  BlockContainer,
  Label,
  Input,
  TextareaContainer,
  Textarea,
  Button,
  StatusContainer,
  StatusText,
} from './styled/ContactSectionComponents'

type EventType = {
  target: {
    value: string
  }
}

interface Post {
  status: number
  error?: any
}

export default function ContactSection(): JSX.Element {
  const [response, status, trigger, setOptions] = useAxios<Post>('/api/email')

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [comments, setComments] = useState<string>('')

  const [successful, setSuccessful] = useState<boolean | null>(null)

  const updateName = ({ target }: EventType) => setName(target['value'])
  const updatePhone = ({ target }: EventType) => setPhone(target['value'])
  const updateEmail = ({ target }: EventType) => setEmail(target['value'])
  const updateComments = ({ target }: EventType) => setComments(target['value'])

  const onSubmit = useCallback((event) => {
    event.preventDefault()
    setOptions({
      method: 'post',
      data: {
        name,
        phone,
        email,
        comments,
      }
    })
    trigger()
  }, [name, phone, email, comments])

  useEffect(() => {
    setSuccessful(response === 'fetched' && !!status && status['status'] === 200)
  }, [response, status])

  return (
    <>
      <Section>
        <ContactSectionContainer data-pending={response !== 'init'}>
          <StatusContainer data-status-container data-status={!!status ? status['status'] || 'null' : 'null'}>
            <FontAwesomeIcon icon={faCheck} data-check />
            <FontAwesomeIcon icon={faSpinner} spin data-spinner />

            <StatusText data-check>Enviado exitosamente</StatusText>
            <StatusText data-spinner>Enviando...</StatusText>
          </StatusContainer>
          <Title>Contacto:</Title>
          <ContactForm>
            <BlockContainer>
              <Label htmlFor={'name'}>Nombre y apellido:</Label>
              <Input type={'text'} name={'name'} onChange={updateName} />
            </BlockContainer>

            <BlockContainer>
              <Label htmlFor={'phone'}>Teléfono:</Label>
              <Input type={'tel'} name={'phone'} onChange={updatePhone} />
            </BlockContainer>

            <BlockContainer>
              <Label htmlFor={'email'}>Email:</Label>
              <Input type={'email'} name={'email'} onChange={updateEmail} />
            </BlockContainer>

            <TextareaContainer>
              <Label>Comentarios:</Label>
              <Textarea onChange={updateComments} />
            </TextareaContainer>

            <Button onClick={onSubmit}>Enviar</Button>
          </ContactForm>
        </ContactSectionContainer>
      </Section>
    </>
  )
}

interface State<T> {
  status: 'init' | 'fetching' | 'error' | 'fetched'
  data?: T
  error?: string
}

type Action<T> = | { type: 'request' } | { type: 'success'; payload: T } | { type: 'failure'; payload: string }

function useAxios<T = unknown>(url: string): [string, T | undefined, () => void, Dispatch<SetStateAction<AxiosRequestConfig>>] {
  const [trigger, setTrigger] = useState<boolean>(false)
  const [options, setOptions] = useState<AxiosRequestConfig>({})
  let cancelRequest = false

  const initialState: State<T> = {
    status: 'init',
    error: undefined,
    data: undefined,
  }

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'request': {
        return { ...initialState, status: 'fetching' }
      }
      case 'success': {
        return { ...initialState, status: 'fetched', data: action.payload }
      }
      case 'failure': {
        return { ...initialState, status: 'error', error: action.payload }
      }
      default: {
        return state
      }
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return
    if (!trigger) return

    const fetchData = async () => {
      dispatch({ type: 'request' })
      try {
        const response = await Axios(url, options)
        if (cancelRequest) return
        dispatch({ type: 'success', payload: response.data })
      } catch (error) {
        if (cancelRequest) return
        dispatch({ type: 'failure', payload: error.message })
      }
    }
    fetchData()
    return () => {
      cancelRequest = true
    }
  }, [trigger, options])

  return [state['status'], state['data'], () => setTrigger(true), setOptions]
}