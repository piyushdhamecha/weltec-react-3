// import styled from "styled-components";
// import buttonStyle from "./Button.module.css";
import ButtonStyledDefault, { ButtonStyledPrimary, ButtonStyledSecondary } from "./Button.styled";

const Button = () => {
  // const inlineStyle = {
  //   borderRadius: "15px"
  // }

  return (
    <div>
      <ButtonStyledDefault>Default Button</ButtonStyledDefault>
      <ButtonStyledPrimary>Primary Button</ButtonStyledPrimary>
      <ButtonStyledSecondary>Secondary Button</ButtonStyledSecondary>
    </div>
  );
  // return (
  //   <button style={inlineStyle} className={`${buttonStyle.btn} ${buttonStyle.primary}`}>
  //     Save
  //   </button>
  // );
};

export default Button;
