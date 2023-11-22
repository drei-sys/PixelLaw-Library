import { PlatformSize } from "../types/Platform"
import { Colors } from "../constant/Colors"
import { Platform } from "../constant/Colors";

// This function can be use to create a custom platform size
export function createPlatform({x, y}: PlatformSize) {
    for(let i = 0; i < x; i++) {
        const row = []
        for(let j = 0; j < y; j++) {
            row.push(Colors.black)
        }
        Platform.push(row)
    }
}