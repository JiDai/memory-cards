import {createActionCreator, createReducer} from 'deox';

export const newGame = createActionCreator('NEW_GAME');

export type GameState = {
    boardSize: number
    moves: number
    board: number[]
}

const defaultState: GameState = {
    boardSize: 5,
    moves: 0,
    board: []
};

const gameReducer = createReducer(defaultState, handleAction => [
    handleAction(newGame, state => ({
        ...state,
        ...defaultState
    })),
]);

export default gameReducer;
