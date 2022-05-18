export interface FilmInterface {
    id?: number,
    title: string,
    content: string,
    url: string,
    author: string,
    createdAt: string,
    actor: string,
    image:string
}

export interface ReviewInterface {
    id?: number,
    comment: string,
    note: number
}