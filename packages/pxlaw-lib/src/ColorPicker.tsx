import React, { FC } from 'react';
import { colorName } from "../types/Pixel";
import { Colors } from "../constant/Colors";

interface ColorPickerProps {
    value: colorName
    onChange: (color: colorName) => void
}

export const ColorPicker: FC<ColorPickerProps> = ({ value,  onChange }) => {
    return (
        <div>
            {Object.entries(Colors).map(([name, hex]) => (
                <button
                    key={hex}
                    style={{ backgroundColor: hex, marginBottom: '20px', marginRight: '10px' }}
                    onClick={() => onChange(name as colorName)}
                >
                    {name}
                </button>
            ))}
        </div>
    )
}