import React, { useEffect } from "react";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    type?: "normal" | "primary";
}

function Button({ children, type }: ButtonProps) {
    return (
        <button className={`app-button ${type}`}>
            {children}
        </button>
    );
}

export default Button;
