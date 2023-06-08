export const GifViewer = ({ image }) => {
    const closeGifViewer = () => {
        const viewer = document.getElementById('gif-viewer');
        viewer.style.display = 'none';
    };

    return (
        <div id="gif-viewer" onClick = { closeGifViewer }>
            <img src={ image.url }></img>
            <p>{ image.title }</p>
        </div>
    );
}

