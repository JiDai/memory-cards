import {createActionCreator, createReducer} from 'deox';

export const newGame = createActionCreator('NEW_GAME');
export const flipCard = createActionCreator('FLIP_CARD',
    resolve => (index: number) => resolve(index)
);

export enum CardStatus {
    faceDown,
    selected,
    valid,
}

export type Card = {
    symbol: string
    status: CardStatus
}

export type GameState = {
    boardSize: number
    moves: number
    board: Card[]
}

const defaultState: GameState = {
    boardSize: 4,
    moves: 0,
    board: [],
};

const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const gameReducer = createReducer(defaultState, handleAction => [
    handleAction(newGame, state => {
        let boardSymbols = symbols.slice(0, state.boardSize * 2);
        boardSymbols = boardSymbols.concat(boardSymbols);
        boardSymbols.sort(() => Math.random() - 0.5);

        const board = boardSymbols
            .map((symbol: string, i: number) => {
                return {
                    symbol,
                    status: CardStatus.faceDown
                };
            });

        return {
            ...defaultState,
            board,
        };
    }),

    handleAction(flipCard, (state, {payload}) => {
        const selectedCardCount = state.board.filter(c => c.status === CardStatus.selected).length;
        if (selectedCardCount >= 2) {
            return state;
        }

        const newBoard = [...state.board];
        newBoard[payload].status = CardStatus.selected;

        return {
            ...state,
            board: newBoard,
        };
    }),
]);

export default gameReducer;
