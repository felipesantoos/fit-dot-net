import React from "react";
import { ReactNode } from "react";

import styles from '../styles/components/Button.module.scss';

interface ButtonProps {
    children: ReactNode;
    type?: "normal" | "primary";
}

function Button({ children, type }: ButtonProps) {
    return (
        <button className={`${styles.container} ${styles[type!]}`}>
            {children}
        </button>
    );
}

export default Button;
