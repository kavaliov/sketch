import React from "react";
import { Button } from "components";
import classNames from "classnames";
import closeIcon from "./assets/close.svg";
import styles from "./Panel.module.css";

interface PanelType {
  opened: boolean;
  title?: string;
  onClose: () => any;
}

const Panel: React.FC<PanelType> = ({ opened, onClose, title, children }) => {
  return (
    <div className={classNames(styles.wrapper, { [styles.opened]: opened })}>
      <div className={styles.header}>
        {title}
        <Button onClick={onClose} className={styles.close}>
          <img src={closeIcon} alt="" />
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Panel;
