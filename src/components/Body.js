import React, { useEffect } from 'react'
import Login from '../components/Login';
import Browse from '../components/Browse';
import {createBrowserRouter,RouterProvider, useNavigate} from 'react-router-dom';
const Body=()=>{
   
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>

        },{
            path:'/browse',
            element:<Browse/>
        },
    ])

    return(
        <>
     <RouterProvider router={appRouter}/>
        </>
    )
}
export default Body;
