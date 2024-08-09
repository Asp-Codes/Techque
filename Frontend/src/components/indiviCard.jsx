import React from "react";
import { Button } from "@mui/material";

const indiviCard=()=>{
   
    return (
        <div className="flex flex-col items-center justify-center  border-gray border-2 rounded-sm py-4 px-4 mb-8 rounded-s-md hover:shadow-lg hover:border-orange-600" id="category" style={{ width: 'calc(33.333333% - 16px)' }}>
        <div className="flex items-around justify-between w-full mb-6">
            <p className=" text-left text-xl font-medium font-serif mr-2">Biryani</p>
            <div className="bg-red-300 flex items-around justify-center h-20 w-24"></div>
        </div>

        <div className="flex items-around justify-between w-full">
            <p className=" text-left text-xl font-medium font-serif mr-2">₹45/-</p>
            <Button variant="outlined" sx={{ paddingX:5}}>ADD</Button>
        </div>
        

    </div>
    );
}

export default indiviCard;





