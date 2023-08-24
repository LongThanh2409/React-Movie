import instance from "../config";
const searchMovie = async (query: string, category: string, page: number) => {
    const response = await instance.get(`/search/${category}?query=${query}&page=${page}`);
    return response.data;
}
export { searchMovie }