import { useEffect, useRef, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
const screenWidth = window.innerWidth;

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getTrendingMovies()
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            setMovieList(resp.data.results);
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth-110
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth-110
    }

    return (
        <div className="p-4">
            <div>
                <HiChevronLeft  onClick={() => sliderLeft(elementRef.current)} className="hidden md:block text-[#3dd2cc] text-[30px] absolute mx-8 mt-[200px] cursor-pointer"/>
                <HiChevronRight onClick={() => sliderRight(elementRef.current)} className="hidden md:block text-[#3dd2cc] text-[30px] absolute mx-8 mt-[200px] cursor-pointer right-0"/>
                <div ref={elementRef} className="flex overflow-x-auto w-full scrollbar-none scroll-smooth">
                    {movieList.map((item, index) => index < 6 && (
                        <img key={index} className="min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-[#3dd2cc] transition-all duration-100 ease-in-out" src={IMAGE_BASE_URL+item.backdrop_path} alt="backdrop" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider