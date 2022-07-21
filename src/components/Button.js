import React from "react";
import "../stylesheet/Button.css";

function Button({ text, isClickButton, manageClick }) {
  return (
    <button
      className={isClickButton ? "button-click" : "button-reset"}
      onClick={manageClick}
    >
      {text}
    </button>
  );
}

export default Button;
