const userServices = require('../services/userServices');

const create = async (req, res, next) => {
    try {
        const { displayName, email, password, image } = req.body;
        const { code, response } = await userServices.create(displayName, email, password, image);
        return res.status(code).json(response);
    } catch (error) {
        next(error);
    }
};

const getAll = async (req, res, next) => {
    try {
        const { code, response } = await userServices.getAll();
        return res.status(code).json(response);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { code, response } = await userServices.getById(id);
        return res.status(code).json(response);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    getAll,
    getById,
};