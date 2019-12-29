/** @jsx jsx */
import {jsx} from "@emotion/core";
import React from 'react';

import * as st from './ButtonStyles';

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 *  Button Functional Component.
 */
const Button: React.FC<ButtonProps> = ({
                                     children,
                                     onClick,
                                 }) => {
    return (
        <button css={[st.baseStyle]} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
