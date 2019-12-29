/** @jsx jsx */
import {jsx} from "@emotion/core";
import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import CardTile from "../CardTile/CardTile";
import {Card, flipCard} from "../../reducers/game";
import * as st from './BoardStyles';

const Board: React.FC = () => {
    const cards = useSelector((state: any) => state.game.board);
    const dispatch = useDispatch();
    return (
        <div css={st.baseStyle}>
            {cards.map((card: Card, index: number) => {
                return <CardTile key={`Card${index}`} card={card} onClick={() => dispatch(flipCard(index))}/>;
            })}
        </div>
    );
};

export default Board;
