const api = require('../api/api');

exports.get = async (req, res, next) => {
    try {
        console.log(`req.params`, req.params)
        const { data } = await api.get('/random');
        // return res.status(200).send({ ChuckJoke: data.value })
        return res.status(200).send({data})
    } catch (error) {
        console.log(`error`, error)
        throw error
    }
}

exports.getCategories = async (req, res, next) => {
    try {
        const { data } = await api.get('/categories');
        return res.status(200).send(data);
    } catch (error) {
        console.log(`error`, error)
        throw error
    }
}
exports.getByCategory = async (req, res, next) => {
    try {
        const keyValue = req.params
        const { data } = await api.get(`/random/:category/:${keyValue}`);
        return res.status(200).send({ Teste: data.value });
    } catch (error) {
        console.log(`error`, error)
        throw error
    }
}