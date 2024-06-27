import React from "react";
import IndiviCard from "./indiviCard";

const cardProduct =()=>{
    const numberOfCards = 7;
    return(
        <div className="w-full  p-6 border-dashed border-b-2">
            <div className="flex items-center justify-start mb-8" id="category">
                    <p className=" text-left text-xl font-medium font-serif mr-2">Chicken</p>
                    <p className=" text-left text-xl font-bold font-serif bg-blue-500 py-1 px-3 rounded-sm text-white">10</p>
            </div>

            <div className="border-3 flex items-center justify-between flex-wrap" id="category">
            {Array.from({ length: numberOfCards }).map((_, index) => (
                    <IndiviCard key={index} />
                ))}
            </div>

        </div>
    );
}

export default cardProduct;