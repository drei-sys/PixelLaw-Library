export type hexColor = `#${string}`

// export type hexColor =  `${/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/}`

// type ColorHexRegex = '/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/\n'

export type colorName = 'blue' | 'red' | 'green' | 'yellow' | 'white' | 'black' | 'violet' | 'orange' | 'brown' | 'gray'

export type color = hexColor | colorName

export type Pixel = {
    color?: hexColor,
    coordinates: Coordinates
}

interface newPixel {
    newType: string
}

type Coordinates = {
    x: number,
    y: number
}