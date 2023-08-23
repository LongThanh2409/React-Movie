import BannerHome from "../../public/backgroundbanner.jpg"
import { Segmented } from 'antd';
const Home = () => {
    return (
        <>
            <div className="content-home">
                <div className="banner-home min-h-[300px]"
                    style={{
                        backgroundImage: "url(" + BannerHome + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                    {/* <BannerHome /> */}
                    <div className="text-wrapper w-full min-h-[300px] py-10 px-10 flex flex-col justify-between">
                        <div className="title-wrapper">
                            <h2 className='w-full  text-white text-5xl font-bold'>Welcome.</h2>
                            <h3 className='w-full text-white text-2xl font-semibold'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                        <div className="search-banner w-full h-12 relative bg-white rounded-3xl flex items-center">
                            <input className="w-11/12 ml-1 outline-none pl-5 pr-20 truncate" type="text" name="" id="" placeholder="Search... " />
                            <input className="absolute cursor-pointer hover:text-white h-full px-5 md:px-10 rounded-3xl right-0 bg-gradient-to-r from-cyan-500 to-blue-500" type="submit" name="" id="" value="Search" />
                        </div>
                    </div>
                </div>
                {/* content-trending */}
                <div className="content-trending">
                    <div className="content py-8">
                        <div className="title-selecter flex items-center">
                            <div className="title-trending mr-4">
                                <h2 className="text-2xl font-semibold">Trending</h2>
                            </div>
                            <div className="selector flex">
                                <Segmented style={{ zIndex: "1", backgroundColor: "#0d253f", color: "white" }} options={["Today", "This Week"]} />

                            </div>
                        </div>
                        <div className="list-movie-trending">
                            <div className="list-movie py-6">
                                <div className="item-card w-40 min-w-[150px]  ">
                                    <div className="image overflow-hidden rounded-md">
                                        <div className="wrapper-image">
                                            <img src="	https://www.themoviedb.org/t/p/w220_and_h330_face/laCJxobHoPVaLQTKxc14Y2zV64J.jpg" alt="" />
                                        </div>
                                        <div className="option">
                                            <i></i>
                                        </div>
                                    </div>
                                    <div className="content-movie w-full px-2 pt-6 relative">
                                        <div className="tight absolute -top-5 bg-black w-10 h-10 rounded-full ring ring-green-600">
                                            <p className="text-white text-sm font-bold w-full h-full flex items-center justify-center">8.5</p>
                                        </div>
                                        <h2 className="text-black font-bold">Nữ Hiệp Sĩ Ahsoka</h2>
                                        <p className="text-[#0009]">Aug 22, 2023 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home