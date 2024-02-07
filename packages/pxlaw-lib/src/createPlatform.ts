import { PlatformSize } from "../types/Platform"
import { Colors } from "../constant/Colors"
import { Platform } from "../constant/Colors";

export function createPlatform({x, y}: PlatformSize): string[][] {
    Platform.length = 0

    for(let i = 0; i < x; i++) {
        const row: string[] = []
        for(let j = 0; j < y; j++) {
            row.push(Colors.gray)
        }
        Platform.push(row)
    }

    return Platform
}