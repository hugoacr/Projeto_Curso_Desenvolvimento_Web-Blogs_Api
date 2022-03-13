module.exports = (req, res, next) => {
  try {
    const { displayName } = req.body;
    const minLengthName = 8;

    if (displayName.length < minLengthName) {
      return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};
