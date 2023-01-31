// import inputStyle from './Input.module.css'
import styled from 'styled-components'

const InputStyled = styled.input`
  font-size: 14px;
  border-color: orange;
  border-radius: 10px;
  padding: 10px;
`

const Input = () => {
  // console.log(inputStyle)
  // return <input className={`${inputStyle.input} ${inputStyle.primary} ${inputStyle.container}`} />
  return <InputStyled />
}

export default Input