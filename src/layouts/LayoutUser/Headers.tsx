import { routesUser } from "../../config/router"
import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell"
import { Tooltip } from "antd"
const Headers = () => {
    const NavMenu = [
        { path: "", title: "Movies" },
        { path: "", title: "TV Shows" },
        { path: "", title: "People" },
        { path: "", title: "More" },

    ]
    return (
        <>
            <div className="header w-full h-16 bg-[#0d253f] flex items-center justify-center">
                <div className="content-header w-full md:w-5/6  flex justify-between">
                    <div className="logo-nav flex items-center">
                        <div className="logo w-48 h-5">
                            <Link to={routesUser.home}>
                                <img className="w-full h-full" src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="nav-wrapper">
                            <ul className="flex">
                                {NavMenu.map((item, index) =>
                                    <Tooltip placement="bottom"
                                        title={
                                            <div className="py-1 pl-2 pr-10 hover:bg-gray-50 rounded-sm">
                                                <li className="text-black mr-4 px-2  cursor-pointer "> {item.title}</li>

                                            </div>
                                        }
                                        arrow={false}
                                        style={{ color: "blue" }}
                                        color="#fff"
                                    >
                                        <li className="text-white mr-4 px-2 font-semibold cursor-pointer" key={index}>{item.title}</li>
                                    </Tooltip>

                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="sub-action flex items-center">
                        <Tooltip
                            title={
                                <div>
                                    <ul>
                                        <li className="text-black py-1 px-2 pr-10 hover:bg-[#0d253f] hover:text-white cursor-pointer rounded-sm">Add New Movie</li>
                                        <li className="text-black py-1 px-2 pr-10 hover:bg-[#0d253f] hover:text-white cursor-pointer rounded-sm">Add New TV Show</li>
                                    </ul>
                                </div>
                            }
                            color="#fff"
                            trigger={["click"]}
                        >
                            <div className="plus mr-8 cursor-pointer">
                                <FontAwesomeIcon className="text-white font-bold text-xl" icon={faPlus} />
                            </div>
                        </Tooltip>

                        <div className="laguage mr-8 cursor-pointer">
                            <span className="text-base text-white border px-2 py-[1px] rounded-sm hover:bg-white hover:text-black">VI</span>
                        </div>
                        <div className="bell mr-8 cursor-pointer">
                            <FontAwesomeIcon className="text-white font-bold text-xl" icon={faBell} />
                        </div>
                        <Tooltip
                            title={
                                <span className="text-black">Hồ sơ Và Cài đặt</span>
                            }
                            color="#fff"
                        >
                            <div className="user mr-8 cursor-pointer">
                                <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/300" alt="Avatar" />
                            </div>
                        </Tooltip>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Headers