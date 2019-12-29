import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AppState} from "../../reducers";
import {newGame} from "../../reducers/game";
import Board from "../Board/Board";
import Button from "../Button/Button";

import st from './App.module.css';
import Timer from "../Timer/Timer";

const App: React.FC = () => {
    const dispatch = useDispatch();
    const moves = useSelector<AppState, number>((state) => state.game.moves);
    const startedAt = useSelector<AppState, Date>((state) => state.game.startedAt!);

    return (
        <div className={st.App}>
            <header className={st.AppHeader}>
                <h1>
                    Memorii
                    <div style={{fontSize: '14px'}}>Memory card game</div>
                </h1>

                <div style={{marginBottom: '2rem'}}>
                    <Button onClick={() => dispatch(newGame())}>New game</Button>
                </div>

                <div className={st.AppScore}>
                    <div>Moves: {moves}</div>
                    {startedAt &&
                    <Timer startedAt={startedAt}/>
                    }
                </div>
            </header>

            <Board/>
        </div>
    );
};

export default App;
