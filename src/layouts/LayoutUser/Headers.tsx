import { routesUser } from "../../config/router"
import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell"
import { Drawer, Tooltip } from "antd"
import { useState } from "react"
const Headers = () => {
    const NavMenu = [
        { path: "", title: "Movies" },
        { path: "", title: "TV Shows" },
        { path: "", title: "People" },
        { path: "", title: "More" },

    ]
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
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
                        <div className="nav-wrapper hidden xl:block">
                            <ul className="flex">
                                {NavMenu.map((item, index) =>
                                    <Tooltip key={index} placement="bottom"
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
                    <div className="sub-action xl:flex items-center hidden">
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
                                {/* <img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/300" alt="Avatar" /> */}
                                <img className="w-8 h-8 rounded-full" src="https://tranh3mien.vn/wp-content/uploads/2023/07/Tin-tuc-Hinh-anh-Clip-Tran-Ha-Linh-30-video-moi-nhat-3.jpg" alt="Avatar" />

                            </div>
                        </Tooltip>

                    </div>
                    <div className="menu-moblie xl:hidden">
                        <div onClick={showDrawer} className="menu-moblie__wrapper pr-10">
                            <FontAwesomeIcon className="text-3xl text-white" icon={faBars} />
                        </div>
                        <Drawer title={
                            <h1 className="text-xl text-white">Menu Mobile</h1>
                        }
                            /// style icon close color white
                            closeIcon={<FontAwesomeIcon className="text-white text-2xl" icon={faTimes} />}
                            width={300} zIndex={0} style={{ backgroundColor: "#0d253f", zIndex: "2" }} placement="right" onClose={onClose} open={open}>
                            <div className="nav-wrapper ">
                                <ul className="">
                                    {NavMenu.map((item, index) =>
                                        <Tooltip key={index} placement="bottom"
                                            title={
                                                <div className="py-1 pl-2 pr-10 hover:bg-gray-50 rounded-sm">
                                                    <li className="text-black mr-4 px-2  cursor-pointer "> {item.title}</li>

                                                </div>
                                            }
                                            arrow={false}
                                            style={{ color: "blue" }}
                                            color="#fff"
                                        >
                                            <li className="text-white mr-4 px-2 pt-2 font-semibold cursor-pointer" key={index}>{item.title}</li>
                                        </Tooltip>

                                    )}
                                </ul>
                            </div>
                        </Drawer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headers