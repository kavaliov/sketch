import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonType {
  onClick?: () => any;
  className?: string;
  active?: boolean;
}

const Button: React.FC<ButtonType> = ({
  children,
  onClick,
  className,
  active = false,
}) => (
  <button
    onClick={onClick}
    className={classNames(styles.wrapper, className, {
      [styles.active]: active,
    })}
  >
    {children}
  </button>
);

export default Button;
