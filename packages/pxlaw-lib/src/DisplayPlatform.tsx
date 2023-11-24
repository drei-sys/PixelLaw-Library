import React from "react";
import './DisplayPlatform.css'
import { Colors, Platform } from "../constant/Colors"
import { createPlatform } from "./createPlatform";
import { PlatformSize } from "../types/Platform";
import {color, colorName, hexColor, Pixel} from "../types/Pixel";
import { ColorPicker } from "./ColorPicker";
import { useState, useEffect } from "react";
import { createCustomColors } from './createCustomColors'

// Creates an Array of platform, the default platform is 10x10
function createDefaultPlatform(): string[][] {
    Platform.length = 0

    for (let i = 0; i < 10; i++) {
        const row = []
        for (let j = 0; j < 10; j++) {
            row.push(Colors.black)
        }
        Platform.push(row)
    }

    return Platform
}

type CustomColor = { [K in colorName]?: hexColor }

type DisplayPlatformProps = {
    platformSize?: PlatformSize,
    customColor?: CustomColor
}

export const DisplayPlatform = ({ platformSize, customColor }: DisplayPlatformProps) => {
    const [currentColor, setCurrentColor] = useState<colorName>("white") // default color
    const [platform, setPlatform] = useState(platformSize ? createPlatform(platformSize) : createDefaultPlatform())

    const handleGridItemClick = (rowIndex: number, colIndex: number) => {
        const newPlatform = [...platform]
        newPlatform[rowIndex][colIndex] = currentColor
        setPlatform(newPlatform)
    }

    if(!platform) return null

    useEffect(() => {
        if (customColor) {
            Object.entries(customColor).map(([colorName, hexColor]) => {
                createCustomColors(colorName as colorName, hexColor as hexColor)
                setPlatform(platformSize ? createPlatform(platformSize) : createDefaultPlatform())
            })
        }
    }, [customColor]);


    return (
        <div>
            <ColorPicker value={currentColor} onChange={(newColorName: colorName) => {

                const newColorHex = Colors[newColorName]

                setCurrentColor(newColorHex as colorName)
            }} />
            <div className="grid-container">
                {platform.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {row.map((colorName, colIndex) => (
                            <div
                                key={colIndex}
                                className="grid-item"
                                style={{ backgroundColor: colorName }} // Directly use the hex color value
                                onClick={() => handleGridItemClick(rowIndex, colIndex)}
                            >
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}