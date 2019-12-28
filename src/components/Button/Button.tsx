import React, {FC, MouseEvent} from 'react';

import './Button.module.css';

export type ButtonProps = {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

/**
 *  Button Functional Component.
 */
const Button: FC<ButtonProps> = ({
                                     children,
                                     onClick,
                                 }) => {
    return (
        <button className="Button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
