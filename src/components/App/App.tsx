import React from 'react';
import { useDispatch } from 'react-redux';

import {newGame} from "../../reducers/game";
import Board from "../Board/Board";
import Button from "../Button/Button";

import './App.module.css';

const App: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="App">
            <header className="App-header">
                <h1>Memorii</h1>
                <p>Memory card game</p>
                <Button onClick={() => dispatch({type: newGame.type})}>New game</Button>
            </header>

            <Board/>
        </div>
    );
};

export default App;
