import { CSSProperties, useEffect, useRef, useState } from 'react'
import { useSpring, useChain, useTransition } from 'react-spring'

import Section from './Section'

import {
  WineInfoContainer,
  CellarContainer,
  WineContainer,
  WineImage,
  InfoContainer,
  DescriptionContainer,
  LinksContainer,
  LinkContainer,
} from './styled/WineInfoSectionComponents'

type WineInfoSectionType = {
  id: string,
  img: string,
  background: string,
  logo: any,
  description: string,
  datasheet: any,
  web: string,
  store: string,
}

export default function WineInfoSection({ id, img, background, logo: { default: Logo }, description, datasheet: { default: datasheet }, web, store }: WineInfoSectionType): JSX.Element {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.85 })
  const [links] = useState([
    ({ style }: { style: CSSProperties }) => <LinkContainer href={datasheet} style={{ ...style }}>Ficha Técnica</LinkContainer>,
    ({ style }: { style: CSSProperties }) => <LinkContainer href={web} style={{ ...style }}>Web Oficial</LinkContainer>,
    ({ style }: { style: CSSProperties }) => <LinkContainer href={store} style={{ ...style }}>Ver en Tienda</LinkContainer>,
  ])
  const [show, setShow] = useState<boolean>(false)
  const debouncedShow = useDebounce(show, 200)

  useEffect(() => {
    if (!entry) return
    setShow(entry.isVisible)
  }, [entry])

  const WineImageRef = useRef(null)
  const WineImageSpring = useSpring({
    ref: WineImageRef,
    opacity: debouncedShow ? 1 : 0,
    transform: debouncedShow ? 'translateX(0px)' : 'translateX(-10px)',
    config: {
      mass: 5,
      tension: 500,
      friction: 80
    },
  })

  const DescriptionContainerRef = useRef(null)
  const DescriptionContainerSpring = useSpring({
    ref: DescriptionContainerRef,
    opacity: debouncedShow ? 0.6 : 0,
    transform: debouncedShow ? 'translateX(0px)' : 'translateX(-10px)',
    config: {
      mass: 5,
      tension: 500,
      friction: 80
    },
  })

  const LinkContainerRef = useRef(null)
  const LinkContainerTransition = useTransition(debouncedShow ? links : [], null, {
    ref: LinkContainerRef,
    from: {
      opacity: 0,
      transform: 'translateX(-10px)',
    },
    enter: {
      opacity: 0.6,
      transform: 'translateX(0px)'
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-10px)'
    },
    trail: 200 / links.length,
    config: {
      mass: 5,
      tension: 500,
      friction: 80
    },
  })

  useChain(debouncedShow ? [WineImageRef, DescriptionContainerRef, LinkContainerRef] : [LinkContainerRef, DescriptionContainerRef, WineImageRef], [0, 0.2, 0.4])

  return (
    <>
      <Section id={id}>
        <WineInfoContainer ref={ref}>
          <WineContainer>
            <WineImage background={img} style={{ ...WineImageSpring }} />
            <InfoContainer>
              <DescriptionContainer style={{ ...DescriptionContainerSpring }}>
                {description}
              </DescriptionContainer>
              <LinksContainer>
                {
                  LinkContainerTransition.map(({ item: Item, props, key }) => {
                    return <Item key={key} style={props} />
                  })
                }
              </LinksContainer>
            </InfoContainer>
          </WineContainer>
          <CellarContainer background={background}>
            <Logo />
          </CellarContainer>
        </WineInfoContainer>
      </Section>
    </>
  )
}

interface ExtendedEntry extends IntersectionObserverEntry {
  isVisible: boolean,
}

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean,
}

type IntersectionReturnType<T> = [(node: T) => void, ExtendedEntry?]

function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}: Args): IntersectionReturnType<T> {
  const observer = useRef<IntersectionObserver | null>(null)
  const [entry, setEntry] = useState<ExtendedEntry>()
  const [node, setNode] = useState<T>()

  const isClient = useIsClient()
  const hasIOSupport = isClient && !!window.IntersectionObserver
  const noUpdate = entry?.isVisible && freezeOnceVisible
  const IOOptions = {
    threshold,
    root,
    rootMargin,
  }

  const updateEntry = (entries: IntersectionObserverEntry[]): void => {
    const isVisible = entries[0].isIntersecting
    setEntry({ ...entries[0], isVisible })
  }

  useEffect(() => {
    if (!hasIOSupport || noUpdate || typeof node === 'undefined') return

    if (observer['current']) observer['current'].disconnect()

    observer['current'] = new IntersectionObserver(updateEntry, IOOptions)

    const currentObserver = observer['current']

    currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node, threshold, root, rootMargin, noUpdate])


  return [setNode, entry]
}

function useIsClient() {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return isClient
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}