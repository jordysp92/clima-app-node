const axios = require('axios');

const getLugarLAtLng = async(direccion) => {

    let encondeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }


    let coords = resp.data.results[0].geometry.location;
    let location = resp.data.results[0].formatted_address;


    return {
        direccion: location,
        lat: coords.lat,
        lng: coords.lng
    }
}




module.exports = {
    getLugarLAtLng
}