
const Header = () => {
    return (
        <div className="p-4 flex justify-between gap-3">
            <form className="w-[18rem] md:w-[45rem]">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <input type="search" id="default-search" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#212121] focus:ring-[#3dd2cc] focus:border-[#3dd2cc] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                    <button type="submit" className="absolute top-[0] end-[0] bottom-[0] bg-[#3dd2cc] hover:bg-[#3dcbd2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                    </button>
                </div>
            </form>

            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">EA</span>
            </div>

        </div>        
    )
}

export default Header