const ALL_DIRECTIONS = <const> ['up', 'down', 'right', 'left'];
export type Direction = typeof ALL_DIRECTIONS[number]

export class DirectionManager {
    public static random(): Direction
    {
        const rand = Math.floor(Math.random() * 4)
        return ALL_DIRECTIONS[rand]
    }
}