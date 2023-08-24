import { IMovie } from "../interface/movie";
import instance from "./config";
const getAllMovieTrending = async (page: number, time: string): Promise<IMovie[]> => {
    const response = await instance.get("trending/movie/" + time, {
        params: {
            page: page,
        },
    });
    return response.data.results;
}
const getDetailMovie = async (id: number) => {
    const response = await instance.get("movie/" + id);
    return response;
}
const getMovieTrailers = async (Movie: string): Promise<IMovie[]> => {
    const response = await instance.get("movie/" + Movie);
    return response.data.results;
}
export { getAllMovieTrending, getDetailMovie, getMovieTrailers }

