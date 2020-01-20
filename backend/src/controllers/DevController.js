const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const {findConnections, sendMessage} = require('../websocket');

//um controller pode ter no máximo 5 métodos
// index: mostrar uma lista
// show: mostrar unico
// store: criar
// update: alterar
// destroy: deletar 

module.exports = {
    async index(request, response) {
        //(req, res) tbm é usado //async é usado para idicar que a resposta esperada pode demorar
        const devs = await Dev.find();
        //retorna uma lista com todos os usuários cadastrados
        return response.json(devs);
    },

    async store(request, response) {
        //(req, res) tbm é usado //async é usado para idicar que a resposta esperada pode demorar
        const { github_username, techs, latitude, longitude } = request.body; //buscando "usename" dentro do request
    
        //comunicação com a api do github para pegar informações do usuário
        //crase habilita o uso de variáveis dentro de strings (template strings/literals JS)
        //await é usado para indicar que o script tem que esperar a resposta do servidor para continuar
        //Ver promisses

        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            //apesar de a resposta conter muito mais informações
            // desta forma é possível pegar apenas o dev quer "desestruturação de resposta"
            const { name = login, avatar_url, bio} = apiResponse.data; //caso não exista o name pega o login
        
            //precisa guardar as techs em um array, split separa a string por virgulas
            //e o map percorre a mesma e tira os espaçamentos com o "trim"
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

            // Filtrar conexõs que estão no máximo há 10 km de distância
            // e que o novo dev tenha apenas as techs filtradas

            const sendSocketMessageTo = findConnections(
                { latitude, longitude},
                techsArray,
            );

            sendMessage(sendSocketMessageTo, 'new-dev', dev);

        }
    
        return response.json(dev);
    },

    async update(){
        //todo
    },

    async destroy(){
        //todo
    }
};