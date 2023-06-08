import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFloppyDisk, faDownload } from '@fortawesome/free-solid-svg-icons';


export const GifItem = ({ setImage, title, url }) => {
    const [blob, setBlob] = useState( '' );

    const getImage = async(url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }

    const loadGifViewer = (url) => {
        document.getElementById('gif-viewer').style.display = 'flex';
        setImage({ url: url, title: title });
    }

    useEffect(() => {
        getImage(url).then(blob => setBlob(blob));
    }, []);

    return (
        <div className="card">
            <img src = { url } alt= { title } onClick = { () => loadGifViewer(url, title) }/>
            <div>
                <p> { title } </p>
                <div>
                    <button id = 'btn-save'><FontAwesomeIcon icon = { faFloppyDisk } /></button>
                    <button id = 'btn-download'><a href = { blob } download = { title }><FontAwesomeIcon icon = { faDownload } /></a></button>
                </div>
            </div>
        </div>
    );
}