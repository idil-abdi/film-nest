import GenreMovieList from "./Components/GenreMovieList";
import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import Sidebar from "./Components/Sidebar";
import Slider from "./Components/Slider";

function App() {  
  return (
    <div className="flex">
      <Sidebar/>
      <div className="p-7 text-white text-2xl font-semibold flex-1">
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenreMovieList/>
      </div>
    </div>
  )
}

export default App
