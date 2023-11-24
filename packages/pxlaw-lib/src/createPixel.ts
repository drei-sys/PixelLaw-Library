import { Pixel } from "../types/Pixel";
import { Colors, Platform } from "../constant/Colors";

export function createPixel({color = Colors.blue, coordinates}: Pixel) {

    if (coordinates.x >= 0 && coordinates.x < 5 && coordinates.y >= 0 && coordinates.y < 5) {
        Platform[coordinates.x][coordinates.y] = color

        console.log(Platform)

        return {
            color,
            coordinates
        }
    } else {
        throw new Error('Invalid coordinates')
    }
}