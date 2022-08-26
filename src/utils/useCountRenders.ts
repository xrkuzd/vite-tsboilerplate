import { useRef } from "react";

export const useCountRenders = () =>
{
    const renders = useRef(0);
    console.log(renders.current++);
};



// Custopm hook to track how many renders have occurred within the component we use this in

// use like this: useCountRenders()