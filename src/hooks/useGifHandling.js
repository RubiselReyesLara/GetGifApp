import { Children, useEffect, useState } from "react";

const loadGifJSON = () => {
    return JSON.parse(localStorage.getItem('g_saved')) || {};
}

const saveGifJSON = ( newGifJSON ) => {
    localStorage.setItem('g_saved', JSON.stringify( newGifJSON ));
}

export const useGifHandling = () => {
    let [gif, setGif] = useState();
    const [gifsJSON, setGifJSON] = useState( loadGifJSON );

    const checkGifSavedPreviously = ( gif ) => {
        const allGifs = Object.entries(loadGifJSON());
        let isSaved = false;

        for(let i = 0; i < allGifs.length; i++) {
            if(allGifs[i][1].id === gif.id) {
                isSaved = true;
                break;
            }
        }

        return isSaved;
    }

    useEffect(() => {
        if( gif ){
            const updatedGifsJSON = { ...gifsJSON };

            if(!checkGifSavedPreviously( gif )) { // save
                updatedGifsJSON[gif.id] = gif;
            } else { // delete
                for(let key in updatedGifsJSON) {
                    if(updatedGifsJSON[key].id === gif.id) {
                        delete updatedGifsJSON[key];
                        break;
                    }
                }
            }

            setGifJSON( updatedGifsJSON );
            saveGifJSON( updatedGifsJSON );
            
            setGif(undefined);
        } 
    }, [gif]);

    return [gifsJSON, setGif];
}