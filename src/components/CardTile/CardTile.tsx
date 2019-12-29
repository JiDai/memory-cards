/** @jsx jsx */
import {jsx} from "@emotion/core";
import {FC, MouseEvent} from 'react';

import {Card, CardStatus} from "../../reducers/game";
import * as st from './CardTileStyles';


export type CardTileProps = {
    card: Card
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

/**
 *  CardTile Functional Component.
 */
const CardTile: FC<CardTileProps> = ({
                                         card,
                                         onClick,
                                     }) => {
    const isFlipped = card.status === CardStatus.selected;
    const isValid = card.status === CardStatus.valid;

    return (
        <button css={st.baseStyle} onClick={onClick}>
            <div css={[st.flipperStyle, (isFlipped || isValid) && st.flipperFlippedStyle]}>
                <div css={[st.sideStyle, st.backSideStyle]} data-testid="back-card">
                    <i className="material-icons">360</i>
                </div>
                <div css={[st.sideStyle, st.frontSideStyle, isValid && st.validStyle]} data-testid="front-card">
                    <i className="material-icons">{card.symbol}</i>
                </div>
            </div>
        </button>
    );
};

export default CardTile;
