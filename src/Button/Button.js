import buttonStyle from "./Button.module.css";

const Button = () => {
  const inlineStyle = {
    borderRadius: "15px"
  }

  return (
    <button style={inlineStyle} className={`${buttonStyle.btn} ${buttonStyle.primary}`}>
      Save
    </button>
  );
};

export default Button;
