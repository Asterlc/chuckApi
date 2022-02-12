const api = require('../api/api');

exports.get = async (req, res, next) => {
    try {
        if (req && req.query && req.query.category != undefined) {
            try {
                const keyValue = req.query.category
                const { data } = await api.get(`/random?category=${keyValue}`);
                return res.status(200).send({ ChuckJoke: data.value, category: data.categories[0] });
            } catch (error) {
                throw res.status(400).send({
                    status: error.status,
                    message: error.message
                });
            }
        }
        const { data } = await api.get('/random');
        return res.status(200).send({ ChuckJoke: data.value })
    } catch (error) {
        throw res.status(400).send({ error })
    }
}

exports.getCategories = async (req, res, next) => {
    try {
        const { data } = await api.get('/categories');
        return res.status(200).send(data);
    } catch (error) {
        throw res.status(400).send({message:error.message})
    }
}

// exports.getByCategory = async (req, res, next) => {
//     try {
//         const key = req.query
//         const keyValue = key.category
//         const { data } = await api.get(`/random/?${key}:${keyValue}`);
//         return res.status(200).send({ Teste: data.value });
//     } catch (error) {
//         console.log(`error`, error)
//         throw error
//     }
// }