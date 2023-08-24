export interface IMovie {
    id?: number;
    adult?: boolean;
    backdrop_path?: string;
    original_language?: string;
    original_title?: string;
    name?: string;
    first_air_date?: string;
    title?: string;
    poster_path?: string;
    overview?: string;
    release_date?: string;
    vote_average?: number;
    vote_count?: number;
    popularity?: number;
    genre_ids?: number[];
    video?: boolean;
}