import React from "react";
import classNames from "classnames";
import styles from "./Select.module.css";

interface SelectType {
  onChange?: (e: any) => any;
  className?: string;
  style?: any;
}

const Select: React.FC<SelectType> = ({
  children,
  onChange,
  className,
  style,
}) => {
  return (
    <select
      onChange={onChange}
      className={classNames(styles.wrapper, className)}
      style={style}
    >
      {children}
    </select>
  );
};

export default Select;
