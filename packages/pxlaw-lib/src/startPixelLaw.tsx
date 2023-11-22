import { Colors, Platform } from "../constant/Colors"
import React from "react"

// Creates an Array of platform, the default platform is 5x5
function defaultPlatform() {
    for (let i = 0; i < 5; i++) {
        const row = []
        for (let j = 0; j < 5; j++) {
            row.push(Colors.black)
        }
        Platform.push(row)
    }

    return Platform
}

export function startPixelLaw() {
    defaultPlatform()
}

export const DisplayPlatform = ({ defaultPlatform }) => {
    if(!defaultPlatform) return null

    return (
        <div className="grid-container">
            {defaultPlatform.map((platform, index) => (
                <div key={index} className="grid-item">
                    {platform}
                </div>
            ))}
        </div>
    )
}

