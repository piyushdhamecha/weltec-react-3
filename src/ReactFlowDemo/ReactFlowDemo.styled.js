import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledSelect = styled.select`
  width: 150px;
  padding: 4px;
  margin-bottom: 10px;
`

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