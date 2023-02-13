import styled from 'styled-components'

export const TableStyled = styled.table`
  border-collapse: collapse;
  border: 1px solid gray;
  width: 100%;

  & th {
    text-align: left;
    background: lightgray;
    padding: 10px 0;
  }
`