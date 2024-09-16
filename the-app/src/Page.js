import { useContext } from 'react';

import { ThemeContext } from './App.js';

export default function Page() {
    const theme = useContext(ThemeContext);

    return(
        <div>
            <h1>Hello {theme}</h1>
        </div>
    )
}