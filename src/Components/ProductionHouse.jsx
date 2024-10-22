import disney from '../Assets/img/disney.png'
import marvel from '../Assets/img/marvel.png'
import nationalG from '../Assets/img/nationalG.png'
import pixar from '../Assets/img/pixar.png'
import starwar from '../Assets/img/starwar.png'

import disneyV from '../Assets/video/disney.mp4'
import marvelV from '../Assets/video/marvel.mp4'
import nationalGeoV from '../Assets/video/nationalGeo.mp4'
import pixarV from '../Assets/video/pixar.mp4'
import starwarsV from '../Assets/video/star-wars.mp4'

const ProductionHouse = () => {
    const productionHouseList = [
        {
            id:1,
            img: disney,
            video: disneyV
        },
        {
            id:2,
            img: marvel,
            video:marvelV
        },
        {
            id:3,
            img: nationalG,
            video: nationalGeoV
        },
        {
            id:4,
            img: pixar,
            video: pixarV
        },
        {
            id:5,
            img: starwar,
            video: starwarsV
        },
    ]
    return (
        <div className='flex gap-5 p-2 px-5 sm:px-16 '>
            {productionHouseList.map((item) => (
                <div key={item.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointe relative shadow-xl shadow-gray-800'> 
                    <video src={item.video} autoPlay loop playsInline muted className='absolute z-0  top-0 rounded-md opacity-0 hover:opacity-50'/> 
                    <img src={item.img} className='w-full z-[1] opacity-100' /> 
                </div>
            ))}
        </div>
    )
}

export default ProductionHouse