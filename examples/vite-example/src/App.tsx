import './App.css'

import {
    DisplayPlatform
} from 'pxlaw-lib'

function App() {
    return (
        <>
            <DisplayPlatform platformSize={{ x: 15, y: 17}} customColor={{
                blue: '#00008B',
                red: '#6B0000',
                yellow: '#FFFFED'
            }}/>
        </>
    )
}

export default App