import { Colors } from "../constant/Colors";
import { colorName, hexColor } from "../types/Pixel";

export const createCustomColors = (colorName: colorName, newColor: hexColor): void => {
        Colors[colorName] = newColor
}