export interface Joke {
    id: string,
    categories: string[],
    icon_url: string,
    created_at: string
    updated_at: string
    url: string
    value: string
}

export interface SearchedJoke {
    total: number,
    result: Joke[]
}