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

module.exports = {
    create,
};