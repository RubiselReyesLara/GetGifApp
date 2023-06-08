export const getGifs = async(category, numberItems) => {
    console.log(numberItems)

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ITtZCbiMlxK5IcrIrMAqp9FoekOuqeWe&q=${ category }&limit=${ numberItems }`;

    const response = await fetch( url );
    const { data = [] } = await response.json();

    const gifs = data.map(img => { 
        console.log(img);
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        };
    });

    return gifs;
}