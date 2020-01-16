const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitute, techs } = request.query;
        
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({ //para filtrar os resultados são usados objetos
            techs: {
                $in: techsArray, // $in = operador lógico mongoDB
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coodinates: [longitute, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        });
        //buscar todos os devs raio 10km
        //filtrar por techs
        return response.json( devs );
    }
}