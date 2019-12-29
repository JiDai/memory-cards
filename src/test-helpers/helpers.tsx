import React from "react";
import {AppState} from "../reducers";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

export function ConnectedComponent(component: React.FunctionComponent, store: AppState) {
    const mockStore = configureStore([]);
    return <Provider store={mockStore(store)}>
        {React.createElement(component)}
    </Provider>;
}
