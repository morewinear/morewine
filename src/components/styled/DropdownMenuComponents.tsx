import styled, { keyframes } from 'styled-components'

export const DropdownMenuContainer = styled.div`
  position: relative;
  width: max-content;
  height: min-content;
  margin: 0;
`

export const DropdownContainer = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #00000099;
  right: 0;
`

const DropdownItemAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
    visibility: hidden;
  }

  to {
    opacity: .6;
    transform: translateX(0px);
    visibility: visible;
  }
`

export const DropdownItem = styled.a<{ index: number }>`
  display: none;
  visibility: hidden;
  width: max-content;

  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: calc(0.9 * 0.813em);
  font-weight: 700;
  letter-spacing: 0.08em;

  transition: all .2s ease-in-out;

  margin: 8px 0;
  margin-left: 16px;
  margin-right: 96px;

  right: 0;
  
  animation: ${DropdownItemAnimation} .2s ease-in-out forwards;
  animation-delay: ${({ index }) => 0.2 * index}s;

  &[data-show=true] {
    display: inline-block;
  }

  &:hover {
    opacity: 1 !important;
  }
`