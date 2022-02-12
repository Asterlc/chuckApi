const api = require('../api/api');

exports.get = async (req, res, next) => {
    try {
        console.log(`req.query :>>`, req.query)
        if(req.query.hasOwnProperty('category')){
            this.getByCategory()
        }
        const { data } = await api.get('/random');
        // return res.status(200).send({ ChuckJoke: data.value })
        return res.status(200).send({ data })
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
        const key = req.query
        const keyValue = key.category
        const { data } = await api.get(`/random/?${key}:${keyValue}`);
        return res.status(200).send({ Teste: data.value });
    } catch (error) {
        console.log(`error`, error)
        throw error
    }
}