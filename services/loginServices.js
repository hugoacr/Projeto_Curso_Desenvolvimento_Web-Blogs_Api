const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const createNewLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || password !== user.password) {
    return { code: 400, response: { message: 'Invalid fields' } }; 
  }
  const token = jwtGenerator({ id: user.id, email });
  return { code: 200, response: { token } };
};
  
  module.exports = {
    createNewLogin,
  };