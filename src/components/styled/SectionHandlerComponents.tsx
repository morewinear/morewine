import styled from 'styled-components'

export const SectionHandlerContainer = styled.div`
  position: absolute;
  width: 100%;
  overflow-y: auto;
  transition: all .2s ease-in-out;
  height: calc(100% - 52px);
  top: 52px;

  &[data-update=true] {
    height: calc(100% - 72px);
    top: 72px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #111111;
  }
`

export const ScrollToTopContainer = styled.div`
  position: fixed;
  display: none;
  background-color: #121212;
  width: 64px;
  height: 64px;
  bottom: 6px;
  right: 24px;
  border-radius: 50%;
  z-index: 10000;
  box-shadow: 0px 0px 8px 5px rgba(17, 17, 17, 0.44);
  justify-content: center;
  align-items: center;

  &[data-show=true] {
    display: flex;
  }

  &:hover {
    cursor: pointer;

    & > svg {
      opacity: 1;
    }
  }

  & > svg {
    width: 100%;
    height: 100%;
    color: white;
    opacity: 0.4;
    font-size: calc(1.25 * 1.313em);
    transition: all .2s ease-in-out;
  }
`