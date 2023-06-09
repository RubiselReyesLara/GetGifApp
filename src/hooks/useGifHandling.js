import { useEffect, useState } from "react";

export const useGifHandling = () => {
    const [gifHandling, setGifHandling] = useState();

    useEffect(() => {
        
    }, [gifHandling]);

    return [gifHandling, setGifHandling];
}