module.exports = async (req, res, next) => {
    const { body } = req;
    switch (Object.keys(body).sort().toString()) {
        case 'categoryIds,content':
            return res.status(400).json({ message: '"title" is required' });
        case 'categoryIds,title':
            return res.status(400).json({ message: '"content" is required' });
        case 'content,title':
            return res.status(400).json({ message: '"categoryIds" is required' });     
        default:
            return next();
    }
};