import { useContext } from 'react';

import { ThemeContext, ChangeContext } from './App.js';

export default function Page() {
    const theme = useContext(ThemeContext);
    const change = useContext(ChangeContext);

    return(
        <div onClick={change}>
            <h1>Hello {theme}</h1>
        </div>
    )
}