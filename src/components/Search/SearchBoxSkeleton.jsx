import React from 'react';

const SearchBoxSkeleton = () => {
    return (
        <div className="search_component texture z-50 flex flex-col justify-center items-center px-4 lg:px-8 pt-4 pb-8 md:w-[90%] lg:w-[85vw] max-w-[1232px] mx-auto border border-black/10 bg-white md:relative md:bottom-10 lg:bottom-20 md:rounded-2xl animate-pulse">
            <div className="w-full h-full flex flex-col justify-start items-start ">
                <div className="mont text-white w-full flex max-w-72">
                    <div className="flex-1 text-center py-5 bg-white rounded-md mx-1"></div>
                    <div className="flex-1 text-center py-5 bg-green-600 rounded-md mx-1"></div>
                    <div className="flex-1 text-center py-5 bg-green-600 rounded-md mx-1"></div>
                </div>
                <div className="w-full   mt-3 flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className="h-10 bg-white w-full py-7"></div>
                    <div className="h-10 bg-white w-full py-7"></div>
                    <div className="h-10 bg-white w-full py-7"></div>
                </div>
                <div className="h-16 md:h-10 w-full flex flex-col gap-2 justify-center items-center">
                    <div className="flex-1 h-10 bg-gray-300 rounded-md"></div>
                    <div className="flex-1 h-10 bg-gray-300 rounded-md"></div>
                    <div className="flex-1 h-10 bg-gray-300 rounded-md"></div>
                    <div className="flex-1 h-10 bg-gray-300 rounded-md"></div>
                    <div className="flex-1 h-10 bg-gray-300 rounded-md"></div>
                </div>
                <div className="w-full flex items-center justify-end">
                    <div className="bg-green-600 rounded-md h-10 w-20 py-5 px-10 self-end mt-4"></div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(SearchBoxSkeleton);