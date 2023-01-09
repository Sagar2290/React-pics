import axios from "axios";

const searchImages = async (term) => {
    const responce = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID SqkBErt5qUxRcAdPJjQ2AtC5wleokMiIbMUPIUp2SHI'
        },
        params: {
            query: term,
        }
    });

    return responce.data.results;
};

export default searchImages;