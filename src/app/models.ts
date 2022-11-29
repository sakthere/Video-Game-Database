export interface Game{
    id: string,
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genre: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
    slug: string;
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre{
    name: string;
} 

interface ParentPlatform{
    platform: {
slug: any;
        name: string;
    };
}

interface Publishers{
    name: string;
}

interface Rating{
    id: number;
    count: string;
    title: string;
}

interface Screenshots{
    image: string;
}

interface Trailer{
    data: {
        max: string;
    };
}
