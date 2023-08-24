import { useState } from "react";


function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('scroll', toggleVisibility);

    return (
        isVisible &&
        <div className="back-to-top my-auto fixed bottom-10 right-5 w-16 h-16 z-50 bg-red-500 rounded-full cursor-pointer" onClick={scrollToTop}>
            <div className="w-5/6 h-full m-auto ">
                <span className="w-full h-full text-white font-medium flex items-center justify-center">Top</span>
            </div>
        </div>
    );
}
export default BackToTopButton