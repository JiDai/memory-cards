import {createActionCreator, createReducer} from 'deox';

export const newGame = createActionCreator('NEW_GAME');
export const flipCard = createActionCreator('FLIP_CARD',
    resolve => (index: number) => resolve(index)
);


export enum Symbol {
    'work' = 'work',
    'face' = 'face',
    'build' = 'build',
    'explore' = 'explore',
    'grade' = 'grade',
    'home' = 'home',
    'motorcycle' = 'motorcycle',
    'pets' = 'pets',
    'rowing' = 'rowing',
    'hourglass_empty' = 'hourglass_empty',
    'favorite' = 'favorite',
    'bug_report' = 'bug_report',
    'flight' = 'flight',
    'room_service' = 'room_service',
    'cake' = 'cake',
    'sports_basketball' = 'sports_basketball',
}

export enum CardStatus {
    faceDown,
    selected,
    valid,
}

export type Card = {
    position: number
    symbol: Symbol
    status: CardStatus
}

export type GameState = {
    boardSize: number
    moves: number
    board: Card[]
    startedAt?: Date
}

export const defaultState: GameState = {
    boardSize: 4,
    moves: 0,
    board: [],
};

const gameReducer = createReducer(defaultState, handleAction => [
    handleAction(newGame, state => {
        let boardSymbols = [...Object.keys(Symbol)];
        boardSymbols.sort(() => Math.random() - 0.5);
        boardSymbols = boardSymbols.slice(0, state.boardSize * 2);
        boardSymbols = boardSymbols.concat(boardSymbols);

        const board: Card[] = boardSymbols
            .map((symbol: string, i: number): Card => {
                return {
                    symbol: symbol as Symbol,
                    status: CardStatus.faceDown,
                    position: i,
                };
            });

        return {
            ...defaultState,
            startedAt: new Date(),
            board,
        };
    }),

    handleAction(flipCard, (state, {payload}) => {
        const selectedCard = state.board[payload];
        if (selectedCard.status === CardStatus.valid || selectedCard.status === CardStatus.selected) {
            return state;
        }

        const newBoard: Card[] = [...state.board];
        let newMoves = state.moves;

        let faceUpCards: Card[] = state.board.filter(c => c.status === CardStatus.selected);
        if (faceUpCards.length === 1) {
            const faceUpCard = faceUpCards[0];
            if (faceUpCard.symbol === selectedCard.symbol) {
                newBoard[faceUpCard.position].status = CardStatus.valid;
                newBoard[selectedCard.position].status = CardStatus.valid;
            }
        }

        if (faceUpCards.length === 2 && faceUpCards[0].status !== CardStatus.valid) {
            newBoard[faceUpCards[0].position].status = CardStatus.faceDown;
            newBoard[faceUpCards[1].position].status = CardStatus.faceDown;
        }

        if (newBoard[selectedCard.position].status !== CardStatus.valid) {
            newBoard[selectedCard.position].status = CardStatus.selected;
        }

        if (faceUpCards.length === 2) {
            newMoves += 1;
        }

        return {
            ...state,
            board: newBoard,
            moves: newMoves,
        };
    }),
]);

export default gameReducer;
