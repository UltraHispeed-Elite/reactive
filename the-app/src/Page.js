import { useContext } from 'react';

import { ScreenContext } from './App.js';

export default function Page({data}) {
    const screen = useContext(ScreenContext);

    function func() {
        screen(data);
    }

    return(
        <div onClick={func}>
            <h1>Hello</h1>
        </div>
    )
}