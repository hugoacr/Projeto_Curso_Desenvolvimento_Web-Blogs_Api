module.exports = async (req, res, next) => {
    const { body } = req;
    
    if (Object.keys(body).includes('categoryIds')) {
        return res.status(400).json({ message: 'Categories cannot be edited' });
    }

    switch (Object.keys(body).sort().toString()) {
        case 'content':
            return res.status(400).json({ message: '"title" is required' });
        case 'title':
            return res.status(400).json({ message: '"content" is required' });   
        default:
            return next();
    }
};