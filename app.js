const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;


const getLugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async() => {

    try {
        let coors = await getLugar.getLugarLAtLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (error) {
        return 'No se pudo determinar el clima en ' + argv.direccion;
    }

}


getInfo(argv.direccion).then(resp => {
        console.log(resp);
    })
    .catch(error => {
        console.log(error);
    })