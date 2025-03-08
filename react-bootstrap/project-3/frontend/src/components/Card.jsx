// src/components/Card.jsx
import React from "react";
import Button from "./Button";

const Card = ({ title, text, btnText, btnType }) => {
  return (
    <div className="card p-3">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      {btnText && <Button text={btnText} type={btnType} />}
    </div>
  );
};

export default Card;
