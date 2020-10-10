import { RefObject, useRef, useState, useEffect, MutableRefObject } from 'react'

import Link from 'next/link'

import {
  DropdownMenuContainer,
  DropdownContainer,
  DropdownItem,
} from '../components/styled/DropdownMenuComponents'

import { DropType } from '../data/NavbarData'

type DropdownMenuType = {
  children: any,
  drop: DropType[] | undefined,
}

export default function DropdownMenu({ children, drop }: DropdownMenuType): JSX.Element {
  const [ref, hover] = useHover()
  const debounced = useDebounce(hover, 250)

  return (
    <>
      <DropdownMenuContainer ref={ref as ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined}>
        {children}
        <DropdownContainer>
          {drop ? drop.map(({ name, link }, index: number) => {
            return (
              <Link key={index} href={link} passHref>
                <DropdownItem index={index} data-show={debounced}>{name}</DropdownItem>
              </Link>
            )
          }) : ''}
        </DropdownContainer>
      </DropdownMenuContainer>
    </>
  )
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}

function useHover(): [MutableRefObject<HTMLElement>, boolean] {
  const [hover, setHover] = useState<boolean>(false)

  const reference = useRef<HTMLElement>(null!)

  useEffect(() => {
    const mouseEnter = () => setHover(true)
    const mouseLeave = () => setHover(false)

    reference['current'].addEventListener('mouseenter', mouseEnter)
    reference['current'].addEventListener('mouseleave', mouseLeave)

    return () => {
      reference['current'].removeEventListener('mouseenter', mouseEnter)
      reference['current'].removeEventListener('mouseleave', mouseLeave)
    }
  }, [reference])

  return [reference, hover]
}