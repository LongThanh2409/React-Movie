import { useQuery } from "react-query";
import BannerHome from "/public/backgroundbanner.jpg"
import "./HomeItem/Home.css"
import { Segmented } from 'antd';
import { getAllMovieTrending, getMovieTrailers } from "../../api/ListMovie";
import { useState } from "react";
import Trailers from "./HomeItem/Trailers";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState("")
    const [timeWindow, setTimeWindow] = useState("day")
    const [TVorMovie, setTVorMovie] = useState("now_playing")
    const { data, isLoading } = useQuery(["trending", timeWindow], () => getAllMovieTrending(1, timeWindow), {
        staleTime: 1000 * 60 * 5, // 5 phút
    })
    const { data: data_onTV } = useQuery(["trailers", TVorMovie], () => getMovieTrailers(TVorMovie), {
        staleTime: 1000 * 60 * 5, // 5 phút
    })
    const handlTimeWindow = () => {
        setTimeWindow(timeWindow === "day" ? "week" : "day")
    }
    const handlTVorMovie = () => {
        setTVorMovie(TVorMovie === "now_playing" ? "upcoming" : "now_playing")
    }
    const handldOnsubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        // search: "/search/tv?query=:query",
        navigate(`/search/tv?query=${searchValue}`)
    }
    return (
        <>
            <div className="content-home w-full 2xl:w-5/6 mx-auto">
                <div className="banner-home min-h-[300px]"
                    style={{
                        backgroundImage: "url(" + BannerHome + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                    {/* <BannerHome /> */}
                    <div className="text-wrapper w-full min-h-[300px] py-10 px-3 xl:px-10 flex flex-col justify-between">
                        <div className="title-wrapper">
                            <h2 className='w-full  text-white text-5xl font-bold'>Welcome.</h2>
                            <h3 className='w-full text-white text-2xl font-semibold'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                        <div className="search-banner w-full h-12 relative bg-white rounded-3xl flex items-center">
                            <form onSubmit={handldOnsubmit} className=" w-full h-12 relative bg-white rounded-3xl flex items-center">
                                <input value={searchValue} className="w-11/12 ml-1 outline-none pl-5 pr-20 truncate" type="text" name="" id="" placeholder="Search... "
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                                <input className="absolute cursor-pointer hover:text-white h-full px-5 md:px-10 rounded-3xl right-0 bg-gradient-to-r from-cyan-500 to-blue-500" type="submit" name="" id="" value="Search" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* content-trending */}
                <div className="content-trending">
                    <div className="content py-8 pl-5 xl:pl-8">
                        <div className="title-selecter flex items-center w-full">
                            <div className="title-trending mr-4">
                                <h2 className="text-2xl font-semibold">Trending</h2>
                            </div>
                            <div className="selector flex">
                                <Segmented pattern="" style={{ zIndex: "1", borderRadius: "30px", overflow: 'hidden', border: "1px solid black", fontWeight: "bold", }} options={["Today", "This Week"]}
                                    onChange={handlTimeWindow}
                                >
                                </Segmented>
                            </div>
                        </div>
                        <div className="list-movie-trending relative afterTrending">
                            <div className="list-movie py-6 flex ite  ms-start scroll-trending overflow-auto gap-3 xl:gap-5 ">
                                {
                                    isLoading ? (
                                        Array([data]).map((_, index) =>
                                            <div key={index} className="image overflow-hidden rounded-md w-40 min-w-[150px] h-56 opacity-80">
                                                <div className="wrapper-image h-full">
                                                    <img className="h-full object-cover" src="https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg" alt="" />
                                                </div>
                                                <div className="option">
                                                    <i></i>
                                                </div>
                                            </div>
                                        )
                                    )
                                        :
                                        data && data.length > 0 ? data.map((item, index) =>
                                            <div key={index} className="item-card w-40 min-w-[150px]  ">
                                                <div className="image overflow-hidden rounded-md">
                                                    <div className="wrapper-image">
                                                        <img src={"https://image.tmdb.org/t/p/original" + item.poster_path
                                                        } alt="" />
                                                    </div>
                                                    <div className="option">
                                                        <i></i>
                                                    </div>
                                                </div>
                                                <div className="content-movie w-full px-2 pt-6 relative">
                                                    <div className="tight absolute -top-5 bg-black w-10 h-10 rounded-full ring ring-green-600">
                                                        <p className="text-white text-sm font-bold w-full h-full flex items-center justify-center">  {item?.vote_average!.toFixed(1)}</p>
                                                    </div>
                                                    <h2 className="text-black font-bold">{item.title}</h2>
                                                    <p className="text-[#0009]">{item.release_date
                                                    }</p>
                                                </div>
                                            </div>
                                        )
                                            : null
                                }


                            </div>
                        </div>
                    </div>

                </div>
                <div className="content-trailers" style={{
                    backgroundImage: "url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionX: "center",
                }}>
                    {/* Trailers */}
                    <Trailers data_trailers={data_onTV} />
                </div>
                <div className="content-TV-Movie">
                    <div className="content py-8 pl-8">
                        <div className="title-selecter flex items-center">
                            <div className="title-TV-Movie mr-4">
                                <h2 className="text-2xl font-semibold">What's Popular</h2>
                            </div>
                            <div className="selector flex">
                                <Segmented style={{ zIndex: "1", borderRadius: "30px", overflow: 'hidden', border: "1px solid black", fontWeight: "bold", }} options={["On TV", "In-Theatres"]}
                                    onChange={handlTVorMovie}
                                >
                                </Segmented>
                            </div>
                        </div>
                        <div className="list-TV-Movie relative afterTrending">
                            <div className="list-movie py-6 flex items-start scroll-trending overflow-auto gap-5 ">
                                {
                                    isLoading ? (
                                        Array([data_onTV]).map((_, index) =>
                                            <div key={index} className="image overflow-hidden rounded-md w-40 min-w-[150px] h-56 opacity-80">
                                                <div className="wrapper-image h-full">
                                                    <img className="h-full object-cover" src="https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg" alt="" />
                                                </div>
                                                <div className="option">
                                                    <i></i>
                                                </div>
                                            </div>
                                        )

                                    )
                                        :
                                        data_onTV && data_onTV.length > 0 ? data_onTV.map((item, index) =>
                                            <div key={index} className="item-card w-40 min-w-[150px]  ">
                                                <div className="image overflow-hidden rounded-md">
                                                    <div className="wrapper-image">
                                                        <img src={"https://image.tmdb.org/t/p/original" + item.poster_path
                                                        } alt="" />
                                                    </div>
                                                    <div className="option">
                                                        <i></i>
                                                    </div>
                                                </div>
                                                <div className="content-movie w-full px-2 pt-6 relative">
                                                    <div className="tight absolute -top-5 bg-black w-10 h-10 rounded-full ring ring-green-600">
                                                        <p className="text-white text-sm font-bold w-full h-full flex items-center justify-center">  {item.vote_average!.toFixed(1)}</p>
                                                    </div>
                                                    <h2 className="text-black font-bold">{item.title}</h2>
                                                    <p className="text-[#0009]">{item.release_date
                                                    }</p>
                                                </div>
                                            </div>
                                        )
                                            : null
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Home