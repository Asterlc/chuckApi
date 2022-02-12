const api = require('../api/api');

exports.get = async (req, res, next) => {
    try {
        console.log(`req.params`, req.params)
        const { data } = await api.get('/random');
        return res.status(200).send({ ChuckJoke: data.value })
    } catch (error) {
        throw error
    }
}

exports.getCategories = async (req, res, next) => {
    try {
        const { data } = await api.get('/categories');
        return res.status(200).send(data);
    } catch (error) {
        throw error
    }
}
exports.getByCategory = async (req, res, next) => {
    try {
        const key = 'category='
        const keyValue =  req.params
        const { data } = await api.get(`/random?${key}${keyValue}`);
        return res.status(200).send(data);
    } catch (error) {
        throw error
    }
}