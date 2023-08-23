import { useEffect, useState } from 'react'
import Headers from './Headers'
import { ReactNode } from "react"
type DefaultLayoutProps = {
    children: ReactNode
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down');
    console.log(scrollDirection);

    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setScrollDirection(currentPosition > scrollPosition ? 'up' : 'down');
        setScrollPosition(currentPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);
    return (
        <div className="containers w-full">
            <div className={`w-full  ${scrollDirection === 'up' ? '-translate-y-full' : ''} transition-transform duration-500 fixed top-0 z-50`}>
                <Headers />
            </div>
            <div className="content-children pt-16 w-full 2xl:w-5/6 mx-auto h-[1000px]">
                {children}
            </div>

        </div>
    )
}

export default DefaultLayout