import React from 'react';
import {render} from '@testing-library/react';

import {ConnectedComponent} from "../../test-helpers/helpers";
import {AppState} from "../../reducers";
import {CardStatus, defaultState, Symbol} from "../../reducers/game";
import Board from './Board';


test('renders cards', () => {
    const appState: AppState = {
        game: {
            ...defaultState,
            board: [
                {position: 0, symbol: Symbol.work, status: CardStatus.faceDown},
                {position: 1, symbol: Symbol.bug_report, status: CardStatus.faceDown},
                {position: 2, symbol: Symbol.work, status: CardStatus.faceDown},
                {position: 3, symbol: Symbol.bug_report, status: CardStatus.faceDown},
            ]
        }
    };
    const {getAllByText} = render(ConnectedComponent(Board, appState));

    expect(getAllByText(new RegExp(Symbol.work))).toHaveLength(2);
    expect(getAllByText(new RegExp(Symbol.bug_report))).toHaveLength(2);
});
