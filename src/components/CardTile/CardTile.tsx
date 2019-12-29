/** @jsx jsx */
import {FC, MouseEvent} from 'react';
import {css, jsx} from "@emotion/core";

import {Card, CardStatus} from "../../reducers/game";

export type CardTileProps = {
    card: Card
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const baseStyle = css`
    -webkit-appearance: none;
    border: 0;
    width: 100px;
    height: 100px;
    background-color: aquamarine;
`;

const flippedStyle = css`
    background-color: pink
`;

/**
 *  CardTile Functional Component.
 */
const CardTile: FC<CardTileProps> = ({
                                         card,
                                         onClick,
                                         children,
                                     }) => {
    const styles = [
        baseStyle,
        card.status === CardStatus.selected && flippedStyle,
    ];

    return (
        <button css={styles} onClick={onClick}>
            {children}
        </button>
    );
};

export default CardTile;
