import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useMemo } from 'react'
import { useQuery } from 'react-query';
import { searchMovie } from '../api/Search/search';
import { useLocation, useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';
import { IMovie } from '../interface/movie';
import Image_Default from '../components/Image';
const Search_Home = () => {
    // const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();
    const searchValue = new URLSearchParams(location.search).get("query") || "";
    const [scrollPosition, setScrollPosition] = useState(0);
    const [searchValues, setSearchValue] = useState("")
    const [scrollDirection, setScrollDirection] = useState('down');
    const [cate, setCate] = useState('tv');
    const [page, setPage] = useState(1);
    const { data } = useQuery(["result-query", cate, searchValue, page], () => searchMovie(searchValue, cate, page), {
        staleTime: 1000 * 60, // 1 phút
    })
    console.log(data);

    //
    const handlOnClick = (path: string) => {
        setCate(path);
        setPage(1);
        navigate(`/search/${path}/?query=${searchValue}`, { replace: true })
    }
    //
    const handldOnsubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setPage(1);
        navigate(`/search/${cate}/?query=${searchValues}`)
    }
    //
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        navigate(`/search/${cate}/?query=${searchValue}&page=${newPage}`)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setScrollDirection(currentPosition > scrollPosition ? 'up' : 'down');
        setScrollPosition(currentPosition);
    };
    useMemo(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    const menuSearch = [
        { title: "TV Shows", path: "tv" },
        { title: "Movies", path: "movie" },
        { title: "People", path: "person" },
        { title: "Keywords", path: "keyword" },
        { title: "Collection", path: "collection" },
        { title: "Compaines", path: "company" },
        { title: "Networks", path: "network" }
    ]
    return (
        <>
            <div className="content-search">
                <div className="content-search__wrapper w-full bg-white">
                    <div className={`content-search__wrapper__search w-full h-11 border-b bg-white ${scrollDirection === 'up' ? ' top-0' : 'top-16'} transform duration-300 fixed z-40 `}>
                        <form onSubmit={handldOnsubmit} className='w-5/6 flex items-center gap-3 mx-auto h-full '>
                            <span>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            <input onChange={(e) => setSearchValue(e.target.value)} className="w-full h-full outline-none italic" type="text" placeholder="Search for a movie, tv show, person..." />
                        </form>
                    </div>
                </div>
                <div className="content-wrapper flex flex-col xl:flex-row items-start w-full xl:w-5/6 pt-10 xl:pt-20 mx-auto">
                    <div className="content-box-left xl:w-64 w-full border-2 overflow-hidden xl:rounded-xl">
                        <div className="content-box-left__wrapper w-full ">
                            <div className="title-search p-3 xl:p-5 bg-[#01B4E4] ">
                                <h3 className='text-xl font-semibold text-white'>Search Results</h3>
                            </div>
                            <div className="search_menu_scroller overflow-auto ">
                                <ul className='flex xl:block'>
                                    {
                                        menuSearch.map((itemMenu, index) =>
                                            <li key={index} className={`inline-flex w-full ${itemMenu.path === cate ? "bg-gray-200" : ""} items-center justify-between hover:bg-gray-200 px-5 xl:p-3 cursor-pointer group`}>
                                                <span onClick={() => handlOnClick(itemMenu.path)} className={`block w-full ${itemMenu.path === cate ? "font-semibold" : ""} `}>{itemMenu.title}</span>
                                                {/* <span className={`bg-gray-200 text-gray-500 group-hover:bg-white  px-1 rounded-lg `}>{
                                                    // tổng số kết quả
                                                    // data?.total_results
                                                }</span> */}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="content-box-right flex-1 px-5 pt-10 xl:pt-0 xl:pl-8 ">
                        <div className="conten-box-right__wrapper w-full">
                            {
                                data && data?.results && data.results.length > 0 ?
                                    data.results.map((item: IMovie, index: number) =>
                                        <div key={index} className="card-result flex w-full h-36 border-2 rounded-xl overflow-hidden mb-5">
                                            <div className="image min-w-[94px] w-[94px] cursor-pointer">
                                                <Image_Default
                                                    className='w-full h-full object-cover'
                                                    src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                                                    alt={item.name || item.title}
                                                />
                                            </div>
                                            <div className="detail pl-3 py-3 my-auto">
                                                <div className="wrapper">
                                                    <h2 className='text-lg font-semibold hover:text-gray-500 cursor-pointer'>{item.name || item.title}</h2>
                                                    <span className='text-[#999] text-sm'>{item.first_air_date || item.release_date}</span>
                                                </div>
                                                <div className="desc mt-2 ">
                                                    <div className="detail-content overflow-hidden line-clamp-2">
                                                        <p className='text-sm '>{item.overview} </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ) : <div>
                                        <h1 className='text-2xl font-semibold text-center'>No results found for "{searchValue}"</h1>
                                    </div>
                            }

                        </div>
                        <div className="paging">
                            {
                                data?.total_results >= 20 &&
                                <div className="paging__wrapper w-full flex justify-center">
                                    <Pagination
                                        current={page}
                                        total={data?.total_results}
                                        onChange={handlePageChange}
                                        disabled={data?.total_results <= 20}
                                        //tổng số page
                                        pageSize={20}
                                    />
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search_Home