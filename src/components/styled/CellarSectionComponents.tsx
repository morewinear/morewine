import styled from 'styled-components'

export const CellarsContainer = styled.div`
  width: calc(100% - 2 * 5.55%);
  height: calc(100% - 52px - 52px - 1.5em);
  margin-top: calc(52px + 1.5em);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  gap: 0px 4px;

  @media (max-width: 519px) {
    gap: 4px 4px;
    height: calc(100% - 52px);
    margin-top: calc(20px / 2);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

type CellarBackgroundType = {
  background: string,
}

export const CellarBackground = styled.div<CellarBackgroundType>`
  background-color: #11111199;
  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-color: rgba(17, 17, 17, 0.6);
  background-blend-mode: darken;
  transition: all .4s ease-in-out;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: rgba(17, 17, 17, 0.1);

    & > div {
      backdrop-filter: grayscale(0%);
    }
  }
`

export const CellarLogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .4s ease-in-out;
  backdrop-filter: grayscale(100%);
`

export const CellarLogoAnchor = styled.a`
  width: 65%;
  height: 65%;
  transition: all .15s ease-in-out;

  &:hover {
    width: 70%;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`