import { useState } from 'react';

export default function System(type, action, val) {
    const [screenState, changeScreen] = useState(0);

    if(type === "screen") {
        if(action === "view") {
            return screenState;
        }else if(action === "change") {
            changeScreen(val);
        }
    }
}