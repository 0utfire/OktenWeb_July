import {IdContext} from "../contextservice";
import React, {useContext, useEffect} from "react";

export const Posts = () => {
    const context = useContext(IdContext)

    useEffect(() => {
        console.log(context);
    })

   return (
       <div>
           123
       </div>
   )
}
