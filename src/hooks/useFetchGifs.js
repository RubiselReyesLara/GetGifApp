import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category, numberItems ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    useEffect(() => {
        getGifs( category, numberItems ).then(
            newImages => {
                setImages( newImages );
                setIsLoading( false );
            }
        );
    }, []);

    return {
        images,
        isLoading
    };
}