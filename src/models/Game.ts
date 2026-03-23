class Game {
    category?: string
    description: string
    image: string
    system?: string
    title: string
    id: number
    rating?: number

    constructor(
        id: number,
        description: string,
        image: string,
        title: string,
        system?: string,
        category?: string,
        rating?: number
    ) {
        this.id = id
        this.category = category
        this.description = description
        this.image = image
        this.system = system
        this.title = title
        this.rating = rating
    }
}

export default Game
