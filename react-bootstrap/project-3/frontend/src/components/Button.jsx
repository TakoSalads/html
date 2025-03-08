// src/components/Button.jsx
import React from "react";

const Button = ({ text, type = "primary", onClick }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
