import { Colors } from "../constant/Colors";
import { colorName, hexColor } from "../types/Pixel";

export const createCustomColors = (colorName: colorName, newColor: hexColor): void => {
    // if (colorName in Colors) {
        Colors[colorName] = newColor;
    // } else {
    //     console.error(`Color ${colorName} does not exist in Colors.`);
    // }
}