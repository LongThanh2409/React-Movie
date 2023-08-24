// import { Segmented } from "antd"
// import { useState } from "react"
import { IMovie } from "../../../interface/movie"
type Props = {
    data_trailers: IMovie[] | undefined
}
const Trailers = ({ data_trailers }: Props,) => {
    // const [timeWindow, setTimeWindow] = useState("now_playing")
    // const handlTimeWindow = () => {
    //     setTimeWindow(timeWindow === "now_playing" ? "upcoming" : "now_playing")
    // }
    return (
        <>
            <div className="content min-h-[350px] pt-8 bg-[#0d253f] bg-opacity-60">
                <div className="title-selecter flex items-center px-10 ">
                    <div className="title-trailers mr-4">
                        <h2 className="text-2xl font-semibold text-white ">Latest Trailers</h2>
                    </div>
                    {/* <div className="selector-trailers flex ">
                        <Segmented style={{ zIndex: "1", borderRadius: "30px", overflow: 'hidden', border: "3px solid green", fontWeight: "bold", }} options={["On TV", "In-Theatres"]}
                            onChange={handlTimeWindow}
                        >
                        </Segmented>
                    </div> */}
                </div>
                <div className="list-movie-trailers ">
                    <div className="list-movie py-6 px-5 flex items-start scroll-trending overflow-x-auto gap-5 ">
                        {
                            data_trailers && data_trailers.length > 0 ? data_trailers.map((item, index) => {
                                if (item.video) {
                                    return (
                                        <div key={index} className="item-card w-80 min-w-[300px]  ">
                                            <div className="image overflow-hidden rounded-md h-44 cursor-pointer hover:scale-105  transition duration-300">
                                                <div className="wrapper-image">
                                                    <img src={"https://image.tmdb.org/t/p/original" + item.poster_path
                                                    } alt="" />
                                                </div>
                                                <div className="option">
                                                    <i></i>
                                                </div>
                                            </div>
                                            <div className="content-movie w-full px-2 pt-3 relative text-center">
                                                <h2 className="text-white font-bold text-xl cursor-pointer">{item.title}</h2>
                                                <p className="text-white">{item.release_date
                                                }</p>

                                            </div>
                                        </div>
                                    )
                                }
                            }

                            )
                                : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trailers