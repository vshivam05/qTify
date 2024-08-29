import React from "react";
import NavbarStyles from "../Navbar/Navbar.module.css";
const Button = ({ text, eventHandler }) => {
  return (
    <div>
      <button
        className={NavbarStyles.feedback}
        onClick={(e) =>
          eventHandler.event === "onClick" && eventHandler.handler(e) 
        }
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

