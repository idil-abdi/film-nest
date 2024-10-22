import { useEffect, useRef, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
import MovieCard from "./MovieCard"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"

const MovieList = ({genreId, index_}) => {
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null);

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

    useEffect(() => {
        getMovieByGenreId();
    })
    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results)
        })
        
    }
return (
    <div className="relative" >
        <IoChevronBackOutline  onClick={() =>  slideLeft(elementRef.current)} className={`hidden md:block text-white text-[50px] absolute ${index_%3==0 ? 'mt-[80px]' : 'mt-[150px]'}  cursor-pointer z-10 p-2`}/>
        <div ref={elementRef} className="flex overflow-x-auto gap-8 py-5 px-3 scrollbar-none scroll-smooth">
            {movieList.map((item, index) => index < 13 && (
                
                <MovieCard key={index} movie={item}/>
                    
                
            ))}
        </div> 
        <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)} className={`text-[50px] text-white hidden md:block p-2 cursor-pointer mt-[150px]  ${index_%3==0 ? 'mt-[80px]' : 'mt-[150px]'} z-10 top-0 absolute right-0`}/>
    </div>
)
}

export default MovieList