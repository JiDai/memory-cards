import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import CardTile from "../CardTile/CardTile";
import {Card, flipCard} from "../../reducers/game";

import styles from './Board.module.css';


const Board: React.FC = () => {
    const cards = useSelector((state: any) => state.game.board);
    const dispatch = useDispatch();
    return (
        <div className={styles.Board}>
            {cards.map((card: Card, index: number) => {
                return <CardTile key={`Card${index}`} card={card} onClick={() => dispatch(flipCard(index))}/>;
            })}
        </div>
    );
};

export default Board;
