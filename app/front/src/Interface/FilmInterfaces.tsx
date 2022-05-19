export interface FilmInterface {
    id?: number,
    title: string,
    content: string,
    author: string,
    createdAt: string,
    actors: string,
    image: string
    review?: ReviewInterface[]
}

export interface ReviewInterface {
    id?: number,
    comment: string,
    note: number
    author: string
}