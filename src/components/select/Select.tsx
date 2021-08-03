import React from "react";
import classNames from "classnames";
import styles from "./Select.module.css";

interface SelectType {
  onChange?: (e: any) => any;
  className?: string;
  style?: any;
  value?: any;
}

const Select: React.FC<SelectType> = ({
  children,
  onChange,
  value,
  className,
  style,
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={classNames(styles.wrapper, className)}
      style={style}
    >
      {children}
    </select>
  );
};

export default Select;
