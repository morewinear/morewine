import { Dispatch, MutableRefObject, ReactElement, RefObject, SetStateAction, useCallback, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import {
  SectionHandlerContainer,
  ScrollToTopContainer,
} from './styled/SectionHandlerComponents'

import { SectionType } from './Section'

type SectionHandlerType = {
  children: any,
  navbarCallback: Dispatch<SetStateAction<boolean>>,
  sectionCallback?: Dispatch<SetStateAction<string>> | undefined,
  section?: string | undefined,
  sort?: boolean,
  accumulateSpeed?: boolean,
}

export default function SectionHandler({ children, navbarCallback: setUpdateNavbar, section = '', sectionCallback, sort = false, accumulateSpeed }: SectionHandlerType): JSX.Element {
  const [prevSection, setPrevSection] = useState('')
  const [scrollIndex, setScrollIndex] = useState(1)
  const [shouldScroll, setShouldScroll] = useState(false)
  const [sortedChildren, setSortedChildren] = useState<Array<unknown> | null>(null)
  const [ref, scroll] = useScroll()

  const { pow, min } = Math

  useEffect(() => {
    setUpdateNavbar(scroll > 52)
  }, [scroll])

  useEffect(() => {
    if (!section) return
    if (section.length < 1) return
    if (!(children instanceof Array)) return
    children = children.flat()
    const foundSection = (children as Array<ReactElement<SectionType>>).filter(({ props }) => {
      if (!props) return false
      const { id } = props
      return id === section
    })[0]

    if (foundSection) {
      if (section === 'nosotros') {
        setScrollIndex((children as Array<ReactElement<SectionType>>).length - 1)
        setPrevSection('nosotros')
      } else if (sort && section !== 'nosotros') {
        console.log('asdasd')
        setSortedChildren(moveItem(children, (children as Array<ReactElement<SectionType>>).indexOf(foundSection), 1))
      } else {
        setScrollIndex((children as Array<ReactElement<SectionType>>).indexOf(foundSection))
      }
      setShouldScroll(true)
    }

    if (sectionCallback) sectionCallback('')
  }, [section])

  const smoothScroll = useCallback((node: HTMLDivElement, duration: number, toTop: boolean) => {
    if (!toTop && !shouldScroll) return

    const easing = (x: number) => x < 0.5 ? 4 * pow(x, 3) : 1 - pow(-2 * x + 2, 3) / 2


    const totalHeight = +!toTop * (node.offsetHeight - +(node.scrollTop < 52) * 20)
    let start: number | undefined = undefined

    window.requestAnimationFrame(function step(timestamp: number) {
      const nodeY = node.scrollTop
      const diff = ((sort && prevSection != 'nosotros') ? 1 : scrollIndex) * totalHeight - nodeY
      console.log('>>', section, (sort && section != 'nosotros') ? 1 : scrollIndex)
      if (diff === 0) {
        if (!toTop) setShouldScroll(false)
        return
      }

      if (!start) start = timestamp

      const time = timestamp - start

      node.scrollTo(0, nodeY + diff * easing(min(time / duration, 1)))

      if (time < duration) {
        window.requestAnimationFrame(step)
      } else {
        if (!toTop) setShouldScroll(false)
        setPrevSection('')
      }
    })
  }, [section, shouldScroll])

  useEffect(() => {
    const Node = ref['current']
    if (!Node) return

    smoothScroll(Node, accumulateSpeed ? ((children as Array<ReactElement<SectionType>>).length + 1) * 2 * 250 : 800, false)
  }, [ref, shouldScroll])

  const scrollToTopClick = useCallback(() => {
    const Node = ref['current']
    if (!Node) return

    smoothScroll(Node, accumulateSpeed ? ((children as Array<ReactElement<SectionType>>).length + 1) * 2 * 250 : 800, true)
  }, [ref])

  return (
    <>
      <SectionHandlerContainer ref={ref as ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined} data-update={scroll > 52}>
        <ScrollToTopContainer data-show={scroll > 52} onClick={scrollToTopClick}>
          <FontAwesomeIcon icon={faArrowUp} />
        </ScrollToTopContainer>
        {sortedChildren || children}
      </SectionHandlerContainer>
    </>
  )
}

function useScroll(): [MutableRefObject<HTMLDivElement | undefined>, number] {
  const [scroll, setScroll] = useState(0)

  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    const { current: Node } = ref
    if (!Node) return

    const scrollHandler = () => setScroll(Node.scrollTop)

    Node.addEventListener('scroll', scrollHandler)

    return () => Node.removeEventListener('scroll', scrollHandler)
  }, [ref])

  return [ref, scroll]
}

function moveItem<T>(arr: Array<T>, from: number, to: number): Array<T> {
  const copy = [...arr]
  let selected = Array<T>()
  const [a, b, c] = copy.splice((Math.ceil(from / 3) - 1) * 3 + 1, 3)
  switch (from % 3) {
    case 0: {
      selected = [c, a, b]
      break;
    }

    case 1: {
      selected = [a, b, c]
      break;
    }

    case 2: {
      selected = [b, c, a]
      break;
    }
  }
  console.log(selected)
  copy.splice(to, 0, ...selected)
  return copy
}