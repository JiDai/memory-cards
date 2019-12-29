import React from 'react';
import {render} from '@testing-library/react';

import {ConnectedComponent} from "../../test-helpers/helpers";
import App from './App';
import {AppState} from "../../reducers";
import {defaultState} from "../../reducers/game";


test('renders title', () => {
    const appState: AppState = {
        game: defaultState
    };
    const {getByText} = render(ConnectedComponent(App, appState));
    const linkElement = getByText(/Memorii/i);
    expect(linkElement).toBeInTheDocument();
});
