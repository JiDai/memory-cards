import React from 'react';
import {render} from '@testing-library/react';

import CardTile from './CardTile';
import {Card, CardStatus, Symbol} from "../../reducers/game";


test('renders button children', () => {
    const card: Card = {
        symbol: Symbol.bug_report,
        status: CardStatus.faceDown,
        position: 0
    };
    const {getByText} = render(<CardTile card={card}/>);
    expect(getByText('360')).toBeVisible();
    // Visibility is not handled properly because of 3d manipulation on Card
    expect(getByText(Symbol.bug_report)).toBeInTheDocument();
});
