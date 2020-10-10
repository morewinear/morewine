import styled from 'styled-components'

export const CarouselsContainer = styled.div`
  width: calc(100% - 2 * 5.55%);
  height: calc(100% - 52px - 52px - 1.5em);
  margin-top: calc(52px + 1.5em);
  display: grid;
  gap: 2px;

  @media (max-width: 419px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (min-width: 420px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
  }
`