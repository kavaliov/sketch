import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonType {
  onClick?: () => any;
  className?: string;
}

const Button: React.FC<ButtonType> = ({ children, onClick, className }) => (
  <button onClick={onClick} className={classNames(styles.wrapper, className)}>
    {children}
  </button>
);

export default Button;
