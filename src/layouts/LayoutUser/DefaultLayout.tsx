import { useEffect, useState } from 'react'
import Headers from './Headers'
import { ReactNode } from "react"
import Footers from './Footers'
type DefaultLayoutProps = {
    children: ReactNode
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down');

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollPosition]);
    return (
        <div className="containers w-full">
            <div className={`w-full  ${scrollDirection === 'up' ? '-translate-y-full' : ''} transition-transform duration-500 fixed top-0 z-50`}>
                <Headers />
            </div>
            <div className="content-children pt-16 w-full  mx-auto ">
                {children}
            </div>
            <div className="footer mt-10">
                <Footers />
            </div>
        </div>
    )
}

export default DefaultLayout