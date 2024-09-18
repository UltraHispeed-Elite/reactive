import { useContext } from 'react';

import { ScreenContext } from './App.js';

export default function Page() {
    const screen = useContext(ScreenContext);
    let val = 3;

    return(
        <div onClick={screen.bind(this, val)}>
            <h1>Hello</h1>
        </div>
    )
}