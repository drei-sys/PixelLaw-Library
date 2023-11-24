export type hexColor = `#${string}`

export type colorName = 'blue' | 'red' | 'green' | 'yellow' | 'white' | 'black' | 'violet' | 'orange' | 'brown'

export type color = hexColor | colorName

export type Pixel = {
    color?: hexColor,
    coordinates: Coordinates
}

type Coordinates = {
    x: number,
    y: number
}