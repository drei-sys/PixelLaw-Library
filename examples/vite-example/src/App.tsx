import React from "react";
import './App.css'
import { useEffect } from "react";
import {
    Colors,
    createPixel,
    startPixelLaw,
    DisplayPlatform
} from 'pxlaw-lib'

function addBlue() {
    createPixel({
        color: Colors.blue,
        coordinates: {
            x: 1,
            y: 2
        }
    })
}

function addRed() {
    createPixel({
        color: Colors.red,
        coordinates: {
            x: 1,
            y: 3
        }
    })
}

function App() {
  return (
    <>
        <button onClick={startPixelLaw}>Start</button>
        <div>{DisplayPlatform}</div>
        <div className='card'>
            <button onClick={ addBlue } style={{ backgroundColor: 'blue', marginRight: '5px'}}></button>
            <button onClick={ addRed } style={{ backgroundColor: 'red', marginRight: '5px'}}></button>
            <button style={{ backgroundColor: 'green', marginRight: '5px'}}></button>
            <button style={{ backgroundColor: 'yellow', marginRight: '5px'}}></button>
            <button style={{ backgroundColor: 'white', marginRight: '5px'}}></button>
            <button style={{ backgroundColor: 'black', marginRight: '5px'}}></button>
        </div>
    </>
  )
}

export default App
